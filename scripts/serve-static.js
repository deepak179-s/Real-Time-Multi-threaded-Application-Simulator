const http = require('http');
const fs = require('fs');
const path = require('path');

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 4173);
const rootDir = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8'
};

function resolvePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split('?')[0]);
  const normalized = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  const candidate = normalized === '/' ? '/index.html' : normalized;
  return path.join(rootDir, candidate);
}

function sendFile(filePath, res) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extension] || 'application/octet-stream';

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal server error');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url || '/');

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isDirectory()) {
      sendFile(path.join(filePath, 'index.html'), res);
      return;
    }

    if (!error && stats.isFile()) {
      sendFile(filePath, res);
      return;
    }

    sendFile(path.join(rootDir, 'index.html'), res);
  });
});

server.listen(port, host, () => {
  console.log(`Shared web app available at http://${host}:${port}`);
});
