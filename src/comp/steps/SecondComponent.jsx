import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const AssetDetails = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ padding: "30px" }}>
      {" "}
      <Form
        name="assetDetailsForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {" "}
        <Row gutter={16}>
          {" "}
          <Col xs={24} sm={12}>
            {" "}
            <Form.Item
              name="goldType"
              label="Gold Type (8/16/24 Carat)"
              rules={[
                { required: true, message: "Please enter the gold type" },
              ]}
            >
              {" "}
              <Input size="large" />{" "}
            </Form.Item>{" "}
          </Col>{" "}
          <Col xs={24} sm={12}>
            {" "}
            <Form.Item
              name="weight"
              label="Weight (in grams)"
              rules={[{ required: true, message: "Please enter the weight" }]}
            >
              {" "}
              <Input size="large" />{" "}
            </Form.Item>{" "}
          </Col>{" "}
        </Row>{" "}
        <Row gutter={16}>
          {" "}
          <Col xs={24} sm={12}>
            {" "}
            <Form.Item
              name="placeBoughtFrom"
              label="Place bought From"
              rules={[
                {
                  required: true,
                  message: "Please enter the place bought from",
                },
              ]}
            >
              {" "}
              <Input size="large" />{" "}
            </Form.Item>{" "}
          </Col>{" "}
          <Col xs={24} sm={12}>
            {" "}
            <Form.Item
              name="jewelersNameAddress"
              label="Jeweler's Name & Address"
              rules={[
                {
                  required: true,
                  message: "Please enter the jeweler's name and address",
                },
              ]}
            >
              {" "}
              <Input size="large" />{" "}
            </Form.Item>{" "}
          </Col>{" "}
        </Row>
        <Row gutter={16}>
          <Col xs={24}>
            <Form.Item
              name="photo"
              label="Photo of the Gold Ornament"
              rules={[
                {
                  required: true,
                  message: "Please upload a photo of the gold ornament",
                },
              ]}
            >
              <Input type="file" size="large" />
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

export default AssetDetails;
