import Page from 'components/Page';
import React, { useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import arrowImage from 'assets/img/logo/arrowupanddown.png';
import Select, { components } from 'react-select';
import stplayactImg from 'assets/img/activity/stplayact.png';
import { ReactComponent as ArrowrightIcon } from 'assets/img/logo/rightarrow.svg';
// import './select.scss'
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
import { MdEdit,
  MdCheck,MdSave, MdDelete, MdAttachFile, MdFileUpload, MdInsertDriveFile
} from 'react-icons/md';
const ConfigurationPage = () => {
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
       <Row>
        <Col className="pt-5">
        <Row className="p-3 d-flex justify-content-center">
          
        <Button href="/stactfirst"
            className="border-0 p-3"
            style={{
              background: '#018FF7',
              width:'66%',
              borderRadius: '10px',
              fontFamily: 'Gilroy-Bold',
              fontSize: '24px',
              float: 'center',
              textAlign:'left'
            }}
          >
            <img src={stplayactImg} className="mr-5"/>
          Play Activity 01 - (Rapid naming, write words on your notebook)
          <div className="rounded-circle mt-1" style={{float:'right',width:"30px"
          ,height:'30px',background:'rgba(255, 255, 255, 0.2)',textAlign:'center'}}>
            <ArrowrightIcon className="mb-2"/>
            </div>
          </Button>
          
        </Row>
        
        <Row className="p-3 d-flex justify-content-center">
        
        <Button href="/stactsec"
            className="border-0 p-3"
            style={{
              background: '#E94F2E',
              width:'66%',
              borderRadius: '10px',
              fontFamily: 'Gilroy-Bold',
              fontSize: '24px',
              textAlign:'left'
            }}
          >
            <img src={stplayactImg} className="mr-5"/>
            Play Activity 02 - (Build the whole word)
          <div className="rounded-circle mt-1" style={{float:'right',width:"30px"
          ,height:'30px',background:'rgba(255, 255, 255, 0.2)',textAlign:'center'}}>
            <ArrowrightIcon className="mb-2"/>
            </div>
          </Button>
        
        </Row>   
        <Row className="p-3 d-flex justify-content-center">        
        <Button href="/stactthird"
            className="border-0 p-3"
            style={{
              background: '#1EB972',
              width:'66%',
              borderRadius: '10px',
              fontFamily: 'Gilroy-Bold',
              fontSize: '24px',
              float: 'center',textAlign:'left'
            }}
          >
            <img src={stplayactImg} className="mr-5"/>
            Play Activity 03 - (The missing letter, or letters)
          <div className="rounded-circle mt-1" style={{float:'right',width:"30px"
          ,height:'30px',background:'rgba(255, 255, 255, 0.2)',textAlign:'center'}}>
            <ArrowrightIcon className="mb-2"/>
            </div>
          </Button>
          
        </Row>   
        <Row className="p-3 d-flex justify-content-center">        
        <Button href="/stactfour "
            className="border-0 p-3"            
            style={{
              background: '#F1B02D',
              width:'66%',
              borderRadius: '10px',
              fontFamily: 'Gilroy-Bold',
              fontSize: '24px',
              float: 'center',textAlign:'left'
            }}
          >
            <img src={stplayactImg} className="mr-5"/>
            Play Activity 04 - (Build as many words as possible)
          <div className="rounded-circle mt-1" style={{float:'right',width:"30px"
          ,height:'30px',background:'rgba(255, 255, 255, 0.2)',textAlign:'center'}}>
            <ArrowrightIcon className="mb-2" style={{float:'center'}}/>
            </div>
          </Button>
          
        </Row>           
        </Col>
        
      </Row>
    </Page>
  );
};

export default ConfigurationPage;
