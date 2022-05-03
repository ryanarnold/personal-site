import fs from 'fs';

export default function getMarkdownContents(filepath: string): string {
  return fs.readFileSync(filepath).toString();
}
