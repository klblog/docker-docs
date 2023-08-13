
const path = require('path');
const fs = require('fs-extra');

const sourceDir = path.join(__dirname,'../.vitepress/dist');
const targetDir = path.join(__dirname, '../docs');

// 读取源文件夹中的文件列表
fs.copy(sourceDir, targetDir, err => {
  if (err) {
    console.error('Error copying directory:', err);
  } else {
    console.log('Directory copied successfully.');
  }
});