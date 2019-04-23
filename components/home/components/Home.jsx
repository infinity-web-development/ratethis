import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import { ICON_LIST, LIST_TEXTS, STYLES, USER_UPLOAD } from '../constants';

const { AVATAR, CARD_CONTAINER, CARD_LIST, ICON, USER_LIST } = STYLES;
const { INNER, MORE, UPLOAD, VERTICAL } = LIST_TEXTS;

class Home extends React.Component {
    state = { clicks: {} };

    render() {
        return (
            <div style={CARD_CONTAINER}>
                <List
                  itemLayout={VERTICAL}
                  dataSource={USER_UPLOAD}
                  renderItem={item => (
                      <List.Item style={USER_LIST}>
                          <Card
                            actions={ICON_LIST.map(({ type }) => (
                                <span key={type}>
                                    <Icon
                                      key={type}
                                      type={type}
                                      onClick={() => this.incrementIconText(item.image, type)}
                                      style={ICON}
                                    />
                                    {/* {this.getClickCount(this.state, item.image, type)} */}
                                </span>
                            ))}
                            cover={<img alt={UPLOAD} src={item.image} />}
                            extra={<Icon type={MORE} />}
                            hoverable
                            title={(
                                <a>
                                    <Avatar src={item.image} style={AVATAR} />
                                    {item.user}
                                </a>
)}
                            type={INNER}
                            style={CARD_LIST}
                          >
                              {item.story}
                          </Card>
                      </List.Item>
                  )}
                />
            </div>
        );
    }
}

export default Home;
