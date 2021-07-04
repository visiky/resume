import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GithubFilled } from '@ant-design/icons';
import './footer.less';

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        githubUrl
        author
        contact
      }
    }
  }
`);

  const { author, contact, githubUrl } = data.site.siteMetadata;

  return (
    <footer>
      <div>
        <div className="">Made with ❤️</div>
        <div className="author">
          by
          <a href={contact} style={{ marginLeft: '4px' }} target="_blank">
            {author};
          </a>
        </div>
        <a href={githubUrl} style={{ marginLeft: '8px' }} target="_blank">
          <GithubFilled style={{ color: '#fff' }} /> 源代码
        </a>
      </div>
    </footer>
  );
};

export default Footer;
