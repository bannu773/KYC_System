import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const BankDetails = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Form name="kycForm" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="accountHolderName"
              label="Account Holder Name"
              rules={[{ required: true, message: "Please enter the account holder's name" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="jointAccount"
              label="Joint Account"
              rules={[{ required: true, message: "Please specify if it's a joint account" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="accountType"
              label="Account Type"
              rules={[{ required: true, message: "Please specify the account type (Savings/Current)" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="accountNumber"
              label="Account Number"
              rules={[{ required: true, message: "Please enter the account number" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="ifscCode"
              label="IFSC Code"
              rules={[{ required: true, message: "Please enter the IFSC code" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="bankName"
              label="Bank Name"
              rules={[{ required: true, message: "Please enter the bank name" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="branchName"
              label="Branch Name"
              rules={[{ required: true, message: "Please enter the branch name" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
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

export default BankDetails;
