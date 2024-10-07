import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const read = async () => {
  fs.readFile(
    dirname(__filename) + "/files/fileToRead1.txt",
    "utf-8",
    (err, data) => {
      if (err) throw new Error("FS operation failed");
      console.log(data);
    }
  );
};

await read();
