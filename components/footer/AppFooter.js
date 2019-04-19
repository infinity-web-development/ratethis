import React from 'react';
import { Icon, Menu } from 'antd';
import Link from 'next/link'

import { MENU_TEXTS, STYLES } from './constants';

import UserUpload from '../home/UserUpload';

const {CONTAINER, MAIN_NAV} = STYLES
const { DARK, HORIZONTAL } = MENU_TEXTS

const { Item } = Menu;
export const FOOTER_MENU = [
]
// function createFooterIcons() {
//     const icons = [
//         { key: "home", path: "/", type: "home" },
//         { key: "profile", path: "/", type: "profile" },    
//         { key: "plus", path: {UserUpload}, type: "plus" },
//         { key: "more", path: "/", type: "more" },
//     ];
//     return icons.map(({ key, path, type }) => (
//         <Item>
//             <Link href={path} key={key}>
//                 <Icon type={type} />
//             </Link>
//         </Item>
//     ))
// }


class AppFooter extends React.Component {
    render() {
        return (
            <div style={CONTAINER}>
                <Menu
                    mode={HORIZONTAL}
                    theme={DARK}
                    style={MAIN_NAV}
                >
                    <Item>
                        <Link href="/" key="home">
                            <Icon type="home" />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/" key="profile">
                            <Icon type="profile" />
                        </Link>
                    </Item>
                    <Item>
                        <UserUpload />
                    </Item>
                    <Item>
                        <Link href="/" key="more">
                            <Icon type="more" />
                        </Link>
                    </Item>
                </Menu>
          </div>
        );
    }
}

export default AppFooter;
