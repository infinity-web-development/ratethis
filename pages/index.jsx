import React from 'react';
import stylesheet from 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import AppFooterLayout from '../components/footer/AppFooterLayout';
import home from '../components/home';
import HeaderLayout from '../components/header/HeaderLayout';

const { Home } = home.components;

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
