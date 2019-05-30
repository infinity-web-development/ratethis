import PropTypes from 'prop-types';
import React from 'react';

import AppFooter from './AppFooter';

class FooterLayout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                {children}
                <AppFooter />
            </div>
        );
    }
}

FooterLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
export default FooterLayout;
