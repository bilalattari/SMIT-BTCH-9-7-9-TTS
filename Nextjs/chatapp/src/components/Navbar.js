import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Login',
    key: 'login',
    icon: <MailOutlined />,
  },
  {
    label: 'SignUp',
    key: 'signup',
    icon: <MailOutlined />,
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState('login');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;