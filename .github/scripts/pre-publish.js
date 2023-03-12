const fs = require('fs');
const path = require('path');

const PACKAGE_FOLDER = `./packages`;

const execute = () => {
  const folders = fs.readdirSync(PACKAGE_FOLDER);

  folders.forEach((folder) => {
    const fileName = path.resolve(`${PACKAGE_FOLDER}/${folder}/package.json`);
    const data = fs.readFileSync(fileName, 'utf8');
    const parsed = JSON.parse(data);

    parsed.main = 'dist/index.js';
    parsed.types = 'dist/index.d.ts';
    parsed.module = 'dist/index.mjs';

    fs.writeFileSync(fileName, JSON.stringify(parsed, null, 2) + '\n');
  });
};

execute();
