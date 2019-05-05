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

const IconText = ({ type, text, onClick }) => (
    <span>
        <Icon type={type} style={ICON} onClick={onClick} />
        {text}
    </span>
);
function createReactionsIcon(item, updateReaction) {
    const { like, dislike, maybe } = item.reactions;
    const icons = [
        { key: 'like', text: `${like}`, type: 'heart' },
        { key: 'dislike', text: `${dislike}`, type: 'dislike' },
        { key: 'maybe', text: `${maybe}`, type: 'meh' },
    ];
    return icons.map(({ key, text, type }) => (
        <IconText
          onClick={() => updateReaction(item.id, key)}
          key={key}
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

    updateReaction = (id, reaction) => {
        const { actions: { updateReaction } } = this.props;
        const payload = { id, reaction };
        updateReaction(payload);
    }

    render() {
        const { uploads } = this.props;
        const values = [...uploads.values()];

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
                                    {item.name}
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
    actions: PropTypes.objectOf(PropTypes.object),
    uploads: PropTypes.instanceOf(Map),
};

IconText.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string,
};

const mapStateToProps = state => ({
    uploads: getUploads(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
