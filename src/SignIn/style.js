import styled from "styled-components";

import { Col, Form, Button } from "antd";

export const CustomCol = styled(Col)`
  border-radius: 33px;
  background: #ededed;
  height: 400px;
  margin-top: 107px;
  text-align: center;
  padding-top: 36px;
  margin-bottom: 100px;
`;

export const CustomForm = styled(Form)`
  width: 80%;
  margin: 0px auto;
  &.ant-form-vertical .ant-form-item-label > label,
  &.ant-col-24.ant-form-item-label > label,
  &.ant-col-xl-24.ant-form-item-label > label {
    color: #7b7b7b;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const CustomButton = styled(Button)`
  border-color: #5e81e0;
  background: #5e81e0;
  width: 100%;
  height: 49px;
  border-radius: 13px;
  font-size: 19px;
  font-weight: bold;
  &:focus,
  &:hover {
    background: #5e81e0;
    border-color: #5e81e0;
  }
`;

export const CustomH1 = styled.h1`
  color: #5d80dd;
  font-size: 28px;
  font-weight: 700;
`;
