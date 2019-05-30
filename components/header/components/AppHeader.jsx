import React from 'react';
import { Avatar, Menu, Layout } from 'antd';

import { DARK, HEADER_STYLING, HORIZONTAL, KEY, LOGO, LOGO_IMG, HOME, SIGN_IN } from '../constants';

const { AVATAR, SHAPE, SIZE, SOURCE } = LOGO_IMG;
const { HEADER_CONTAINER, HEADER_MENU } = HEADER_STYLING;

const { Item } = Menu;
const { Header } = Layout;

class AppHeader extends React.Component {
    render() {
        return (
            <Header className={HEADER_CONTAINER}>
                <Menu
                    theme={DARK}
                    mode={HORIZONTAL}
                    defaultSelectedKeys={KEY}
                    className={HEADER_MENU}
                >
                    <Item key={LOGO}>
                        <Avatar className={AVATAR} src={SOURCE} size={SIZE} shape={SHAPE} />
                    </Item>
                    <Item key={SIGN_IN}>{SIGN_IN}</Item>
                    <Item key={HOME}>{HOME}</Item>
                </Menu>
            </Header>
        );
    }
}

export default AppHeader;

