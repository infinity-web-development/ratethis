import React from 'react';
import { Icon, Menu } from 'antd';

import { FOOTER_ITEMS, MENU_TEXTS, STYLES } from './constants';

const {CONTAINER, MAIN_NAV} = STYLES
const { DARK, HORIZONTAL } = MENU_TEXTS

const { Item } = Menu;

class AppFooter extends React.Component {
    render() {
        return (
            <div style={CONTAINER}>
                <Menu
                    mode={HORIZONTAL}
                    theme={DARK}
                    style={MAIN_NAV}
                    grid={{ gutter: 12, lg: 4, md: 4, sm: 2, xs: 1, xxl: 3 }}
                >
                    {
                        FOOTER_ITEMS.map(({ key, type }) => (
                            <Item key={key}><Icon type={type} /></Item>
                        ))
                    }
                </Menu>
          </div>
        );
    }
}

export default AppFooter;
