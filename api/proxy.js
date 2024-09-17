// // api/proxy.js

// import http from 'http';

// export default function (req, res) {
//   const targetUrl = `http://88.99.95.99:21617${req.url}`;

//   // Set up options for the proxy request
//   const options = {
//     hostname: '88.99.95.99',
//     port: 21617,
//     path: req.url,
//     method: req.method,
//     headers: {
//       ...req.headers,
//       host: '88.99.95.99:21617', // Ensure the host header is correct
//     },
//   };

//   const proxyReq = http.request(options, (proxyRes) => {
//     // Copy status code and headers from the proxy response
//     res.writeHead(proxyRes.statusCode, proxyRes.headers);
//     // Pipe the proxy response data to the client response
//     proxyRes.pipe(res, { end: true });
//   });

//   // Handle proxy request errors
//   proxyReq.on('error', (e) => {
//     console.error(`Proxy request error: ${e.message}`);
//     res.statusCode = 500;
//     res.end(`Error: ${e.message}`);
//   });

//   // Pipe the client request data to the proxy request
//   req.pipe(proxyReq, { end: true });
// }


export default async function handler(req, res) {
  const { url } = req;

  // Check if the request is for static assets like images, CSS, or JS
  if (url.startsWith('/api/images') || url.startsWith('/api/js') || url.startsWith('/api/css')) {
    const assetUrl = `http://88.99.95.99:21617${url.replace('/api', '')}`;
    
    const response = await fetch(assetUrl);

    if (response.ok) {
      const buffer = await response.arrayBuffer();
      
      // Set appropriate content type headers
      res.setHeader('Content-Type', response.headers.get('content-type'));
      res.status(200).send(Buffer.from(buffer));
    } else {
      res.status(404).send('Resource not found');
    }
  } else {
    // Main HTML content
    const response = await fetch('http://88.99.95.99:21617?worldname=maevetopia&mapname=surface&zoom=6&x=-60&y=64&z=-13');
    let html = await response.text();

    // Rewrite relative URLs to go through the proxy
    html = html
      .replace(/(href|src)="\/(js|css|images|standalone)\/([^"]+)"/g, '$1="/api/$2/$3"')
      .replace(/(href|src)="images\/([^"]+)"/g, '$1="/api/images/$2"'); // Specific rule for images/icons

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  }
}
