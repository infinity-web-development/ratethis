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

export default HeaderLayout;
