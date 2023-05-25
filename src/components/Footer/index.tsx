import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '平哥技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'baidu',
          title: '百度',
          href: 'www.baidu.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Koovp',
          blankTarget: true,
        },
        {
          key: 'qq',
          title: 'QQ:39313450',
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
