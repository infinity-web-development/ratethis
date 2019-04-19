import React from 'react';
import stylesheet from 'antd/dist/antd.min.css'
import { Layout } from 'antd';

import AppFooterLayout from '../components/footer/AppFooterLayout';
import Home from '../components/home/Home';
import HeaderLayout from '../components/header/HeaderLayout';

export default class App extends React.Component {
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
        )
    }
}
