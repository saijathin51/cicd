// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
          }
          .big-text {
            font-size: 50px;
            font-weight: bold;
            color: #2E8B57;
          }
        </style>
      </head>
      <body>
        <div class="big-text">Hello, My name is Sai Jathin this Node.js application for assignment</div>
        <div class="medium-text"> And creating CICD pipeline for the application</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
