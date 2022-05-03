import fs from 'fs';
import moment from 'moment';
import matter from 'gray-matter';
import showdown from 'showdown';
import { Blog } from '../types/Blog';

export function getMarkdownFileData(filepath: string): Blog {
  const fileContents = fs.readFileSync(filepath);

  const matterData = matter(fileContents);
  return {
    title: matterData.data.title,
    slug: matterData.data.slug,
    date: moment(matterData.data.date).format('MMMM Do YYYY'),
    markdownContent: matterData.content,
  };
}

export default function getMarkdownContents(filepath: string): string {
  return getMarkdownFileData(filepath).markdownContent;
}

export function getBlogsMetadata(blogsDir: string): Blog[] {
  const fileNames = fs.readdirSync(blogsDir);

  const blogsMetadata = fileNames.map((fname) => {
    const markdownData = getMarkdownFileData(`${blogsDir}/${fname}`);
    return {
      title: markdownData.title as string,
      date: markdownData.date as string,
      slug: markdownData.slug as string,
    };
  });

  return [...blogsMetadata];
}

export function getHtmlFromMarkdown(html: string): string {
  return new showdown.Converter().makeHtml(html);
}
