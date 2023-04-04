import React from 'react';
import { Layout, Space } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Content } = Layout;


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#108ee9',
    height: '100%',
};


const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const App: React.FC = () => (
    <Space direction="vertical" style={{ display: 'flex', height: '100%', width: '100%' }} size={[0, 48]}>
        <Layout style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}> <Outlet /> </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Space>
);

export default App;