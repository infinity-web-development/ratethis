import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LIST_TEXTS, STYLES } from '../constants';
import * as actions from '../actions';
import { getUploads } from '../selectors';

const { AVATAR, CARD_CONTAINER, CARD_LIST, ICON, USER_LIST } = STYLES;
const { INNER, MORE, UPLOAD, VERTICAL } = LIST_TEXTS;

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={ICON} />
        {text}
    </span>
);
function createReactionsIcon(item, updateReaction) {
    const { like, dislike, maybe } = item.reactions;
    const icons = [
        { reaction: 'like', text: `${like}`, type: 'heart' },
        { reaction: 'dislike', text: `${dislike}`, type: 'dislike' },
        { reaction: 'maybe', text: `${maybe}`, type: 'meh' },
    ];
    return icons.map(({ reaction, text, type }) => (
        <IconText
          onClick={() => updateReaction(item._id, reaction)}
          key={reaction}
          type={type}
          text={text}
        />
    ));
}

class Home extends React.Component {
    componentDidMount() {
        const { actions: { requestUploadList } } = this.props;

        requestUploadList();
    }

    updateReaction = (_id, reaction) => {
        const { actions: { updateReaction } } = this.props;
        updateReaction(_id, reaction);
    }

    render() {
        const { uploads } = this.props;
        const values = Array.from(uploads.values());

        return (
            <div style={CARD_CONTAINER}>
                <List
                  itemLayout={VERTICAL}
                  dataSource={values}
                  renderItem={item => (
                      <List.Item style={USER_LIST}>
                          <Card
                            actions={createReactionsIcon(item, this.updateReaction)}
                            cover={<img alt={UPLOAD} src={item.image} />}
                            extra={<Icon type={MORE} />}
                            hoverable
                            title={(
                                <a href="/">
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

Home.propTypes = {
    actions: PropTypes.object,
    uploads: PropTypes.instanceOf(Map),
};

const mapStateToProps = state => ({
    uploads: getUploads(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
