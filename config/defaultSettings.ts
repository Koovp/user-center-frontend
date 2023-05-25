import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '用户中心',
  pwa: false,
  logo: 'https://cdn.jsdelivr.net/gh/Koovp/Avatar/img/bone.png',
  iconfontUrl: '',
};

export default Settings;
