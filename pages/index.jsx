import React from 'react';
import stylesheet from 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import AppFooterLayout from '../components/footer/AppFooterLayout';
import Home from '../components/home/components/Home';
import HeaderLayout from '../components/header/HeaderLayout';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <HeaderLayout>
                    <AppFooterLayout>
                        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                        <Home />
                    </AppFooterLayout>
                </HeaderLayout>
            </Layout>
        );
    }
}

export default connect(state => state)(App);
