import React from 'react';
import stylesheet from 'antd/dist/antd.min.css'
import { Layout } from 'antd';

import Home from '../components/home/Home';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Home />
            </Layout>
        )
    }
}
