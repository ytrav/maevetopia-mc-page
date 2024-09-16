// api/proxy.js

import http from 'http';

export default function (req, res) {
  const targetUrl = `http://88.99.95.99:21617${req.url}`;

  // Set up options for the proxy request
  const options = {
    hostname: '88.99.95.99',
    port: 21617,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      host: '88.99.95.99:21617', // Ensure the host header is correct
    },
  };

  const proxyReq = http.request(options, (proxyRes) => {
    // Copy status code and headers from the proxy response
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    // Pipe the proxy response data to the client response
    proxyRes.pipe(res, { end: true });
  });

  // Handle proxy request errors
  proxyReq.on('error', (e) => {
    console.error(`Proxy request error: ${e.message}`);
    res.statusCode = 500;
    res.end(`Error: ${e.message}`);
  });

  // Pipe the client request data to the proxy request
  req.pipe(proxyReq, { end: true });
}
