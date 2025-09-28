v// build/scripts/pack-win.js
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

class Packager {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '../..');
    this.outputPath = path.join(this.projectRoot, 'output');
  }

  // 创建 ZIP 便携版
  createPortableZip() {
    const appName = require('../../package.json').name;
    const winDir = path.join(this.outputPath, `${appName}-win-x64`);
    const zipPath = path.join(this.outputPath, `${appName}-win-x64.zip`);
    
    if (!fs.existsSync(winDir)) {
      throw new Error('未找到构建输出，请先运行 npm run build:win');
    }
    
    console.log('创建便携版 ZIP...');
    
    // 使用 PowerShell 压缩（Windows 原生）
    const psCommand = `Compress-Archive -Path "${winDir}\\*" -DestinationPath "${zipPath}" -Force`;
    execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });
    
    console.log('✅ 便携版创建完成: ' + zipPath);
  }
}

// 运行打包
new Packager().createPortableZip();