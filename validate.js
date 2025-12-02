const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function readHTMLFiles() {
  return fs.readdirSync(root).filter(f => f.endsWith('.html'));
}

function fileExists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function check() {
  const files = readHTMLFiles();
  let issues = [];
  files.forEach(file => {
    const p = path.join(root, file);
    const src = fs.readFileSync(p, 'utf8');

    // check images referenced under assets/
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
    let m;
    while ((m = imgRegex.exec(src)) !== null) {
      const imgPath = m[1];
      if (imgPath.startsWith('assets/')) {
        if (!fileExists(imgPath)) {
          issues.push(`${file}: missing asset ${imgPath}`);
        }
      }

      // check alt attribute
      const imgTag = m[0];
      if (!/alt=\s*["'][^"']*["']/.test(imgTag)) {
        issues.push(`${file}: <img> missing alt attribute -> ${imgTag}`);
      }
    }

    // check presence of main id for skip link
    if (!/id=["']main["']/.test(src)) {
      issues.push(`${file}: <main> should have id="main" for skip link`);
    }

    // check nav-toggle aria attributes when a .nav-toggle exists
    if (/class=["'][^"']*nav-toggle[^"']*["']/.test(src)) {
      if (!/aria-expanded=/.test(src) || !/aria-controls=/.test(src)) {
        issues.push(`${file}: nav-toggle exists but aria-expanded or aria-controls missing`);
      }
    }
  });

  if (issues.length) {
    console.error('Validation failed with the following issues:');
    issues.forEach(i => console.error('- ' + i));
    process.exit(2);
  }

  console.log('Validation passed — no obvious issues found.');
}

try {
  check();
} catch (err) {
  console.error('Error running validation:', err.message);
  process.exit(3);
}
