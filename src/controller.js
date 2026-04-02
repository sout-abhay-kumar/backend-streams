const fs = require("fs");
const path = require("path");

function streamFile(req, res, fileName, contentType) {
  const filePath = path.join(__dirname, "../files", fileName);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404);
      return res.end("File not found");
    }

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(res);

    readStream.on("error", () => {
      res.writeHead(500);
      res.end("Server error");
    });
  });
}

module.exports = { streamFile };
