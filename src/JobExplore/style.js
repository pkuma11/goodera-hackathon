import styled from "styled-components";
import { Button, Row } from "antd";

export const CustomH1 = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 31px;
  margin-bottom: 0px;
`;

export const CustomH2 = styled.h2`
  color: white;
  font-size: 18px;
`;

export const CustomImg = styled.img`
  width: 150px;
  height: 150;
  px,border-radius: 16px;
`;

export const CustomRowContainer = styled(Row)`
  width: 560px;
  border-radius: 24px;
  background: #fff;
  padding: 21px;
  margin-bottom: 24px;
`;

export const CustomViewDetialsButton = styled(Button)`
  float: right;
  color: #f07987;
  border: 1px solid;
  border-radius: 11px;
  height: 43px;
`;

export const CustomSearchButton= styled(Button)`
background: #f07987;
border: 1px solid;
color:#fff;
border-radius: 11px;
height: 43px;`