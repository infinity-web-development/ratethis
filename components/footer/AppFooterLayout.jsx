import PropTypes from 'prop-types';
import React from 'react';

import AppFooter from './AppFooter';

class AppFooterLayout extends React.Component {
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

AppFooterLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
export default AppFooterLayout;
