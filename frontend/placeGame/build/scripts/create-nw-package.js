const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '../..');
const distPath = path.join(projectRoot, 'dist');

// 确保 dist 目录存在
if (!fs.existsSync(distPath)) {
    console.error('错误: 找不到 dist 目录，请先运行 npm run build');
    process.exit(1);
}

// 创建 NW.js 专用的 package.json
const nwPackageJson = {
    "name": "placegame-nw",
    "main": "index.html",
    "window": {
        "title": "我的 Vue 桌面应用",
        "width": 1200,
        "height": 800,
        "min_width": 800,
        "min_height": 600,
        "icon": "app.ico",
        "show": true,
        "toolbar": false,
        "frame": true,
        "resizable": true,
        "fullscreen": false
    }
};

// 写入到 dist/package.json
fs.writeFileSync(
    path.join(distPath, 'package.json'),
    JSON.stringify(nwPackageJson, null, 2)
);

console.log('已创建 NW.js 专用的 package.json 到 dist 目录');

// 如果 public/app.ico 存在，复制到 dist 目录
// const iconSource = path.join(projectRoot, 'public', 'app.ico');
// const iconDest = path.join(distPath, 'app.ico');

// if (fs.existsSync(iconSource)) {
//     fs.copyFileSync(iconSource, iconDest);
//     console.log('已复制图标文件到 dist 目录');
// } else {
//     console.log('警告: 找不到图标文件 public/app.ico');
// }