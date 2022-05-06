import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { getBlogsMetadata } from '../../content/markdown-utils';
import { Blog } from '../../types/Blog';
import NavigationBar from '../../components/navbar/NavigationBar';
import Layout from '../../components/Layout';

export async function getStaticProps() {
  const blogList = getBlogsMetadata(`${process.cwd()}/content/blog/`);
  return { props: { blogList } };
}

interface Props {
  blogList: Blog[];
}

const BlogLink = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  color: red;
  margin-top: 0.2em;

  & > div:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  & > p {
    float: right;
    margin: 0;
    text-align: right;
    color: #727272;
  }
`;

function BlogPage({ blogList }: Props) {
  return (
    <Layout>
      <NavigationBar />
      <div>
        <p>A tiny slice of the inside of my brain, for your reading pleasure. Enjoy.</p>
        {blogList.map((blog) => (
          <BlogLink>
            <div>
              <Link href={`blog/${blog.slug}`}>{blog.title}</Link>
            </div>
            <p>{blog.date}</p>
          </BlogLink>
        ))}
      </div>
    </Layout>
  );
}

export default BlogPage;
