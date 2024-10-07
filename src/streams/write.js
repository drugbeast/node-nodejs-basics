import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const write = async () => {
  const ws = fs.createWriteStream(
    dirname(__filename) + "/files/fileToWrite.txt",
    "utf-8"
  );
  process.stdin.pipe(ws);
  ws.on("finish", () => console.log(""));
};

await write();
