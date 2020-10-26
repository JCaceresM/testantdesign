
import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Steper from "./componets/steper.js";
import { Layout  } from 'antd';
const {  Content,  } = Layout;

function App() {
  return (
    <Content style={{ padding: '0 50px' }}>
    <div className="site-layout-content"><Steper/></div>
  </Content>
  
  );
}

export default App;
