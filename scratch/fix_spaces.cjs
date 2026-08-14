const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public', 'images', 'pics', 'workpics');

const spaceFiles = [
  { original: 'Night view.jpg.jpeg', clean: 'Night_view.jpg.jpeg' },
  { original: 'David prem.jpg.jpeg', clean: 'David_prem.jpg.jpeg' },
  { original: 'Elevation (2).jpg.jpeg', clean: 'Elevation_2.jpg.jpeg' },
  { original: 'Elevation  -2.jpg.jpeg', clean: 'Elevation_-2.jpg.jpeg' },
  { original: 'Elevation 4.jpg.jpeg', clean: 'Elevation_4.jpg.jpeg' },
  { original: 'View - 1 (1).jpg.jpeg', clean: 'View_-_1_1.jpg.jpeg' }
];

spaceFiles.forEach(({ original, clean }) => {
  const origPath = path.join(publicDir, original);
  const cleanPath = path.join(publicDir, clean);
  if (fs.existsSync(origPath)) {
    fs.copyFileSync(origPath, cleanPath);
    console.log(`Created clean alias: ${clean}`);
  }
});

// Update AboutSection.tsx
let about = fs.readFileSync('src/components/AboutSection.tsx', 'utf8');
about = about.replace(/Night view\.jpg\.jpeg/g, 'Night_view.jpg.jpeg');
fs.writeFileSync('src/components/AboutSection.tsx', about, 'utf8');

// Update src/data/content.ts
let content = fs.readFileSync('src/data/content.ts', 'utf8');
content = content.replace(/Night view\.jpg\.jpeg/g, 'Night_view.jpg.jpeg');
content = content.replace(/David prem\.jpg\.jpeg/g, 'David_prem.jpg.jpeg');
content = content.replace(/Elevation \(2\)\.jpg\.jpeg/g, 'Elevation_2.jpg.jpeg');
content = content.replace(/Elevation  -2\.jpg\.jpeg/g, 'Elevation_-2.jpg.jpeg');
content = content.replace(/Elevation 4\.jpg\.jpeg/g, 'Elevation_4.jpg.jpeg');
content = content.replace(/View - 1 \(1\)\.jpg\.jpeg/g, 'View_-_1_1.jpg.jpeg');
fs.writeFileSync('src/data/content.ts', content, 'utf8');

console.log('Space fixes applied to code!');
