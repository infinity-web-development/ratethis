import React from 'react';
import { Icon, Menu } from 'antd';
import Link from 'next/link';

import { FOOTER_MENU, MENU_TEXTS, STYLES } from './constants';

const { CONTAINER, MAIN_NAV } = STYLES;
const { DARK, HORIZONTAL } = MENU_TEXTS;

const { Item } = Menu;

class AppFooter extends React.Component {
    render() {
        return (
            <div style={CONTAINER}>
                <Menu
                    mode={HORIZONTAL}
                    theme={DARK}
                    style={MAIN_NAV}
                >
                    {
                        FOOTER_MENU.map(({ key, path, type }) => (
                            <Item key={key}>
                                <Link href={path} key={key}>
                                    <Icon type={type} />
                                </Link>
                            </Item>
                        ))
                    }
                </Menu>
            </div>
        );
    }
}

export default AppFooter;
