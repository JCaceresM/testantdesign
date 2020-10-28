import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import Steper from "./componets/steper";
import { Layout } from "antd";
const { Content } = Layout;

function App():JSX.Element {
  return (
    <Content className="content">
      <div className="site-layout-pagecontent">
        <Steper />
      </div>
    </Content>
  );
}

export default App;
