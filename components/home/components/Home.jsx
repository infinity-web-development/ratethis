import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICON_LIST, LIST_TEXTS, STYLES, USER_UPLOAD } from '../constants';
import * as actions from '../actions';
import { getUploads } from '../selectors';

const { AVATAR, CARD_CONTAINER, CARD_LIST, ICON, USER_LIST } = STYLES;
const { INNER, MORE, UPLOAD, VERTICAL } = LIST_TEXTS;

class Home extends React.Component {
    // state = {
    //     likeCounter: {},
    //     dislikeCounter: {},
    //     maybeCounter: {},
    // };

    // getReactionClickCount = ({ key }) => {
    //     if (key === 'heart') {
    //     }
    //     else if (key === 'dislike') {
    //     }
    //     else if (key === 'dislike') {
    //     }
    // }

    componentDidMount() {
        const { requestUploadList } = this.props.actions;

        requestUploadList();
    }

    render() {
        const { uploads } = this.props;
// convert uploads values to an array
        const values = uploads.values();

        return (
            <div style={CARD_CONTAINER}>
                <List
                  itemLayout={VERTICAL}
                  dataSource={values}
                  renderItem={item => (
                      <List.Item style={USER_LIST}>
                          <Card
                            actions={ICON_LIST.map(({ type }) => (
                                <span key={type}>
                                    <Icon
                                      key={type}
                                      type={type}
                                      style={ICON}
                                    />

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

const mapStateToProps = state => ({
    uploads: getUploads(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
