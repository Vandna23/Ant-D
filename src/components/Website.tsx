import React from "react";
import { Layout, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const Website = () => {
  return (
    <div>
      <Layout className="wrapper">
        <Header className="header">
          <Title style={{ color: "white", textAlign: "left" }} level={3}>
            Wits Lab
          </Title>
          <Avatar icon={<UserOutlined />} />
        </Header>

        <Layout>
          <Sider style={{ background: "red" }}>
            {" "}
            <Menu mode="vertical" defaultSelectedKeys={["mail"]}>
              <Menu.SubMenu
                key="SubMenu"
                title="Setting"
                icon={<SettingOutlined />}
              >
                <Menu.Item key="two" icon={<AppstoreOutlined />}>
                  Navigation Two
                </Menu.Item>
                <Menu.Item key="three" icon={<AppstoreOutlined />}>
                  Navigation Three
                </Menu.Item>
                <Menu.ItemGroup title="Item Group">
                  <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                  </Menu.Item>
                  <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content>Content</Content>
            <Footer style={{ background: "green", color: "white" }}>
              Footer
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Website;
