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

export default AppFooterLayout;
