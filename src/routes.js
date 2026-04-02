const { streamFile } = require("./controller");

module.exports = (req, res) => {
  if (req.url === "/video") {
    streamFile(req, res, "sample.mp4", "video/mp4");
  } else if (req.url === "/pdf") {
    streamFile(req, res, "sample.pdf", "application/pdf");
  } else {
    res.writeHead(404);
    res.end("Route not found");
  }
};
