// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World This is Riya Ranjan Jha');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning JavaScript</title>
</head>
<body>
    <div id="container">
        This is a container tag.
    </div>

    <div id="main" class="container">
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Customer Care</li>
        </ul>
    </div>

    <script src="js1.js">
        
    </script>
</body>
</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});