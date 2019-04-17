import React from 'react';
import { Avatar, Menu, Layout } from 'antd';

import { AVATAR, HEADER_STYLES, HORIZONTAL, KEY, LARGE, LAYOUT, LOGO, HOME, REGULAR, SIGN_IN } from './constants';
import Logo from '../../images/Logo.png';

const { Item } = Menu;
const { Header } = Layout;

class AppHeader extends React.Component {
  render() {
      return (
        <Layout className={LAYOUT}>
        <Header>
          <div className={LOGO} />
          <Menu
            mode={HORIZONTAL}
            defaultSelectedKeys={KEY}
            style={HEADER_STYLES}
          >
            <Item key={LOGO}>
                <Avatar style={AVATAR} src={Logo} size={LARGE} shape={REGULAR}/>
            </Item>
            <Item key={SIGN_IN}>{SIGN_IN}</Item>
            <Item key={HOME}>{HOME}</Item>
          </Menu>
        </Header>
        </Layout>
      );
  }
}

export default AppHeader;
  