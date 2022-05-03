import parse from 'html-react-parser';
import React from 'react';
import getMarkdownContents, {
  getBlogsMetadata,
  getHtmlFromMarkdown,
  getMarkdownFileData,
} from '../../content/markdown-utils';
import { Blog } from '../../types/Blog';
import Layout from '../components/Layout';
import NavigationBar from '../components/navbar/NavigationBar';

interface Props {
  blog: Blog;
}

export async function getStaticPaths() {
  const blogsList = getBlogsMetadata(`${process.cwd()}/content/blog/`);

  const pathsList = blogsList.map((blog) => ({
    params: {
      id: blog.slug,
    },
  }));

  return {
    paths: pathsList,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = getMarkdownFileData(`${process.cwd()}/content/blog/${params.id}.md`);

  return {
    props: {
      blog,
    },
  };
}

function BlogPostPage({ blog }: Props) {
  const markdownHtml = blog.markdownContent ? getHtmlFromMarkdown(blog.markdownContent) : '';

  return (
    <Layout>
      <div>
        <NavigationBar />
      </div>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.date}</p>
        {parse(markdownHtml)}
      </div>
    </Layout>
  );
}

export default BlogPostPage;
