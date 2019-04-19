import React from "react";
import { Avatar, Card, Icon, List } from "antd";

import UserUpload from './UserUpload';
import { CONTAINER, ICON_LIST, LIST_TEXTS, STYLES, USER_UPLOAD } from "./constants";

const { AVATAR, CARD_CONTAINER, ICON, USER_LIST } = STYLES;
const { INNER, MORE, UPLOAD, VERTICAL } = LIST_TEXTS;

class Home extends React.Component {
  state = {
    clicks: {}
  };

  getClickCount = (state, image, type) => {
    if (!state[image] || !state[image][type]) return 0;
    return state[image][type];
  };

  incrementIconText = (image, type) => {
    this.setState(prevState => {
      const previousClickCount = this.getClickCount(prevState, image, type);
      return {
        ...prevState,
        [image]: {
          ...prevState[image],
          [type]: previousClickCount + 1
        }
      };
    });
  };

  render() {
    return (
      <div style={CONTAINER}>
        <UserUpload />
        <List
          itemLayout={VERTICAL}
          dataSource={USER_UPLOAD}
          renderItem={item => (
            <List.Item style={USER_LIST}>
              <Card
                actions={ICON_LIST.map(({ type }) => {
                  return (
                    <span>
                      <Icon
                        key={type}
                        type={type}
                        onClick={() => this.incrementIconText(item.image, type)}
                        style={ICON}
                      />
                      {this.getClickCount(this.state, item.image, type)}
                    </span>
                  );
                })}
                cover={<img alt={UPLOAD} src={item.image} />}
                extra={<Icon type={MORE} />}
                hoverable
                title={
                  <a>
                    <Avatar src={item.image} style={AVATAR} />
                    {item.user}
                  </a>
                }
                type={INNER}
                style={CARD_CONTAINER}
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