import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const content = "I am fresh and young";

const __filename = fileURLToPath(import.meta.url);

const create = async () => {
  fs.readFile(dirname(__filename) + "/files/fresh.txt", (err) => {
    if (err) {
      fs.writeFile(dirname(__filename) + "/files/fresh.txt", content, () => {});
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
