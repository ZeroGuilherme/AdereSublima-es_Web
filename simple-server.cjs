const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    // Parse URL
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, filePath);
    
    // Get file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';
    
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found, serve index.html for SPA routing
            if (req.url !== '/' && !path.extname(req.url)) {
                const indexPath = path.join(__dirname, 'index.html');
                fs.readFile(indexPath, (err, content) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(`Error loading index.html: ${err.code}`);
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf8');
                    }
                });
                return;
            }
            
            // 404 for other files
            res.writeHead(404);
            res.end('File not found');
            return;
        }
        
        // Read and serve file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end(`Error loading file: ${err.code}`);
            } else {
                res.writeHead(200, { 'Content-Type': mimeType });
                res.end(content);
            }
        });
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`✅ Servidor rodando em http://0.0.0.0:${port}`);
    console.log(`🎉 Site da Adere Sublimações em HTML puro está funcionando!`);
    console.log(`📁 Servindo arquivos do diretório: ${__dirname}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('Servidor sendo encerrado...');
    server.close(() => {
        console.log('Servidor encerrado.');
        process.exit(0);
    });
});