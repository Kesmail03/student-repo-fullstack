const http = require("http");
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  const routes = [
    "welcome",
    "redirect",
    "redirected",
    "cache",
    "cookie",
    "other",
  ];
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Node Routing Exercise");
  } else if (req.method === "GET" && req.url === "/welcome") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>This is the Welcome page</h1>");
  } else if (req.method === "GET" && req.url === "/redirect") {
    res.writeHead(302, { location: "http://localhost:5001/redirected" });
    res.end();
  } else if (req.method === "GET" && req.url === "/redirected") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>You've been redirected</h1>");
  } else if (req.method === "GET" && req.url === "/cache") {
    res.writeHead(200, {
      "content-type": "text/html",
      "cache-control": "public, max-age=86400",
    });
    res.end("<h1>This resource has been cached</h1>");
  } else if (req.method === "GET" && req.url === "/cookie") {
    res.writeHead(200, {
      "content-type": "text/plain",
      "set-cookie": "hello=world",
    });
    res.end("cookies... yummm");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>"); //error page
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
