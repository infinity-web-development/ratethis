import React from 'react';
import { Menu, Layout } from 'antd';

import { DARK, HORIZONTAL, KEY, LOGO, HOME, SIGN_IN, STYLES } from './constants';
import Logo from '../../images/Logo.png';

const { HEADER_CONTAINER, HEADER_MENU, LOGO_IMG } = STYLES;
const { Item } = Menu;
const { Header } = Layout;

class AppHeader extends React.Component {
    render() {
        return (
            <Header style={HEADER_CONTAINER}>
                <Menu
                    theme={DARK}
                    mode={HORIZONTAL}
                    defaultSelectedKeys={KEY}
                    style={HEADER_MENU}
                >
                    <Item key={LOGO}>
                        <img style={LOGO_IMG} src={Logo} alt={LOGO} />
                    </Item>
                    <Item key={SIGN_IN}>{SIGN_IN}</Item>
                    <Item key={HOME}>{HOME}</Item>
                </Menu>
            </Header>
        );
    }
}

export default AppHeader;

