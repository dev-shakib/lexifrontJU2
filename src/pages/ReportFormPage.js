import Page from 'components/Page';
import React, { useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import './select.scss';
// import { ReactComponent as TimerIcon } from 'assets/img/activity/timer.svg';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Button, Col, Row, Input } from 'reactstrap';
import { MdSearch, MdAddCircleOutline,  MdFiberManualRecord,  MdAddAPhoto, MdFileDownload, MdPrint, MdMailOutline,  } from 'react-icons/md';
import { FormGroup } from '@material-ui/core';

const ReportFormPage = () => {
  const [checkedA, setCheckedA] = useState(false);
  const [displayfunc, setDisplayfunc] = useState({display:'block'});
  const [displayfuncadd, setDisplayfuncadd] = useState({display:'none'});
  const [value, setValue] = useState(2);

  const handleClick = () => {
    setCheckedA(!checkedA);
    setDisplayfunc({display:'none'});
    setDisplayfuncadd({display:'block'});
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
  const WordsTotal = [
    {
      name: 'Nikki Seaset',
      date:'14 May, 2022',
      activity:'01',
      configurationfile:'DEFAULTCONFIG',
      word:'Graphics',
      reportmessage:'Graphics is low resolution',
    },
    {
      name: 'Nikki Seaset',
      date:'14 May, 2022',
      activity:'01',
      configurationfile:'DEFAULTCONFIG',
      word:'Graphics',
      reportmessage:'Graphics is low resolution',
    },
    {
      name: 'Rissi World',
      date:'05 May, 2022',
      activity:'04',
      configurationfile:'SESATCONFIG',
      word:'Hard',
      reportmessage:'Word is too hard',
    },
    {
      name: 'Nikki Seaset',
      date:'14 May, 2022',
      activity:'01',
      configurationfile:'DEFAULTCONFIG',
      word:'Graphics',
      reportmessage:'Graphics is low resolution',
    },
    {
      name: 'Nikki Seaset',
      date:'14 May, 2022',
      activity:'01',
      configurationfile:'DEFAULTCONFIG',
      word:'Graphics',
      reportmessage:'Graphics is low resolution',
    },
    {
      name: 'Nikki Seaset',
      date:'14 May, 2022',
      activity:'01',
      configurationfile:'DEFAULTCONFIG',
      word:'Graphics',
      reportmessage:'Graphics is low resolution',
    },
    {
      name: 'Nikki Seaset',
      date:'14 May, 2022',
      activity:'01',
      configurationfile:'DEFAULTCONFIG',
      word:'Graphics',
      reportmessage:'Graphics is low resolution',
    },
  ];
  const selectstyles={
    width:'204px',height:'50px',
            background:'rgba(30, 185, 114, 0.05)',
            border: '1.5px solid rgba(30, 185, 114, 0.54)'
            ,borderRadius:'10px',color:'green'
  };
  const ButtonNumbers = ['4', '5', '6', '7', '8', '9', '10'];
  const fontstyles = {
    fontFamily: 'Gilroy-Medium',
    fontSize: '16px',
    lineHeight: '21px',
    color: '#FFFFFF',
  };
  
  
  return (
    <Page className="mt-0" style={{ background: '#172231' }}>
      <Row style={displayfuncadd}>
        <Col className="d-flex justify-content-center align-items-end ">
          <div
            style={{
              width: '462px',
              height: '437px',
              background: 'rgba(255, 255, 255, 0.9)',
              backgroundBlendMode: 'luminosity',
              backdropFilter: 'blur(81.5485px)',
              borderRadius:'11px',
              marginTop:'121px'
            }}
          >
            <FormGroup className="p-5">
              <span style={{color:'#232526',fontFamily:'Gilroy-Bold',
            fontSize:'20px'}}>Add New Word</span>
              <Input placeholder="Type the word" className="mt-3"
                style={{
              color:'rgba(0, 0, 0, 0.38)',
              border: '1px solid rgba(0, 0, 0, 0.15)',borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.9)',backgroundBlendMode: 'luminosity',
              backdropFilter: 'blur(81.5485px)'}}
              ></Input>
              <div className="pt-3">
                 <Button style={{width:'272px',background: '#FFFFFF',
                fontFamily:'Gilroy-Medium',fontSize:'16px',color:'rgba(0, 0, 0, 0.54)'
                ,textAlign:'left',borderRadius:'10px',borderWidth:'0px'}}>
                    Upload the Sound
                    <MdAddCircleOutline style={{color:'#1EB972',marginLeft:'110px'}}/>
                  </Button>
                  <span className="pl-3" style={{color:'rgba(0, 0, 0, 0.38)',
                  fontFamily: 'Gilroy-Medium',
                  fontSize: '16px',
                }}>OR</span>
                  <Button className="ml-2 border-0" style={{background: '#FFFFFF',
                  borderRadius: '10px'}}><MdFiberManualRecord  className="rounded-circle" style={{color:'#E94F2E'}}/></Button>                  
              </div>
              <div className="pt-3 border-0">
                 <Button style={{width:'272px',background: '#FFFFFF',
                fontFamily:'Gilroy-Medium',fontSize:'16px',color:'rgba(0, 0, 0, 0.54)'
                ,textAlign:'left',borderRadius:'10px',borderWidth:'0px'}}>
                    Upload the Graphics
                    <MdAddCircleOutline style={{color:'#1EB972',marginLeft:'94px'}}/>
                  </Button>
                  <span className="pl-3" style={{color:'rgba(0, 0, 0, 0.38)',
                  fontFamily: 'Gilroy-Medium',
                  fontSize: '16px',
                }}>OR</span>
                  <Button className="ml-2 border-0" style={{background: '#FFFFFF',
                  borderRadius: '10px'}}><MdAddAPhoto style={{color:'#018FF7'}}/></Button>                  
              </div>
              <div className="pt-3">
                <Input placeholder="Type the Graphics Name" className="mt-3"
                style={{
              color:'rgba(0, 0, 0, 0.38)',
              border: '1px solid rgba(0, 0, 0, 0.15)',borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.9)',backgroundBlendMode: 'luminosity',
              backdropFilter: 'blur(81.5485px)'}}
              ></Input>               
              </div>
                <Button className="mt-4 border-0" style={{background: '#1EB972',
                  borderRadius: '10px',fontFamily:'Gilroy-SemiBold',fontSize:'16px'}}>Save</Button>
              
            </FormGroup>
          </div>
        </Col>
      </Row>
      
      <Row className="border border-dark" style={displayfunc}>
        <Col>          
          <Row className="pt-4">
             <Col >
              <select className="p-2" style={selectstyles}>
                <option>Configuration File</option>
              </select>
            </Col>
            <Col>
              <select className="p-2" style={selectstyles}>
                <option>Activity</option>
              </select>
            </Col>
            <Col>
              <select  className="p-2" style={selectstyles}>
                <option>Date</option>
              </select>
            </Col>
            <Col>
              <Row >                
                <MdSearch
                  size="38"
                  style={{
                    borderRadius: '5px 0px 0px 5px',
                    background:'rgba(255, 255, 255, 0.05)',
                    color:'rgba(255, 255, 255, 0.2)',
                  }}
                  className="ml-3 border border-right-0 border-dark"
                />
                <Input
                  style={{
                    borderRadius: '0px 5px 5px 0px',
                    background:"rgba(255, 255, 255, 0.05)",
                    color:'#FFFFFF',
                    borderColor:'rgba(255, 255, 255, 0.2)',
                    borderLeft:'0px',
                  }}
                  placeholder="Search"
                  className="w-75 mb-4"
                ></Input>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="p-3 ">
              <div className="rounded" style={{background:'rgba(255, 255, 255, 0.05)',
            borderRadius:'15px'}}>
              <Row className="text-dark p-3">
                <Col md={1}>No</Col>
                <Col className="w-auto">Name</Col>
                <Col className="w-auto">Date</Col>
                <Col md={1}>Activity</Col>
                <Col className="w-auto">Configuration File</Col>
                <Col className="w-auto">Word</Col>
                <Col className="w-auto">Report Message</Col>                
              </Row>
              {WordsTotal.map(({ name,date,activity,configurationfile,word, reportmessage },index) => (
                    <Row className="text-white p-3">
                      <Col md={1}>{index}</Col>
                      <Col className="w-auto">{name}</Col>
                      <Col className="w-auto">{date}</Col>
                      <Col md={1} style={{ color: '#1EB972' }}>{activity}</Col>
                      <Col className="w-auto" style={{ color: '#1EB972' }}>{configurationfile}</Col>
                      <Col className="w-auto" style={{ color: '#1EB972' }}>{word}</Col>
                      <Col className="w-auto" style={{ color: '#1EB972' }}>{reportmessage}</Col>                      
                    </Row>
                  ))}
              </div>
            </Col>
          </Row>
        </Col>
        <Row className="d-flex justify-content-end align-items-center">
          <Button className='mb-5 mr-5 border-0' style={{background:'#F1B02D',borderRadius:'10px'}}>Save on PC
          <MdFileDownload className='ml-3'/>
          </Button>
          <Button className='mb-5 mr-5 border-0'style={{background:'#1EB972',borderRadius:'10px'}}>Print
          <MdPrint className='ml-5'/></Button>
          <Button className='mb-5 mr-5 border-0'style={{background:'#E94F2E',borderRadius:'10px'}}>Send via Mail
          <MdMailOutline className='ml-3'/></Button>
        </Row>
      </Row>
    </Page>
  );
};

export default ReportFormPage;
