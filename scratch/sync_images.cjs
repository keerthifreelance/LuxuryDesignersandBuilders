const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'images', 'pics', 'workpics');
const publicDir = path.join(process.cwd(), 'public', 'images', 'pics', 'workpics');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

files.forEach(f => {
  const srcPath = path.join(srcDir, f);
  const destPath = path.join(publicDir, f);
  if (fs.statSync(srcPath).isFile()) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f} -> public/images/pics/workpics/`);

    // If file is .png, also copy as .jpeg (or vice versa) if needed
    const ext = path.extname(f).toLowerCase();
    const nameWithoutExt = path.basename(f, ext);

    if (ext === '.png') {
      const jpegAlias = path.join(publicDir, nameWithoutExt + '.jpeg');
      if (!fs.existsSync(jpegAlias)) {
        fs.copyFileSync(srcPath, jpegAlias);
        console.log(`Created JPEG alias: ${nameWithoutExt}.jpeg`);
      }
    } else if (ext === '.jpeg' || ext === '.jpg') {
      const pngAlias = path.join(publicDir, nameWithoutExt + '.png');
      if (!fs.existsSync(pngAlias)) {
        fs.copyFileSync(srcPath, pngAlias);
        console.log(`Created PNG alias: ${nameWithoutExt}.png`);
      }
    }
  }
});

console.log('Sync complete!');
