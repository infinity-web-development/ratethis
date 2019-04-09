import React from "react";
import { Avatar, Card, Icon, List } from "antd";

import { ICON_LIST, LIST_TEXTS, STYLES, USER_UPLOAD } from "./constants";

const { AVATAR, CARD_CONTAINER, ICON, USER_LIST } = STYLES;
const { INNER, MORE, UPLOAD, VERTICAL } = LIST_TEXTS;

class Home extends React.Component {
  state = {
    clicks: 0,
    userUpload: USER_UPLOAD
  };
  IncrementIconText = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  render() {
    const actions = ICON_LIST.map(({ type }) => (
      <span>
        <Icon
          key={type}
          type={type}
          onClick={this.IncrementIconText}
          style={ICON}
        />
        {this.state.clicks}
      </span>
    ));
    return (
      <List
        itemLayout={VERTICAL}
        dataSource={this.state.userUpload}
        renderItem={item => (
          <List.Item style={USER_LIST}>
            <Card
              actions={actions}
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
    );
  }
}

export default Home;
