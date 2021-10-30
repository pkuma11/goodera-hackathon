import React, { useEffect, useState } from "react";
import axios from "axios";

import { Col, Row, Input, Select, Modal } from "antd";
import {
  CustomH1,
  CustomH2,
  CustomImg,
  CustomRowContainer,
  CustomViewDetialsButton,
  CustomSearchButton,
} from "./style";

const JobExplore = () => {
  const [result, setResult] = useState([]);
  const [loader, setLoader] = useState(true);
  const { Option } = Select;

  const [searchText, setSearchText] = useState("");
  const [oldResult, setOldResult] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedContent, setSelectedContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [jobId,setJobId]=useState();

  const handleOk = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.themuse.com/api/public/jobs?api_key=a80cc431cef204fbbb518a976e955bcb6674c041e47ae42258cc141dee3dc911&&page=1&&items_per_page=30`
      )
      .then((res) => {
        setResult(res && res.data && res.data.results);
        setOldResult(res && res.data && res.data.results);
        setLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoader(false);
      });
  }, []);

  const searchDetails = () => {
    setLoader(true);
    const updatedResult = [];
    if (searchText.length && selectedLocation && !selectedLocation.length) {
      result.forEach((ele) => {
        if (
          ele &&
          ele.contents
            .replace(/(<([^>]+)>)/g, "")
            .toLowerCase()
            .includes(searchText.toLowerCase())
        )
          updatedResult.push(ele);
      });
      setResult(updatedResult);
      setLoader(false);
    } else if (searchText && !searchText.length && selectedLocation.length) {
      result.forEach((ele) => {
        if (
          ele.locations &&
          ele.locations[0] &&
          ele.locations[0].name.includes(selectedLocation)
        )
          updatedResult.push(ele);
      });
      setResult(updatedResult);
      setLoader(false);
    } else if (searchText.length && selectedLocation.length) {
      result.forEach((ele) => {
        if (
          ele.locations &&
          ele.locations[0] &&
          ele.locations[0].name.includes(selectedLocation) &&
          ele &&
          ele.contents
            .replace(/(<([^>]+)>)/g, "")
            .toLowerCase()
            .includes(searchText)
            .toLowerCase()
        )
          updatedResult.push(ele);
      });
      setResult(updatedResult);
      setLoader(false);
    } else {
      setResult(oldResult);
      setLoader(false);
    }
  };

  return (
    <React.Fragment>
      {loader ? (
        <h1>Loading</h1>
      ) : (
        <React.Fragment>
          <Row>
            <Col span={20} offset={2}>
              <CustomH1>Find Your Dream Job</CustomH1>
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={2}>
              <CustomH2>
                Browse through thousands of full-time or part-time
              </CustomH2>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              background: "#fff",
              width: "80%",
              margin: "0px auto",
              borderRadius: "11px",
              height: "68px",
            }}
          >
            <Col span={8}>
              <Input
                placeholder="Job title or keyboard"
                onChange={(event) => setSearchText(event.target.value)}
              />
            </Col>
            <Col span={8}>
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Select location"
                onChange={(value) => setSelectedLocation(value)}
              >
                <Option value="Nashville">Nashville, TN</Option>
                <Option value="New York">New York, NY</Option>
                <Option value="Bengaluru">Bengaluru, India</Option>
                <Option value="Berlin">Berlin, Germany</Option>
              </Select>
            </Col>
            <Col span={4}>
              <CustomSearchButton onClick={searchDetails}>
                Search
              </CustomSearchButton>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{ background: "#E5E5E5", marginTop: "33px" }}
          >
            {result &&
              result.map((ele) => (
                <Col span={10}>
                  <CustomRowContainer type="flex" align="middle">
                    <Col span={8}>
                      <CustomImg
                        src={`https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80`}
                      ></CustomImg>
                    </Col>
                    <Col span={14}>
                      <p>{ele && ele.name}</p>
                      <p>
                        <span>Location: </span>
                        {ele &&
                          ele.locations &&
                          ele.locations[0] &&
                          ele.locations[0].name}
                        <span>Company: </span>
                        {ele && ele.company && ele.company.name}
                      </p>
                      <p>
                        {ele &&
                          ele.contents
                            .replace(/(<([^>]+)>)/g, "")
                            .slice(0, 100) + "..."}
                      </p>
                      <CustomViewDetialsButton
                        onClick={() => {
                          setIsModalVisible(true);
                          setSelectedContent(
                            ele && ele.contents.replace(/(<([^>]+)>)/g, "")
                          );
                          setJobId(ele && ele.id)
                        }}
                      >
                        View Details
                      </CustomViewDetialsButton>
                    </Col>
                  </CustomRowContainer>
                </Col>
              ))}
          </Row>
        </React.Fragment>
      )}
      <Modal
        title="Job Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
      >
        Job id: {jobId} <br/>
        {selectedContent}
      </Modal>
    </React.Fragment>
  );
};

export default JobExplore;
