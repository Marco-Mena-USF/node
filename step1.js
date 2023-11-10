const fs = require('fs').promises;
const process = require('process');

/** read file at path and print it out. */

async function cat(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(`Error reading ${path}: ${err}`);
    process.exit(1);
  }
}

cat(process.argv[2]);