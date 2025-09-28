// build/scripts/build-win.js
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

class NwBuilder {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '../..');
    this.nwPath = path.join(this.projectRoot, 'nwjs', 'nwjs-sdk-v0.103.1-win-x64');
    this.distPath = path.join(this.projectRoot, 'dist');
    this.outputPath = path.join(this.projectRoot, 'output');
  }

  // 检查必要文件
  checkRequirements() {
    console.log('检查构建环境...');
    
    if (!fs.existsSync(this.nwPath)) {
      throw new Error('NW.js SDK 未找到，请检查路径: ' + this.nwPath);
    }
    
    if (!fs.existsSync(this.distPath)) {
      throw new Error('Vue 构建输出未找到，请先运行 npm run build');
    }
    
    console.log('✅ 环境检查通过');
  }

  // 创建应用包
  createAppPackage() {
    console.log('创建应用包...');
    
    const appName = require('../../package.json').name;
    const winOutputPath = path.join(this.outputPath, `${appName}-win-x64`);
    
    // 清空输出目录
    fs.removeSync(winOutputPath);
    fs.ensureDirSync(winOutputPath);
    
    // 复制 NW.js 文件
    console.log('复制 NW.js 运行时...');
    fs.copySync(this.nwPath, winOutputPath);
    
    // 创建 package.nw 文件（其实就是 zip 压缩包）
    console.log('创建应用资源包...');
    const packageNwPath = path.join(winOutputPath, 'package.nw');
    
    // 使用 Node.js 创建 zip 文件
    this.createZipPackage(this.distPath, packageNwPath);
    
    // 重命名 nw.exe 为应用名
    const exePath = path.join(winOutputPath, 'nw.exe');
    const newExePath = path.join(winOutputPath, `${appName}.exe`);
    
    if (fs.existsSync(exePath)) {
      fs.renameSync(exePath, newExePath);
    }
    
    console.log('✅ 应用包创建完成: ' + winOutputPath);
    return winOutputPath;
  }

  // 创建 ZIP 包（模拟 package.nw）
  createZipPackage(sourceDir, outputPath) {
    const archiver = require('archiver');
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });
    
    return new Promise((resolve, reject) => {
      output.on('close', () => resolve());
      archive.on('error', reject);
      
      archive.pipe(output);
      archive.directory(sourceDir, false);
      archive.finalize();
    });
  }

  // 主构建方法
  async build() {
    try {
      this.checkRequirements();
      const outputPath = this.createAppPackage();
      
      console.log('\n🎉 构建成功！');
      console.log('应用位置: ' + outputPath);
      console.log('可执行文件: ' + path.join(outputPath, require('../../package.json').name + '.exe'));
      
    } catch (error) {
      console.error('❌ 构建失败:', error.message);
      process.exit(1);
    }
  }
}

// 安装缺少的依赖
function installDependencies() {
  try {
    require('fs-extra');
    require('archiver');
  } catch (error) {
    console.log('安装构建依赖...');
    execSync('npm install fs-extra archiver --save-dev', { stdio: 'inherit' });
  }
}

// 运行构建
installDependencies();
new NwBuilder().build();