import fs from 'fs';
import moment from 'moment';
import matter from 'gray-matter';

function getMarkdownFileData(filepath: string) {
  const fileContents = fs.readFileSync(filepath);

  const matterData = matter(fileContents);
  return {
    title: matterData.data.title,
    date: moment(matterData.data.date).format('MMMM Do YYYY'),
    content: matterData.content,
  };
}

export default function getMarkdownContents(filepath: string): string {
  return getMarkdownFileData(filepath).content;
}

export function getBlogsMetadata(blogsDir: string): object {
  const fileNames = fs.readdirSync(blogsDir);

  const blogsMetadata = fileNames.map((fname) => {
    const markdownData = getMarkdownFileData(`${blogsDir}/${fname}`);
    return {
      title: markdownData.title,
      date: markdownData.date,
    };
  });

  return [...blogsMetadata];
}
