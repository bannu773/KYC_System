import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import {useDispatch} from "react-redux"
import { addCustomerdetails } from "../../store/Customerstore";

const KYCForm = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values:", values);
    dispatch(addCustomerdetails(values));

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{padding:"30px",overflow:""}}>
      <Form name="kycForm" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
            
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input  size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="KNN"
              label="KNN"
              rules={[
                { required: true, message: "Please enter your KNN number" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        
        <Row>
          <Col >
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default KYCForm;
