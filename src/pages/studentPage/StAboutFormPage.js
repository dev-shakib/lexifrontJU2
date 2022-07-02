import Page from 'components/Page';
import React, { useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import { Switch } from 'evergreen-ui';
import arrowImage from 'assets/img/logo/arrowupanddown.png';
import Select, { components } from 'react-select';
import './select.scss';
// import { ReactComponent as TimerIcon } from 'assets/img/activity/timer.svg';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import {
  MdEdit,
  MdCheck,
  MdSave,
  MdDelete,
  MdAttachFile,
  MdFileUpload,
  MdInsertDriveFile,
} from 'react-icons/md';
const AboutFormPage = () => {
  const [checkedA, setCheckedA] = useState(false);
  const handleClick = () => {
    setCheckedA(!checkedA);
  };
  const upButtonStyle = {
    width: '100px',
    position: 'absolute',
    background: '#E94F2E',
    textAlign: 'left',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: '16px',
    borderWidth: '0px',
  };
  const options = [
    { value: 'DEFAULTCONFIG', label: 'DEFAULTCONFIG' },
    { value: 'DEFAULTCONFIG', label: 'DEFAULTCONFIG' },
    { value: 'DEFAULTCONFIG', label: 'DEFAULTCONFIG' },
  ];
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img height="29px" src={arrowImage} />
      </components.DropdownIndicator>
    );
  };
  const customStyles = {
    // control: () =>({
    // 	width:'600px'
    // })
  };
  const MyComponent = () => (
    <div style={{ fontFamily: 'Gilroy-SemiBold', fontSize: '16px' }}>
      <Select
        options={options}
        components={{ DropdownIndicator }}
        placeholder="DEFAULTCONFIG"
        isClearable={true}
        styles={customStyles}
      />
    </div>
  );
  const fontstyles = {
    fontFamily: 'Gilroy-Medium',
    fontSize: '16px',
    lineHeight: '21px',
    color: '#FFFFFF',
  };
  const selectstyles = {
    width: '200px',
    hight: '40px',
    background: '#FFFFF',
    borderRadius: '10px',
  };
  return (
    <Page className="mt-0" style={{ background: '#172231' }}>
      <Row className="p-3 text-white border-bottom">
        <span>App Info</span>
      </Row>
      <Row className="border-bottom">
        <Col>
          <Row className="d-flex justify-content-start align-items-end pl-5 pt-5 text-white">
            <span>ΛΕΞΟΚΑΤΑΣΚΕΥΑΣΤΗΣ</span>
          </Row>
          <Row className="d-flex justify-content-start align-items-end pl-5 text-white">
            <span style={{color:"#1EB972"}}>Version: 1.00</span>
          </Row>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col>
          <Row className="d-flex justify-content-start align-items-end pl-5 pt-5 text-white">
            <span>Year: 2022</span>
          </Row>
          <Row className="d-flex justify-content-start align-items-start pl-5 pt-2 text-white">
            <span>LOGO of the Company</span>
          </Row>
          <Row className="d-flex justify-content-start align-items-start pl-5 pt-2 text-white">
            <div
              className="border border-left"
              style={{ borderColor: 'red', height: '10px' }}
            ></div>
          </Row>
          <Row className="d-flex justify-content-start align-items-start pl-5 pt-2 text-white">
            <span>Developpers - <span style={{color:"#1EB972"}}>SESAT LTD</span></span>
          </Row>
          <Row className="d-flex justify-content-start align-items-start pl-5 pt-2 text-white">
            <div
              className="border border-left"
              style={{ borderColor: 'red', height: '10px' }}
            ></div>
          </Row>
          <Row className="d-flex justify-content-start align-items-start pl-5 pt-2 text-white">
            <span>Inspiration - <span style={{color:"#1EB972"}}>Pantelis Makris</span></span>
          </Row>
        </Col>
      </Row>
      <Row className="p-5">
        <span style={{color:"#1EB972"}}>www.icteach.org   •   www.sesarab.com   •   0035799663397</span>
      </Row>
    </Page>
  );
};

export default AboutFormPage;
