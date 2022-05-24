import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, Pagination } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
// const handleFormSubmit = () => {
//   Form.validateFields()
//     .then(({values}:any) => {
//       // Submit values
//       // submitValues(values);
//     })
//     .catch(({errorInfo}:any) => {});
// };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const FormValidation: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="91">+91</Option>
        <Option value="67">+67</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h1>User Details</h1>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true }, { whitespace: true }, { min: 3 }]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            // message: "The input is not valid E-mail!",
          },
          {
            required: true,
            // message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true },
          {
            pattern: new RegExp(
              "(^(([0-9]{3}) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$)+"
            ),
            message: "Phone number is not valid !",
          },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="introduction"
        label="Description"
        requiredMark="optional"
        // rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input.TextArea showCount maxLength={100} />
        {/* <EyeInvisibleOutlined /> */}
        {/* <Input.TextArea /> */}
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        {/* <Button type="primary" htmlType="submit" onSubmit={handleFormSubmit}> */}
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
      {/* <Pagination defaultCurrent={1} total={50} /> */}
    </Form>
  );
};

export default FormValidation;
