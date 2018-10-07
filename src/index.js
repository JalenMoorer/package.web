import saveAs from 'file-saver';

const packages = [
  'package1',
  'package2',
  'package3'
]

function createPackageJSON(packages) {
  const filename = 'package.json';
  const content = packages.join(',\r\n');

  console.log(content);

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
  });

  saveAs(blob);

}

createPackageJSON(packages)
