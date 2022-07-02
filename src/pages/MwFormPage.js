import Page from 'components/Page';
import React, { useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import { Switch } from 'evergreen-ui';
import arrowImage from 'assets/img/logo/arrowupanddown.png';
import Select, { components } from 'react-select';
import './select.scss';
// import { ReactComponent as TimerIcon } from 'assets/img/activity/timer.svg';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Button, Col, Row, Input } from 'reactstrap';
import { MdSearch, MdAddCircleOutline, MdRecordVoiceOver, MdFiberManualRecord, MdInsertPhoto, MdAddAPhoto, MdAddToPhotos } from 'react-icons/md';
import { FormGroup } from '@material-ui/core';

const MwPage = () => {
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
      value: 'Graphics',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Hard',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Easy',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Application',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Appropiate',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Tool',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Computer',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
  ];
  const WordsTotalList = [
    {
      value: 'Orio',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Hard',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Easy',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Talk',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Yard',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Tool',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
    {
      value: 'Desk',
      label:
        'Activity 01     -     Activity 02     -     Activity 03     -     Activity 04',
    },
  ];
  const ButtonNumbers = ['4', '5', '6', '7', '8', '9', '10'];
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
          <Row className="d-flex justify-content-start align-items-end text-white bg-dark">
            <Tabs
              value={value}
              textColor="green"
              indicatorColor="primary"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab size={50} label="All words" />
              <Tab label="Lists" />
            </Tabs>
          </Row>
          <Row>
            <Col md={4}>
              <Row className="p-3">
                <MdSearch
                  size="38"
                  style={{
                    borderRadius: '5px 0px 0px 5px',
                  }}
                  className="ml-3 bg-white h-75"
                />
                <Input
                  style={{
                    borderRadius: '0px 5px 5px 0px',
                  }}
                  placeholder="Search"
                  className="w-75 mb-4"
                />
              </Row>
            </Col>
            <Col>
              {value ? (
                <Row>
                  <div className="p-1 mt-3">
                    <Button
                      className="active"
                      style={{
                        background: 'rgba(30, 185, 114, 0.05)',
                        background: '#1EB972',
                        border: '1.5px solid rgba(30, 185, 114, 0.54)',
                      }}
                    >
                      3
                    </Button>
                  </div>
                  {ButtonNumbers.map(index => (
                    <div className="p-1 mt-3">
                      <Button
                        className="active"
                        style={{
                          background: 'rgba(30, 185, 114, 0.05)',
                          border: '1.5px solid rgba(30, 185, 114, 0.54)',
                        }}
                      >
                        {ButtonNumbers[index - 4]}
                      </Button>
                    </div>
                  ))}
                </Row>
              ) : (
                ''
              )}
            </Col>
            <Col className="d-flex justify-content-end align-items-start">
              <Row className="p-3">
                <Button onClick={handleClick}
                  style={{
                    background: 'rgba(30, 185, 114, 0.1)',
                    border: '1.5px solid rgba(30, 185, 114, 0.54)',
                    borderRadius: '10px',
                    color: '#1EB972',
                    fontFamily: 'Gilroy-SemiBold',
                    width: '240px',
                    marginRight: 'auto',
                  }}
                  className="d-flex justify-content-start align-items-center"
                >
                  <span>Add New Word</span>
                  <div style={{ textAlign: 'right', width: '100px' }}>
                    <MdAddCircleOutline />
                  </div>
                </Button>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="text-dark p-2">
                <Col md={3}>Words (Total - 20,090)</Col>
                <Col>Activity (Click on activity to play specifically</Col>
              </Row>

              {!value
                ? WordsTotal.map(({ value, label }) => (
                    <Row className="text-white p-2">
                      <Col md={3}>{value}</Col>
                      <Col style={{ color: '#1EB972' }}>{label}</Col>
                    </Row>
                  ))
                : WordsTotalList.map(({ value, label }) => (
                    <Row className="text-white p-2">
                      <Col md={3}>{value}</Col>
                      <Col style={{ color: '#1EB972' }}>{label}</Col>
                    </Row>
                  ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
};

export default MwPage;
