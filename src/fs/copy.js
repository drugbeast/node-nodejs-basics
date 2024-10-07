import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const copy = async () => {
  fs.stat(dirname(__filename) + '/files', (err) => {
    if (err == null) {
        fs.stat(dirname(__filename) + '/files_copy', (err) => {
            if (err == null) {
                throw new Error('FS operation failed')
            }
            else if (err.code == 'ENOENT') {
                fs.cp(dirname(__filename) + '/files', dirname(__filename) + '/files_copy', {recursive: true}, () => {})
            }
        })
    }
    else if (err.code == 'ENOENT') {
        throw new Error('FS operation failed')
    }
  });
};

await copy();
