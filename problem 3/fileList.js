const fs = require('fs');
const path = require('path');

function listFilesExtension(directoryPath, fileExtension) {
  try {
    // Read the contents of the directory
    const files = fs.readdirSync(directoryPath);

    // Filter files with the specified extension
    const filteredFiles = files.filter((file) => path.extname(file) === `.${fileExtension}`);

    // Print the list of files with the specified extension
    if (filteredFiles.length > 0) {
      console.log(`Files with extension .${fileExtension} in directory ${directoryPath}:`);
      filteredFiles.forEach((file) => console.log(file));
    } else {
      console.log(`No files with extension .${fileExtension} found in directory ${directoryPath}`);
    }
  } catch (error) {
    console.error('Error reading directory:', error.message);
  }
}

// Use listFilesExtension:
const directoryPath = './files';
const fileExtension = 'html';
listFilesExtension(directoryPath, fileExtension);
