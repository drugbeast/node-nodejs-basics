import fs from "fs";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const remove = async () => {
  fs.unlink(dirname(__filename) + "/files/fileToRemove.txt", (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
