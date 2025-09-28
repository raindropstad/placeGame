const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// 修正：项目根目录应该是 start.js 的上两级目录
const projectRoot = path.resolve(__dirname, '../..');
// 修正：NW.js 路径应该在项目根目录的 nwjs 文件夹中
const nwExePath = path.join(projectRoot, 'nwjs', 'nwjs-sdk-v0.103.1-win-x64', 'nw.exe');
// 添加：dist 目录路径
const distPath = path.join(projectRoot, 'dist');

console.log('项目根目录:', projectRoot);
console.log('NW.js 路径:', nwExePath);
console.log('Dist 目录:', distPath);

// 检查 dist 目录是否存在
if (!fs.existsSync(distPath)) {
    console.error('错误: 找不到 dist 目录，请先运行 npm run build');
    process.exit(1);
}

// 检查 NW.js 可执行文件是否存在
if (!fs.existsSync(nwExePath)) {
    console.error('错误: 找不到 NW.js 可执行文件');
    console.error('请检查路径:', nwExePath);
    
    // 显示项目目录结构帮助诊断
    console.log('\n项目目录结构:');
    const nwjsDir = path.join(projectRoot, 'nwjs');
    if (fs.existsSync(nwjsDir)) {
        console.log('nwjs 目录内容:', fs.readdirSync(nwjsDir));
    } else {
        console.log('nwjs 目录不存在');
    }
    
    process.exit(1);
}

console.log('正在启动 NW.js...');

// 启动 NW.js，指向 dist 目录而不是项目根目录
try {
    const nwProcess = spawn(nwExePath, [distPath], {
        stdio: 'inherit',
        cwd: projectRoot,
        shell: true  // 添加 shell: true 解决路径问题
    });

    nwProcess.on('error', (error) => {
        console.error('启动 NW.js 时出错:', error);
    });

    nwProcess.on('close', (code) => {
        console.log(`NW.js 已退出，退出码: ${code}`);
    });

} catch (error) {
    console.error('启动失败:', error);
}