import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import footer from '../components/footer';
import home from '../components/home';
import header from '../components/header';

const { Home } = home.components;
const { FooterLayout } = footer.components;
const { HeaderLayout } = header.components;

class App extends React.Component {
    render() {
        return (
            <Layout>
                <HeaderLayout>
                    <FooterLayout>
                        <Home />
                    </FooterLayout>
                </HeaderLayout>
            </Layout>
        );
    }
}

export default connect(state => state)(App);
