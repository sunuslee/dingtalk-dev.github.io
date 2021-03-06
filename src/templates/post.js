import React from 'react';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import GA from '../components/ga';
import FormattedDate from '../components/formatted-date';

import 'prismjs/themes/prism.css'
import './post.css'

function Post({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  const post = data.markdownRemark;
  const frontmatter = post.frontmatter;

  const disqusConfig = {
    url: 'https://dingtalk-dev.github.io' + frontmatter.path,
    identifier: frontmatter.path,
    title: frontmatter.title,
  };

  return (
    <Layout title={frontmatter.title} subtitle={siteTitle}>
      <GA />
      <SEO title={frontmatter.title} keywords={[`developer`, `blog`, `alibaba`, `dingtalk`, `ios`, `mac`]} />
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
      <div style={{ marginTop: '1rem', marginBottom: '1rem', fontSize: '0.8rem', color: '#aaa' }}>
        由 {frontmatter.author} 发布于 <FormattedDate dateString={frontmatter.date} />
      </div>
      <Disqus.DiscussionEmbed shortname="dingtalk-dev" config={disqusConfig} />
    </Layout>
  );
}

export default Post;

export const pageQuery = graphql`
  query($postId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $postId }) {
      html,
      frontmatter {
        title,
        date,
        author,
        path
      }
    }
  }
`
