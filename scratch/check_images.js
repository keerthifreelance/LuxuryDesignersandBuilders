const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  console.log(`\n=== Checking ${filePath} ===`);
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /\/images\/[a-zA-Z0-9_\-\.\/%\s&()]+/g;
  const matches = [...new Set(content.match(regex) || [])];

  matches.forEach(ref => {
    // clean ref of trailing quotes or punctuation if any
    const cleanRef = ref.split(/['"\s`>]/)[0];
    const targetPath = path.join(process.cwd(), 'public', cleanRef);
    
    // Check exact case sensitivity on disk
    let exists = false;
    let exactCaseMatch = false;

    if (fs.existsSync(targetPath)) {
      exists = true;
      // Verify exact casing by checking directory contents
      const dir = path.dirname(targetPath);
      const base = path.basename(targetPath);
      if (fs.existsSync(dir)) {
        const actualFiles = fs.readdirSync(dir);
        exactCaseMatch = actualFiles.includes(base);
      }
    }

    if (!exists) {
      console.log(`❌ FILE DOES NOT EXIST: ${cleanRef}`);
    } else if (!exactCaseMatch) {
      console.log(`⚠️ CASE MISMATCH: ${cleanRef}`);
    } else {
      console.log(`✅ OK: ${cleanRef}`);
    }
  });
}

const filesToCheck = [
  'src/components/BeforeAfterSection.tsx',
  'src/components/DesignVsReality.tsx',
  'src/components/PortfolioSection.tsx',
  'src/components/AboutSection.tsx',
  'src/data/content.ts'
];

filesToCheck.forEach(f => {
  if (fs.existsSync(f)) checkFile(f);
});
