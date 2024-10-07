import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const read = async () => {
  const rs = fs.createReadStream(dirname(__filename) + "/files/fileToRead.txt", 'utf-8');
  rs.pipe(process.stdout)
  rs.on('end', () => {console.log('')})
};

await read();
