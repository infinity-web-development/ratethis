import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SingleUpload from './SingleUpload';
import ComparisonUpload from './ComparisonUpload';
import { STYLES } from '../constants';
import * as actions from '../actions';
import { getUploads } from '../selectors';

const { CARD_CONTAINER } = STYLES;

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

        return (
            <div style={CARD_CONTAINER}>
                <SingleUpload
                    values={[...uploads.values()]}
                    hanldeReaction={this.updateReaction}
                />
                <ComparisonUpload values={[...uploads.values()]} />
            </div>
        );
    }
}

Home.propTypes = {
    actions: PropTypes.objectOf(PropTypes.object),
    uploads: PropTypes.instanceOf(Map),
};

const mapStateToProps = state => ({
    uploads: getUploads(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
