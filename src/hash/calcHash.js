import fs from "fs";
import crypto from "crypto";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const rs = fs.createReadStream(
    dirname(__filename) + "/files/fileToCalculateHashFor.txt"
  );
  rs.on('readable', () => {
    const data = rs.read();
    if (data)
      hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
