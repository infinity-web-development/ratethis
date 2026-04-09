import PropTypes from 'prop-types';
import React from 'react';

import AppHeader from './AppHeader';

class HeaderLayout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                <AppHeader />
                {children}
            </div>
        );
    }
}

HeaderLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
export default HeaderLayout;
