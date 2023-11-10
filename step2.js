const fs = require('fs').promises;
const process = require('process');
const axios = require('axios');

/** Read and print the content of a local file. */
async function cat(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(`Error reading ${path}: ${err}`);
    process.exit(1);
  }
}

/** Fetch and print the content of a web page. */
async function webCat(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

async function main() {
  const pathOrUrl = process.argv[2];

  if (!pathOrUrl) {
    console.error('Please provide a file path or URL as an argument.');
    process.exit(1);
  }

  if (pathOrUrl.startsWith('http')) {
    await webCat(pathOrUrl);
  } else {
    await cat(pathOrUrl);
  }
}

main();