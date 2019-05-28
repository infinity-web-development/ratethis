import PropTypes from 'prop-types';
import Poll from 'react-polls';
import React from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import { LIST_TEXTS, STYLES } from '../constants';

const { AVATAR, CARD_LIST, USER_LIST } = STYLES;
const { INNER, MORE, UPLOAD, VERTICAL } = LIST_TEXTS;
const { Meta } = Card;

let pollAnswers = [
    { option: 'Outfit A', votes: 0 },
    { option: 'Outfit B', votes: 0 },
];

export default class ComparisonUpload extends React.Component {
    handleVote = voteAnswer => {
        const newPollAnswers = pollAnswers.map(answer => {
            if (answer.option === voteAnswer) answer.votes += 1;

            return answer;
        });

        pollAnswers = newPollAnswers;
    }

    render() {
        const { values } = this.props;

        return (
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
        );
    }
}

ComparisonUpload.propTypes = {
    values: PropTypes.arrayOf,

};
