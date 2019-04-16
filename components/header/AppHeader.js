import React from 'react';
import { Avatar, Menu, Layout } from 'antd';

import { headerStyles, headerStyles1, headerStyles3 } from './constants';
import Logo from '../../images/Logo.png';

const { Item } = Menu;
const { Header } = Layout;

class AppHeader extends React.Component {
  render() {
      return (
          <Header style={headerStyles}>
              <Menu
                  mode="horizontal"
                  theme="dark"
                  style={headerStyles1}
              >
                    <Item key="logo">
                        <Avatar style={headerStyles3} src={Logo} size="large" shape="regular"/>
                    </Item>
                    <Item key="sign in"> Sign in </Item>
                    <Item key="map View"> Map View </Item>
                    <Item key="home"> Home </Item>
              </Menu>
          </Header>
      );
  }
}

export default AppHeader;
