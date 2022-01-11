import React from 'react';
import { GithubFilled } from '@ant-design/icons';
import './footer.less';
import { getSearchObj } from '@/helpers/location';

const Footer: React.FC = () => {
  const user = getSearchObj().user || 'visiky';

  return (
    <footer>
      <div>
        <div className="">Made with ❤️</div>
        <div className="author">
          by
          <a href={`https://github.com/${user}`} style={{ marginLeft: '4px' }} target="_blank">
            {user}
          </a>
        </div>
        <a href={'https://github.com/visiky/resume.git'} style={{ marginLeft: '8px' }} target="_blank">
          <GithubFilled style={{ color: '#fff' }} /> 源代码
        </a>
      </div>
    </footer>
  );
};

export default Footer;
