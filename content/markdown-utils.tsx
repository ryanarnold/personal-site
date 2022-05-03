import fs from 'fs';
import moment from 'moment';
import matter from 'gray-matter';

export default function getMarkdownContents(filepath: string): string {
  return fs.readFileSync(filepath).toString();
}

export function getBlogsMetadata(filepath: string): object {
  const fileNames = fs.readdirSync(filepath);

  const blogsMetadata = fileNames.map((fname) => {
    const fileContents = fs.readFileSync(`${filepath}/${fname}`);

    const matterData = matter(fileContents).data;
    return {
      title: matterData.title,
      date: moment(matterData.date).format('MMMM Do YYYY'),
    };
  });
  return [...blogsMetadata];
}
