import PropTypes from 'prop-types';
import Poll from 'react-polls';
import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LIST_TEXTS, STYLES } from '../constants';
import * as actions from '../actions';
import { getUploads } from '../selectors';

const { AVATAR, CARD_CONTAINER, CARD_LIST, ICON, USER_LIST } = STYLES;
const { INNER, MORE, UPLOAD, VERTICAL } = LIST_TEXTS;
const { Meta } = Card;

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

let pollAnswers = [
    { option: 'Outfit A', votes: 0 },
    { option: 'Outfit B', votes: 0 },
];

class Home extends React.Component {
    componentDidMount() {
        const { actions: { requestUploadList } } = this.props;

        requestUploadList();
    }

    handleVote = voteAnswer => {
        const newPollAnswers = pollAnswers.map(answer => {
            if (answer.option === voteAnswer) answer.votes += 1;

            return answer;
        });

        pollAnswers = newPollAnswers;
    }

    updateReaction = (id, reaction) => {
        const { actions: { updateReaction } } = this.props;
        const payload = { id, reaction };
        updateReaction(payload);
    }

    render() {
        const { uploads } = this.props;
        const values = [...uploads.values()];
        const { comparisons } = values;

        return (
            <div style={CARD_CONTAINER}>
                {
                    values.includes(comparisons) ?
                        (
                            <List
                                itemLayout={VERTICAL}
                                dataSource={values}
                                renderItem={item => {
                                    const { avatar, description, id, uploader: { image, name } } = item;

                                    return (
                                        <List.Item style={USER_LIST}>
                                            <Card
                                                cover={(
                                                    <span>
                                                        <img width="50%" alt={UPLOAD} src={image} />
                                                        <img width="50%" alt={UPLOAD} src={image} />
                                                    </span>
                                                )}
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
                                                <Meta
                                                    title={
                                                        <Poll answers={pollAnswers} onVote={this.handleVote} />
                                                    }
                                                    description={description}
                                                />
                                            </Card>
                                        </List.Item>
                                    );
                                }}
                            />
                        )
                        :(
                            <List
                                itemLayout={VERTICAL}
                                dataSource={values}
                                renderItem={item => {
                                    const { avatar, description, id, uploader: { image, name } } = item;

                                    return (
                                        <List.Item style={USER_LIST}>
                                            <Card
                                                actions={createReactionsIcon(item, this.updateReaction)}
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
                        )
                }
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
