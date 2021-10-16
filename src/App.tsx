import './App.css';

import { Layout } from 'antd';
import { AppContent } from './app-content';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="app-layout" style={{height:"100vh"}}>
      <Header>
        <img className="logo" src="./logo192.png" alt="Logo" width={40} />
      </Header>
      <Content>
        <AppContent />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
