import React from "react";
import { Col, Row, Form, Input } from "antd";

import "antd/dist/antd.css";
import { CustomCol, CustomForm, CustomButton, CustomH1 } from "./style.js";
import { useHistory } from "react-router";

const SignIn = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const credential = {
    email: `admin@jobhunt.com`,

    password: "admin123",
  };
  const onFinish = (values) => {
    if (
      values.email === credential.email &&
      values.password === credential.password
    ) {
      history.push("/job-explore");
    } else {
      alert("Invalid Credential");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row type="flex" align="middle">
      <Col span={6}></Col>
      <CustomCol span={12}>
        <CustomH1>Welcome Back!</CustomH1>
        <CustomForm
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          hideRequiredMark
          form={form}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                type: "email",
                message: "Please enter vaild email id",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <CustomButton type="primary" htmlType="submit">
              SignIn
            </CustomButton>
          </Form.Item>
        </CustomForm>
      </CustomCol>
      <Col span={6}></Col>
    </Row>
  );
};

export default SignIn;
