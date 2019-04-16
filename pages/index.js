import React from 'react';
import stylesheet from 'antd/dist/antd.min.css'
import { Layout } from 'antd';

import Home from '../components/home/Home';
import HeaderLayout from '../components/header/HeaderLayout';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <HeaderLayout>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <Home />
                </HeaderLayout>
            </Layout>
        )
    }
}
