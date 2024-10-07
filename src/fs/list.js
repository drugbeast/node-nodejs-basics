import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const list = async () => {
  fs.readdir(dirname(__filename) + "/files", (err, files) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    files.forEach((file) => console.log(file));
  });
};

await list();
