import React from 'react';
import { getBlogsMetadata } from '../../content/markdown-utils';
import { Blog } from '../../types/Blog';
import NavigationBar from '../components/navbar/NavigationBar';
import Link from 'next/link';

export async function getStaticProps() {
  const blogList = getBlogsMetadata(`${process.cwd()}/content/blog/`);
  return { props: { blogList } };
}

interface Props {
  blogList: Blog[];
}

const BlogPage = ({ blogList }: Props) => {
  return (
    <div>
      <NavigationBar />
      <div>
        <p>A tiny slice of the inside of my brain, for your reading pleasure. Enjoy.</p>
        {blogList.map((blog) => {
          return (
            <div>
              <Link href={`blog/${blog.slug}`}>{blog.title}</Link>
              <p>{blog.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
