import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import { LIST_TEXTS, STYLES } from '../constants';

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
        { key: 'like', text: `${like.count}`, type: 'heart' },
        { key: 'dislike', text: `${dislike.count}`, type: 'dislike' },
        { key: 'maybe', text: `${maybe.count}`, type: 'meh' },
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

export default class SingleUpload extends React.Component {
    render() {
        const { values } = this.props;

        return (
            <div style={CARD_CONTAINER}>
                <List
                    itemLayout={VERTICAL}
                    dataSource={values}
                    renderItem={item => {
                        const { avatar, description, id, uploader: { image, name } } = item;

                        return (
                            <List.Item style={USER_LIST}>
                                <Card
                                    actions={createReactionsIcon(item, this.hanldeReaction)}
                                    cover={<img alt={UPLOAD} src={image} />}
                                    extra={<Icon type={MORE} />}
                                    hoverable
                                    key={id}
                                    title={(
                                        <a href="/">
                                            <Avatar src={avatar} style={AVATAR} />
                                            {name}
                                        </a>
                                )}
                                    type={INNER}
                                    style={CARD_LIST}
                                >
                                    {description}
                                </Card>
                            </List.Item>
                        );
                    }}
                />
            </div>
        );
    }
}

SingleUpload.propTypes = {
    values: PropTypes.arrayOf,
};

IconText.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string,
};
