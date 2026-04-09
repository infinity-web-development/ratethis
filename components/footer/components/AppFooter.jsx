import React from 'react';
import { Icon, Menu } from 'antd';
import Link from 'next/link';

import { CONTAINER, FOOTER_MENU, MAIN_NAV, MENU_TEXTS } from '../constants';

const { DARK, HORIZONTAL } = MENU_TEXTS;

const { Item } = Menu;

export default class AppFooter extends React.Component {
    render() {
        return (
            <div className={CONTAINER}>
                <Menu
                    mode={HORIZONTAL}
                    theme={DARK}
                    className={MAIN_NAV}
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
