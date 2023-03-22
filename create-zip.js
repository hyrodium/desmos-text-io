const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("extension.zip");
const archive = archiver("zip", {
  zlib: { level: 9 },
});

output.on("close", () => {
  console.log(`ZIP has been generated: ${archive.pointer()} bytes`);
});

archive.on("warning", (err) => {
  if (err.code === "ENOENT") {
    console.warn(err);
  } else {
    throw err;
  }
});

archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);

archive.directory("dist/", false);
archive.finalize();
