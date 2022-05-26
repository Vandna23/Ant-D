import { Form, Input, Button, Select, Pagination } from "antd";
// import { EyeInvisibleOutlined } from "@ant-design/icons";
const { Option } = Select;

interface IValues {
  values: string | number;
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

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

const FormValidation = () => {
  const onFinish = ({ values }: IValues) => {
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
          },
          {
            required: true,
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
          },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item name="Description" label="Description" requiredMark="optional">
        <Input.TextArea showCount maxLength={100} />
        {/* <EyeInvisibleOutlined /> */}
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
      {/* <Pagination defaultCurrent={1} total={50} /> */}
    </Form>
  );
};

export default FormValidation;
