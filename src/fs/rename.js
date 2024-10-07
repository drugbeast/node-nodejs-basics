import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const rename = async () => {
  fs.readFile(dirname(__filename) + "/files/properFilename.md", (err) => {
    if (!err.code) {
      throw new Error("FS operation failed");
    } else {
      fs.rename(
        dirname(__filename) + "/files/wrongFilename.txt",
        dirname(__filename) + "/files/properFilename.md",
        (err) => {
          if (err.code == "ENOENT") {
            throw new Error("FS operation failed");
          }
        }
      );
    }
  });
};

await rename();
