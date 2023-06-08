const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'public/documents' }); // Destination folder for uploaded files

// API endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'No file uploaded' });
  }
});

// API endpoint to fetch the list of files
app.get('/files', (req, res) => {
  const documentsPath = path.join(__dirname, 'public/documents');
  res.json({ files: getFilesFromDirectory(documentsPath) });
});

// Helper function to retrieve the list of files in a directory
function getFilesFromDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  return files;
}

// Start the server
app.listen(8000, () => {
  console.log('Server started on port 8000');
});
