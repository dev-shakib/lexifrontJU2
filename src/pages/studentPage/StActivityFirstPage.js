import Page from 'components/Page';
import React, { useState } from 'react';
//import Switch from '@material-ui/core/Switch';
import { Switch, Textarea } from 'evergreen-ui';

import fireImage from 'assets/img/fire.png';
// import { ReactComponent as TimerIcon } from 'assets/img/activity/timer.svg';
// import { ReactComponent as ImgIcon } from 'assets/img/activity/img.svg';
// import { ReactComponent as ManIcon } from 'assets/img/activity/man.svg';
import { ReactComponent as TimerIcon } from 'assets/img/activity/timer.svg';
import { ReactComponent as ImgIcon } from 'assets/img/activity/img.svg';
import { ReactComponent as ManIcon } from 'assets/img/activity/man.svg';
import checkedImg from 'assets/img/activity/checked.png';
import FireWordImage from 'assets/img/words/fireword.png';
import oppsImage from 'assets/img/activity/opps.png';
import helpImage from 'assets/img/logo/help.png';
import alertImage from 'assets/img/logo/alert.png';
import Select, { components } from 'react-select';
import arrowImage from 'assets/img/logo/starrowupanddown.png';
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
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { FormGroup } from '@material-ui/core';

const ActivityFirstPage = () => {
  const [checkedA, setCheckedA] = useState(false);
  const [checkedPlay, setCheckedPlay] = useState(true);
  const [checkedCorrect, setCheckedCorrect] = useState(true);
  const [correctClass, setCorrectClass] = useState('col-md-9 mb-3');
  const [correctStyles, setCorrectStyles] = useState({
    height: '85px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'gray',
    borderRadius: '0px 0px 0px 15px',
  });
  
  const [correctStylesBtnA, setCorrectStylesBtnA] = useState({
    position: 'absolute',
    left: '0px',
  });
  const [correctStylesBtnB, setCorrectStylesBtnB] = useState({
    position: 'absolute',
    right: '0px',
  });
  const [seeResultA, setSeeResultA] = useState();
  const [seeResultB, setSeeResultB] = useState({ background: '#172231' });
  const [displayfuncadd, setDisplayfuncadd] = useState({ display: 'none' });
  const [playAgain, setPlayAgain] = useState({ display: 'none' });
  const [playAgainA, setPlayAgainA] = useState({ display: 'none' });
  const [playAgainB, setPlayAgainB] = useState({ display: 'none' });
  const [report, setReport] = useState({ display: 'none' });
  const [selectA, setSelectA] = useState(false);

  
  const handleClick = () => {
    setCheckedA(!checkedA);
  };
  const letsplayClcik = () => {
    setCheckedPlay(false);
  };
  const selecthandleClick = () =>{
    setSelectA(true);
  }

  const correctClick = () => {
    setCheckedCorrect(false);
    setCorrectClass('rounded');
    setCorrectStyles({
      height: '85px',
      background: 'rgba(255, 255, 255, 0.08)',
      borderColor: 'gray',
      borderRadius: '0px 0px 15px 15px',
    });
    setCorrectStylesBtnA({ display: 'none' });
    setCorrectStylesBtnB({ display: 'none' });
  };
  const seeResultClcik = () => {
    setSeeResultA({ display: 'none' });
    setSeeResultB({ display: 'none' });
    setDisplayfuncadd({ display: 'block' });
  };
  const playagainClick = () => {
    setDisplayfuncadd({ display: 'none' });
    setPlayAgain({ display: 'block' });
    setPlayAgainA({height: '420px',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '15px 15px 0px 0px',
    textAlign: 'center', });
    setSeeResultA({ display: 'block' });
    setPlayAgainB({ height: '85px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'gray',
    borderRadius: '0px 0px 0px 15px',});
  };
  const reportClick = () => {
    setPlayAgain({ display: 'none' });
    setPlayAgainA({ display: 'none' });
    setPlayAgainB({ display: 'none' });
    setReport({display:'block'});
  }
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
    { value: 'Word is not appropriate', label: 'Word is not appropriate' },
    { value: 'Word too easy', label: 'NWord too easy' },
    { value: 'Graphics is not appropriate', label: 'Graphics is not appropriate' },
    { value: 'Other', label: 'Other' },
  ];
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={arrowImage} />
      </components.DropdownIndicator>
    );
  };
  const ReportSelect = () => (
    <div >
      <Select
        options={options}
        components={{ DropdownIndicator }}
        placeholder="Select your report issue"
        isClearable={true}
        styles={{borderRadius:'30px'}}
        size="50"
        onChange={selecthandleClick}
      />
    </div>
  );
  return (
    <Page className="mt-0" style={{ background: '#172231' }}>
      <Row>
        <Col className="pt-1">
        <a href="/stmenu">
              <div
                className="ml-3 "
                style={{
                  width: '24px',
                  position: 'absolute',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <svg
                  className="ml-2"
                  width="6"
                  height="9"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.80015 1.34287L1.37158 4.77144L4.80015 8.20001"
                    stroke="white"
                    stroke-width="1.37143"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <span
                className="ml-5"
                style={{
                  color: 'rgba(255, 255, 255, 0.84)',
                  fontFamily: 'Gilroy-Medium',
                  fontStyle: 'normal',
                  fontSize: '16px',
                }}
              >
                Back
              </span>
            </a>
        </Col>
        <Col style={seeResultA}>
          <Row className="flex-row justify-content-end align-items-center mr-2">
            <div>
              <span
                style={{
                  color: 'white',
                  fontFamily: 'Gilroy-Medium',
                  fontSize: '16px',
                }}
              >
                Autoplay
              </span>
            </div>
            <div className="mt-2 ml-1">
              <Switch
                onChange={handleClick}
                checked={checkedA}
                name="checkedA"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <Row style={seeResultB} className="pl-3">
        <Col className={correctClass}>
          {checkedPlay ? (
            <Card
              className="flex-row justify-content-center align-items-center"
              style={{
                height: '420px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'gray',
                borderRadius: '15px 0px 0px 0px',
              }}
            >
              <div className="mr-2">
                <Button
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  R
                </Button>
              </div>
              <div className="mr-2">
                <Button
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  E
                </Button>
              </div>
              <div className="mr-2">
                <Button
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  F
                </Button>
              </div>
              <div className="mr-2">
                <Button
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  I
                </Button>
              </div>
            </Card>
          ) : checkedCorrect ? (
            <Row
              className="d-flex justify-content-center align-items-center m-0 border"
              style={{
                height: '420px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'gray',
                borderRadius: '15px 0px 0px 0px',
              }}
            >
              <Col className="pt-5">
                <Row>
                  <Col className="d-flex justify-content-start align-items-center ">
                    <Button
                      className="mt-5"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1.5px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <MdSkipPrevious />
                    </Button>
                  </Col>
                  <Col>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: '307px',
                        height: '221.98px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: ' 1.41692px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '9px',
                      }}
                    >
                      <img width="93.52px" height="125.63px" src={fireImage} />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center mr-3">
                    <Button
                      className="mt-5"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1.5px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <MdSkipNext />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center align-items-center mr-3">
                    <div
                      className="pt-1"
                      style={{
                        width: '307px',
                        height: '66.12px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: ' 1.41692px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '9px',
                        textAlign: 'center',
                      }}
                    >
                      <img src={FireWordImage} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center">
                    <Button
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1.5px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <ImgIcon />
                    </Button>
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center">
                    <Button
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1.5px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <ManIcon />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : (
            <Row
              className="d-flex justify-content-center align-items-center m-0"
              style={{
                height: '420px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px 15px 0px 0px',
                textAlign: 'center',
              }}
            >
              <div>
                <img width="75px" height="75px" src={checkedImg} />
                <div
                  className="pt-3"
                  style={{
                    fontFamily: 'Gilroy-Bold',
                    fontSize: '24px',
                    color: '#FFFFFF',
                  }}
                >
                  <span>Congratulations</span>
                </div>
                <div
                  className="pt-3"
                  style={{
                    fontFamily: 'Gilroy-Regular',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.54)',
                  }}
                >
                  <span>
                    You choose the right word. In the results you will see
                    ‘Score’, ‘Tapping Numbers’,
                    <br /> & ‘Duration’. You can play again though.
                  </span>
                </div>
              </div>
            </Row>
          )}

          <Card
            className="flex-row justify-content-center align-items-center"
            style={correctStyles}
          >
            <div className="ml-3" style={correctStylesBtnA}>
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.675 18.95V17.1C13.425 16.6333 14.85 15.6917 15.95 14.275C17.05 12.8583 17.6 11.25 17.6 9.45C17.6 7.66667 17.05 6.07083 15.95 4.6625C14.85 3.25417 13.425 2.31667 11.675 1.85V0C13.9417 0.466667 15.7958 1.5875 17.2375 3.3625C18.6792 5.1375 19.4 7.16667 19.4 9.45C19.4 11.7667 18.6833 13.8167 17.25 15.6C15.8167 17.3833 13.9583 18.5 11.675 18.95ZM0 12.825V6.175H4.225L9.675 0.7V18.3L4.225 12.825H0ZM11.175 13.85V5.125C12.1417 5.425 12.9125 5.97917 13.4875 6.7875C14.0625 7.59583 14.35 8.5 14.35 9.5C14.35 10.5 14.0625 11.3958 13.4875 12.1875C12.9125 12.9792 12.1417 13.5333 11.175 13.85ZM7.75 5.55L5.075 8.1H1.95V10.9H5.075L7.75 13.475V5.55Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.42589 11.475C8.87589 11.475 8.39672 11.275 7.98839 10.875C7.58006 10.475 7.37589 9.99167 7.37589 9.425C7.37589 8.85833 7.58006 8.375 7.98839 7.975C8.39672 7.575 8.88422 7.375 9.45089 7.375C10.0009 7.375 10.4842 7.575 10.9009 7.975C11.3176 8.375 11.5259 8.85833 11.5259 9.425C11.5259 9.99167 11.3176 10.475 10.9009 10.875C10.4842 11.275 9.99256 11.475 9.42589 11.475ZM9.47589 18.85C6.80922 18.85 4.55506 17.9333 2.71339 16.1C0.871722 14.2667 -0.0324444 12.0333 0.000888889 9.4H1.95089C1.93422 11.5 2.65506 13.2792 4.11339 14.7375C5.57172 16.1958 7.35089 16.925 9.45089 16.925C11.5342 16.925 13.3009 16.1958 14.7509 14.7375C16.2009 13.2792 16.9259 11.5167 16.9259 9.45C16.9259 7.35 16.2009 5.57083 14.7509 4.1125C13.3009 2.65417 11.5426 1.925 9.47589 1.925C8.32589 1.925 7.23422 2.18333 6.20089 2.7C5.16756 3.21667 4.30089 3.9 3.60089 4.75H6.17589V6.575H0.400889V0.825H2.20089V3.4C3.06756 2.33333 4.14256 1.5 5.42589 0.9C6.70922 0.3 8.05922 0 9.47589 0C10.7759 0 11.9967 0.245833 13.1384 0.7375C14.2801 1.22917 15.2717 1.9 16.1134 2.75C16.9551 3.6 17.6259 4.6 18.1259 5.75C18.6259 6.9 18.8759 8.125 18.8759 9.425C18.8759 10.725 18.6259 11.95 18.1259 13.1C17.6259 14.25 16.9551 15.25 16.1134 16.1C15.2717 16.95 14.2801 17.6208 13.1384 18.1125C11.9967 18.6042 10.7759 18.85 9.47589 18.85Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
            <div className="mr-5">
              {checkedPlay ? (
                <Button
                  style={{
                    background: '#018FF7',
                    borderWidth: '0px',
                    width: '200px',
                    fontFamily: 'Gilroy-SemiBold',
                  }}
                  onClick={letsplayClcik}
                >
                  Let's play
                </Button>
              ) : checkedCorrect ? (
                <Button
                  style={{
                    background: '#018FF7',
                    borderWidth: '0px',
                    width: '200px',
                    fontFamily: 'Gilroy-SemiBold',
                  }}
                  onClick={correctClick}
                >
                  Correct
                </Button>
              ) : (
                <Row>
                  <Col>
                    <Button
                      style={{
                        background: '#018FF7',
                        borderWidth: '0px',
                        width: '200px',
                        fontFamily: 'Gilroy-SemiBold',
                        borderRadius: '10px',
                      }}
                      onClick={seeResultClcik}
                    >
                      See Result
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      style={{
                        background: 'rgba(30, 185, 114, 0.05)',
                        border: '1.5px solid rgba(1, 143, 247, 0.54)',
                        width: '200px',
                        fontFamily: 'Gilroy-SemiBold',
                        borderRadius: '10px',
                      }}
                    >
                      Play Again
                    </Button>
                  </Col>
                </Row>
              )}
            </div>
            <div className="mr-5" style={correctStylesBtnB}>
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.325 18.725L10.7 12.1C10.2 12.5167 9.60417 12.8417 8.9125 13.075C8.22083 13.3083 7.5 13.425 6.75 13.425C4.85 13.425 3.25 12.7708 1.95 11.4625C0.65 10.1542 0 8.56667 0 6.7C0 4.83333 0.65 3.25 1.95 1.95C3.25 0.65 4.83333 0 6.7 0C8.56667 0 10.1542 0.65 11.4625 1.95C12.7708 3.25 13.425 4.83333 13.425 6.7C13.425 7.45 13.3125 8.15417 13.0875 8.8125C12.8625 9.47083 12.5167 10.1 12.05 10.7L18.725 17.325L17.325 18.725ZM6.725 11.475C8.05833 11.475 9.18333 11.0125 10.1 10.0875C11.0167 9.1625 11.475 8.03333 11.475 6.7C11.475 5.36667 11.0167 4.2375 10.1 3.3125C9.18333 2.3875 8.05833 1.925 6.725 1.925C5.35833 1.925 4.21667 2.3875 3.3 3.3125C2.38333 4.2375 1.925 5.36667 1.925 6.7C1.925 8.03333 2.38333 9.1625 3.3 10.0875C4.21667 11.0125 5.35833 11.475 6.725 11.475ZM7.55 9.6H5.825V7.55H3.775V5.8H5.825V3.775H7.55V5.8H9.575V7.55H7.55V9.6Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.325 18.725L10.7 12.1C10.2 12.5167 9.60417 12.8417 8.9125 13.075C8.22083 13.3083 7.5 13.425 6.75 13.425C4.85 13.425 3.25 12.7708 1.95 11.4625C0.65 10.1542 0 8.56667 0 6.7C0 4.83333 0.65 3.25 1.95 1.95C3.25 0.65 4.83333 0 6.7 0C8.56667 0 10.1542 0.65 11.4625 1.95C12.7708 3.25 13.425 4.83333 13.425 6.7C13.425 7.45 13.3125 8.15417 13.0875 8.8125C12.8625 9.47083 12.5167 10.1 12.05 10.7L18.725 17.325L17.325 18.725ZM6.725 11.475C8.05833 11.475 9.18333 11.0125 10.1 10.0875C11.0167 9.1625 11.475 8.03333 11.475 6.7C11.475 5.36667 11.0167 4.2375 10.1 3.3125C9.18333 2.3875 8.05833 1.925 6.725 1.925C5.35833 1.925 4.21667 2.3875 3.3 3.3125C2.38333 4.2375 1.925 5.36667 1.925 6.7C1.925 8.03333 2.38333 9.1625 3.3 10.0875C4.21667 11.0125 5.35833 11.475 6.725 11.475ZM4.1 7.55V5.8H9.275V7.55H4.1Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </Card>
        </Col>
        {checkedCorrect ? (
          <Col
            className="mb-3"
            md={3}
            style={{
              marginLeft: '-30px',
              fontFamily: 'Gilroy-SemiBold',
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.54)',
            }}
          >
            <Card
              className="flex-row ml-0  border border-left-0 border-bottom-0"
              style={{
                height: '130px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'gray',
                borderRadius: '0px 15px 0px 0px',
              }}
            >
              <CardBody
                className="mt-1"
                style={{ position: 'absolute', left: '0px' }}
              >
                <span>Time Duration</span>
                <InputGroup className="mt-2">
                  <Input
                    style={{
                      fontFamily: 'Gilroy-Black',
                      fontSize: '24px',
                      color: '#1EB972',
                      borderWidth: '0px',
                    }}
                    value="00:10:49"
                  ></Input>
                  <div
                    style={{
                      background: 'white',
                      borderRadius: '0px 3px 3px 0px',
                      borderWidth: '0px',
                    }}
                  >
                    <TimerIcon />
                  </div>
                  <InputGroupAddon addonType="prepend"></InputGroupAddon>
                </InputGroup>
              </CardBody>
            </Card>
            <Card
              className="flex-row ml-0 rounded-0 border border-left-0 border-top-0"
              style={{
                borderColor: 'gray',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <CardBody className="mt-1">
                <Button style={upButtonStyle}>
                  <svg
                    width="11"
                    height="9"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.46424 18C8.2245 18 7.06424 17.7656 5.98344 17.2967C4.90265 16.8278 3.95298 16.1801 3.13444 15.3536C2.31589 14.5272 1.67219 13.5735 1.20331 12.4927C0.734437 11.4119 0.5 10.2437 0.5 8.98808C0.5 7.74834 0.734437 6.58808 1.20331 5.50729C1.67219 4.42649 2.31589 3.47285 3.13444 2.64636C3.95298 1.81987 4.90662 1.17219 5.99536 0.703311C7.08411 0.234437 8.25629 0 9.51192 0C9.92517 0 10.3464 0.0317882 10.7755 0.0953644C11.2046 0.158941 11.6417 0.254305 12.0868 0.381457V2.31258C11.6735 2.18543 11.2483 2.07815 10.8113 1.99073C10.3742 1.90331 9.93311 1.8596 9.48808 1.8596C7.51722 1.8596 5.83245 2.55497 4.43377 3.9457C3.0351 5.33642 2.33576 7.01722 2.33576 8.98808C2.33576 10.9748 3.03113 12.6636 4.42185 14.0543C5.81258 15.445 7.49338 16.1404 9.46424 16.1404C11.4669 16.1404 13.1636 15.445 14.5543 14.0543C15.945 12.6636 16.6404 10.9828 16.6404 9.01192C16.6404 7.04106 15.7105 5.26878 15.6152 5.09007C15.4721 4.79196 15.2337 4.31514 15.2337 4.19603H17.141C17.141 4.31514 17.3794 4.79196 17.4629 5.01854C17.6178 5.26878 18.4762 6.93765 18.4762 9.01192C18.4762 10.2517 18.2417 11.4159 17.7728 12.5046C17.304 13.5934 16.6603 14.547 15.8417 15.3656C15.0232 16.1841 14.0656 16.8278 12.9689 17.2967C11.8722 17.7656 10.704 18 9.46424 18ZM16.545 2.93245H13.5172V1.21589H16.545L18.2616 1.2158L21.2656 1.21589V2.93245H18.2616H16.545ZM12.1583 13.1126L8.48675 9.44106V4.19603H10.2033V8.74967L13.3742 11.9205L12.1583 13.1126Z"
                      fill="white"
                    />
                  </svg>
                  <span className="ml-4">1s</span>
                </Button>
                <Button
                  style={{
                    width: '100px',
                    position: 'absolute',
                    right: '10px',
                    background: '#1EB972',
                    textAlign: 'left',
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: '16px',
                    borderWidth: '0px',
                  }}
                  className="ml-2"
                >
                  <svg
                    width="11"
                    height="9"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.46424 18C8.2245 18 7.06424 17.7656 5.98344 17.2967C4.90265 16.8278 3.95298 16.1801 3.13444 15.3536C2.31589 14.5272 1.67219 13.5735 1.20331 12.4927C0.734437 11.4119 0.5 10.2437 0.5 8.98808C0.5 7.74834 0.734437 6.58808 1.20331 5.50729C1.67219 4.42649 2.31589 3.47285 3.13444 2.64636C3.95298 1.81987 4.90662 1.17219 5.99536 0.703311C7.08411 0.234437 8.25629 0 9.51192 0C9.92517 0 10.3464 0.0317882 10.7755 0.0953644C11.2046 0.158941 11.6417 0.254305 12.0868 0.381457V2.31258C11.6735 2.18543 11.2483 2.07815 10.8113 1.99073C10.3742 1.90331 9.93311 1.8596 9.48808 1.8596C7.51722 1.8596 5.83245 2.55497 4.43377 3.9457C3.0351 5.33642 2.33576 7.01722 2.33576 8.98808C2.33576 10.9748 3.03113 12.6636 4.42185 14.0543C5.81258 15.445 7.49338 16.1404 9.46424 16.1404C11.4669 16.1404 13.1636 15.445 14.5543 14.0543C15.945 12.6636 16.6404 10.9828 16.6404 9.01192C16.6404 7.04106 15.7105 5.26878 15.6152 5.09007C15.4721 4.79196 15.2337 4.31514 15.2337 4.19603H17.141C17.141 4.31514 17.3794 4.79196 17.4629 5.01854C17.6178 5.26878 18.4762 6.93765 18.4762 9.01192C18.4762 10.2517 18.2417 11.4159 17.7728 12.5046C17.304 13.5934 16.6603 14.547 15.8417 15.3656C15.0232 16.1841 14.0656 16.8278 12.9689 17.2967C11.8722 17.7656 10.704 18 9.46424 18ZM16.545 2.93245H13.5172V1.21589H16.545L18.2616 1.2158L21.2656 1.21589V2.93245H18.2616H16.545ZM12.1583 13.1126L8.48675 9.44106V4.19603H10.2033V8.74967L13.3742 11.9205L12.1583 13.1126Z"
                      fill="white"
                    />
                  </svg>
                  <span className="ml-4">1s</span>
                </Button>
              </CardBody>
            </Card>
            <Card
              className="flex-row ml-0 rounded-0 border border-left-0 border-top-0 rounded-right"
              style={{
                borderColor: 'gray',
                height: '175px',
                background: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <CardBody>
                <Row>
                  <Col>
                    <span className="mt-2">Score</span>
                    <Input
                      className="mt-4"
                      style={{
                        background: '#F1B02D',
                        opacity: '0.5',
                        borderRadius: '10px',
                        fontFamily: 'Gilroy-Black',
                        fontSize: '34px',
                      }}
                      value="0.0"
                    />
                  </Col>
                  <Col>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.64375 0.75C7.86875 0.75 8.91562 1.17187 9.78437 2.01562C10.6531 2.85937 11.0875 3.9 11.0875 5.1375C11.0875 5.8125 10.9531 6.43125 10.6844 6.99375C10.4156 7.55625 10.0625 8.04375 9.625 8.45625H8.725V7.48125C9.05 7.18125 9.3 6.82812 9.475 6.42187C9.65 6.01562 9.7375 5.5875 9.7375 5.1375C9.7375 4.2875 9.43437 3.56875 8.82812 2.98125C8.22188 2.39375 7.4875 2.1 6.625 2.1C5.775 2.1 5.04688 2.39375 4.44063 2.98125C3.83438 3.56875 3.53125 4.2875 3.53125 5.1375C3.53125 5.5875 3.6125 6.0125 3.775 6.4125C3.9375 6.8125 4.19375 7.15625 4.54375 7.44375V9.09375C3.79375 8.70625 3.2125 8.15625 2.8 7.44375C2.3875 6.73125 2.18125 5.9625 2.18125 5.1375C2.18125 3.9 2.61563 2.85937 3.48438 2.01562C4.35313 1.17187 5.40625 0.75 6.64375 0.75ZM5.93125 17.1C5.68125 17.1 5.45 17.0562 5.2375 16.9687C5.025 16.8812 4.8375 16.7562 4.675 16.5937L0.625 12.5437L1.9 11.25C2.0875 11.0625 2.31563 10.925 2.58438 10.8375C2.85313 10.75 3.125 10.7375 3.4 10.8L4.54375 11.0812V5.175C4.54375 4.6 4.74375 4.10625 5.14375 3.69375C5.54375 3.28125 6.0375 3.075 6.625 3.075C7.2125 3.075 7.70937 3.28125 8.11562 3.69375C8.52187 4.10625 8.725 4.6 8.725 5.175V8.25H9.11875C9.18125 8.25 9.24063 8.26562 9.29688 8.29687C9.35312 8.32812 9.425 8.35625 9.5125 8.38125L12.3812 9.76875C12.6687 9.91875 12.8844 10.1406 13.0281 10.4344C13.1719 10.7281 13.225 11.0375 13.1875 11.3625L12.475 15.675C12.4 16.0875 12.2 16.4281 11.875 16.6969C11.55 16.9656 11.175 17.1 10.75 17.1H5.93125ZM5.78125 15.75H11.0687L11.8937 11.0437L8.425 9.31875H7.375V5.175C7.375 4.95 7.30625 4.76875 7.16875 4.63125C7.03125 4.49375 6.85625 4.425 6.64375 4.425C6.40625 4.425 6.22187 4.49375 6.09062 4.63125C5.95937 4.76875 5.89375 4.95 5.89375 5.175V12.7125L2.96875 12.075L2.5375 12.5062L5.78125 15.75ZM11.0687 15.75H5.78125H5.89375C5.89375 15.75 5.95937 15.75 6.09062 15.75C6.22187 15.75 6.4 15.75 6.625 15.75C6.8625 15.75 7.05 15.75 7.1875 15.75C7.325 15.75 7.39375 15.75 7.39375 15.75H8.425H11.0687Z"
                        fill="white"
                        fill-opacity="0.54"
                      />
                    </svg>

                    <span className="mt-2">Tops</span>
                    <Input
                      className="mt-4"
                      style={{
                        background: '#018FF7',
                        opacity: '0.5',
                        borderRadius: '10px',
                        fontFamily: 'Gilroy-Black',
                        fontSize: '34px',
                      }}
                      value="00"
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card
              className="border border-left-0 border-top-0"
              style={{
                borderColor: 'gray',
                height: '120px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '0px 0px 15px 0px',
              }}
            >
              <CardBody>
                <span className="">Actions</span>
                <Row className="">
                  <Col md={3} sm={6} xs={12}>
                    <Button
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.54676 16.8058H10.6187V7.19424H8.54676V16.8058ZM13.3813 16.8058H15.4532V7.19424H13.3813V16.8058ZM12 24C10.3693 24 8.82014 23.6835 7.35252 23.0504C5.88489 22.4173 4.60911 21.5588 3.52518 20.4748C2.44125 19.3909 1.58273 18.1151 0.94964 16.6475C0.316547 15.1799 0 13.6307 0 12C0 10.3501 0.316547 8.79616 0.94964 7.33813C1.58273 5.8801 2.44125 4.60911 3.52518 3.52518C4.60911 2.44125 5.88489 1.58273 7.35252 0.94964C8.82014 0.316547 10.3693 0 12 0C13.6499 0 15.2038 0.316547 16.6619 0.94964C18.1199 1.58273 19.3909 2.44125 20.4748 3.52518C21.5588 4.60911 22.4173 5.8801 23.0504 7.33813C23.6835 8.79616 24 10.3501 24 12C24 13.6307 23.6835 15.1799 23.0504 16.6475C22.4173 18.1151 21.5588 19.3909 20.4748 20.4748C19.3909 21.5588 18.1199 22.4173 16.6619 23.0504C15.2038 23.6835 13.6499 24 12 24ZM12 21.7842C14.6859 21.7842 16.988 20.8297 18.9065 18.9209C20.8249 17.012 21.7842 14.705 21.7842 12C21.7842 9.31415 20.8249 7.01199 18.9065 5.09353C16.988 3.17506 14.6859 2.21583 12 2.21583C9.29496 2.21583 6.98801 3.17506 5.07914 5.09353C3.17026 7.01199 2.21583 9.31415 2.21583 12C2.21583 14.705 3.17026 17.012 5.07914 18.9209C6.98801 20.8297 9.29496 21.7842 12 21.7842Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <Button
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2818 24C8.86364 24 7.52727 23.7318 6.27273 23.1955C5.01818 22.6591 3.92727 21.9273 3 21C2.07273 20.0727 1.34091 18.9818 0.804545 17.7273C0.268182 16.4727 0 15.1364 0 13.7182H2.1C2.1 15.9909 2.89545 17.9227 4.48636 19.5136C6.07727 21.1045 8.00909 21.9 10.2818 21.9C12.5545 21.9 14.4864 21.1 16.0773 19.5C17.6682 17.9 18.4636 15.9727 18.4636 13.7182C18.4636 11.4455 17.6909 9.51364 16.1455 7.92273C14.6 6.33182 12.6909 5.53636 10.4182 5.53636H9.84546L11.7818 7.47273L10.4182 8.86364L6 4.41818L10.4182 0L11.7818 1.36364L9.70909 3.40909H10.2818C11.7 3.40909 13.0364 3.68182 14.2909 4.22727C15.5455 4.77273 16.6364 5.50909 17.5636 6.43636C18.4909 7.36364 19.2227 8.45455 19.7591 9.70909C20.2955 10.9636 20.5636 12.3 20.5636 13.7182C20.5636 15.1364 20.2955 16.4727 19.7591 17.7273C19.2227 18.9818 18.4909 20.0727 17.5636 21C16.6364 21.9273 15.5455 22.6591 14.2909 23.1955C13.0364 23.7318 11.7 24 10.2818 24Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <Button
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0863 18.9353C12.4317 18.9353 12.729 18.8106 12.9784 18.5612C13.2278 18.3118 13.3525 18.0144 13.3525 17.6691C13.3525 17.3237 13.2326 17.0312 12.9928 16.7914C12.753 16.5516 12.4508 16.4317 12.0863 16.4317C11.741 16.4317 11.4484 16.5516 11.2086 16.7914C10.9688 17.0312 10.8489 17.3237 10.8489 17.6691C10.8489 18.0144 10.9688 18.3118 11.2086 18.5612C11.4484 18.8106 11.741 18.9353 12.0863 18.9353ZM10.9065 14.5899H12.9784C12.9784 14.0719 13.036 13.5971 13.1511 13.1655C13.2662 12.7338 13.6595 12.2302 14.3309 11.6547C14.9257 11.1942 15.3477 10.7146 15.5971 10.2158C15.8465 9.71703 15.9712 9.16067 15.9712 8.54676C15.9712 7.47242 15.6307 6.61871 14.9496 5.98561C14.2686 5.35252 13.3525 5.03597 12.2014 5.03597C11.1655 5.03597 10.2686 5.29496 9.51079 5.81295C8.753 6.33094 8.20144 7.04077 7.85612 7.94245L9.69784 8.63309C9.88969 8.11511 10.1871 7.69305 10.5899 7.36691C10.9928 7.04077 11.4916 6.8777 12.0863 6.8777C12.6619 6.8777 13.1415 7.04077 13.5252 7.36691C13.9089 7.69305 14.1007 8.11511 14.1007 8.63309C14.1007 9.03597 13.976 9.42446 13.7266 9.79856C13.4772 10.1727 13.1223 10.5516 12.6619 10.9353C12.0671 11.4532 11.6259 11.9664 11.3381 12.4748C11.0504 12.9832 10.9065 13.6883 10.9065 14.5899ZM11.9712 24C10.3022 24 8.73861 23.6978 7.28058 23.0935C5.82254 22.4892 4.55156 21.6451 3.46763 20.5612C2.38369 19.4772 1.53477 18.2014 0.920863 16.7338C0.306954 15.2662 0 13.6883 0 12C0 10.3118 0.306954 8.73861 0.920863 7.28058C1.53477 5.82254 2.38369 4.55156 3.46763 3.46763C4.55156 2.38369 5.82254 1.53477 7.28058 0.920863C8.73861 0.306954 10.3022 0 11.9712 0C13.6211 0 15.1799 0.306954 16.6475 0.920863C18.1151 1.53477 19.3909 2.3789 20.4748 3.45324C21.5588 4.52758 22.4173 5.79856 23.0504 7.26619C23.6835 8.73381 24 10.3118 24 12C24 13.6883 23.6835 15.2662 23.0504 16.7338C22.4173 18.2014 21.5588 19.4724 20.4748 20.5468C19.3909 21.6211 18.1199 22.4652 16.6619 23.0791C15.2038 23.693 13.6403 24 11.9712 24ZM11.9712 21.7842C14.7146 21.7842 17.036 20.8297 18.9353 18.9209C20.8345 17.012 21.7842 14.705 21.7842 12C21.7842 9.31415 20.8345 7.01199 18.9353 5.09353C17.036 3.17506 14.7146 2.21583 11.9712 2.21583C9.20863 2.21583 6.89209 3.17506 5.02158 5.09353C3.15108 7.01199 2.21583 9.31415 2.21583 12C2.21583 14.705 3.15108 17.012 5.02158 18.9209C6.89209 20.8297 9.20863 21.7842 11.9712 21.7842Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <Button
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.19424 19.1079H9.06475V13.3525H11.8273L12.9784 15.6547H19.1079V8.34532H15.7122L14.5612 6.04317H7.19424V19.1079ZM14.2158 13.7842L13.0647 11.482H9.06475V7.91367H13.3237L14.4748 10.2158H17.2374V13.7842H14.2158ZM12 24C10.3118 24 8.73381 23.693 7.26619 23.0791C5.79856 22.4652 4.52758 21.6211 3.45324 20.5468C2.3789 19.4724 1.53477 18.2014 0.920863 16.7338C0.306954 15.2662 0 13.6883 0 12C0 10.3118 0.306954 8.73381 0.920863 7.26619C1.53477 5.79856 2.3789 4.52758 3.45324 3.45324C4.52758 2.3789 5.79856 1.53477 7.26619 0.920863C8.73381 0.306954 10.3118 0 12 0C13.6883 0 15.2662 0.306954 16.7338 0.920863C18.2014 1.53477 19.4724 2.3789 20.5468 3.45324C21.6211 4.52758 22.4652 5.79856 23.0791 7.26619C23.693 8.73381 24 10.3118 24 12C24 13.6883 23.693 15.2662 23.0791 16.7338C22.4652 18.2014 21.6211 19.4724 20.5468 20.5468C19.4724 21.6211 18.2014 22.4652 16.7338 23.0791C15.2662 23.693 13.6883 24 12 24ZM12 21.7842C14.7818 21.7842 17.1079 20.8489 18.9784 18.9784C20.8489 17.1079 21.7842 14.7818 21.7842 12C21.7842 9.21823 20.8489 6.89209 18.9784 5.02158C17.1079 3.15108 14.7818 2.21583 12 2.21583C9.21823 2.21583 6.89209 3.15108 5.02158 5.02158C3.15108 6.89209 2.21583 9.21823 2.21583 12C2.21583 14.7818 3.15108 17.1079 5.02158 18.9784C6.89209 20.8489 9.21823 21.7842 12 21.7842Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ) : (
          ''
        )}
      </Row>
      <Row style={displayfuncadd}>
        <Col className="d-flex justify-content-center align-items-end ">
          <div
            style={{
              width: '462px',
              height: '383px',
              background: 'rgba(255, 255, 255, 0.9)',
              backgroundBlendMode: 'luminosity',
              backdropFilter: 'blur(81.5485px)',
              borderRadius: '11px',
              marginTop: '121px',
            }}
          >
            <FormGroup className="p-5">
              <span
                style={{
                  color: '#232526',
                  fontFamily: 'Gilroy-Bold',
                  fontSize: '20px',
                }}
              >
                Results
              </span>
              <div
                className="mt-3 p-2 flex-row"
                style={{
                  color: 'rgba(0, 0, 0, 0.38)',
                  border: '1px solid rgba(0, 0, 0, 0.15)',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  backgroundBlendMode: 'luminosity',
                  backdropFilter: 'blur(81.5485px)',
                  opacity: '0.3',
                }}
              >
                Score{' '}
                <Button
                  style={{
                    borderWidth: '0px',
                    float: 'right',
                    width: '120px',
                    background: '#018FF7',
                  }}
                >
                  0.0
                </Button>
              </div>
              <div
                className="mt-3 p-2 flex-row"
                style={{
                  color: 'rgba(0, 0, 0, 0.38)',
                  border: '1px solid rgba(0, 0, 0, 0.15)',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backgroundBlendMode: 'luminosity',
                  backdropFilter: 'blur(81.5485px)',
                }}
              >
                Number of Tap{' '}
                <Button
                  style={{
                    borderWidth: '0px',
                    float: 'right',
                    width: '120px',
                    background: '#018FF7',
                  }}
                >
                  52
                </Button>
              </div>
              <div
                className="mt-3 p-2 flex-row"
                style={{
                  color: 'rgba(0, 0, 0, 0.38)',
                  border: '1px solid rgba(0, 0, 0, 0.15)',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backgroundBlendMode: 'luminosity',
                  backdropFilter: 'blur(81.5485px)',
                }}
              >
                Duration
                <Button
                  style={{
                    borderWidth: '0px',
                    float: 'right',
                    width: '120px',
                    background: '#018FF7',
                  }}
                >
                  5m 23s
                </Button>
              </div>

              <Button
                className="mt-4 border-0"
                style={{
                  background: '#018FF7',
                  borderRadius: '10px',
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: '16px',
                }}
                onClick={playagainClick}
              >
                Play Again
              </Button>
            </FormGroup>
          </div>
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center align-items-center m-0"        
        style={playAgainA}
      >
        <div style={playAgain}>
          <img width="75px" height="75px" src={oppsImage} />
          <div
            className="pt-3"
            style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: '24px',
              color: '#FFFFFF',
            }}
          >
            <span>Opps!</span>
          </div>
          <div
            className="pt-3"
            style={{
              fontFamily: 'Gilroy-Regular',
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.54)',
            }}
          >
            <span>
            You loose the game, you choose the wrong word, 
              <br />you wanna play again?
            </span>
          </div>
        </div>
      </Row>
      <Card
            className="flex-row justify-content-center align-items-center"
            style={playAgainB}
          >
            
            <div className="mr-5">
                <Button
                   style={{
                    background: 'rgba(30, 185, 114, 0.05)',
                    border: '1.5px solid rgba(1, 143, 247, 0.54)',
                    width: '200px',
                    fontFamily: 'Gilroy-SemiBold',
                    borderRadius: '10px',
                  }}
                  onClick={reportClick}
                >
                  Play Again
                </Button>
              
            </div>           
      </Card>
      <Row style={report}>
        <Col className="d-flex justify-content-center align-items-end ">
          <div
            style={ (selectA) ? {height: '400px'}:{height:'562px'},{
              width: '462px',
             
              background: 'rgba(255, 255, 255, 0.9)',
              backgroundBlendMode: 'luminosity',
              backdropFilter: 'blur(81.5485px)',
              borderRadius: '11px',
              marginTop: '121px',
            }}
          >
            <div className="p-2" style={{textAlign:'right'}}><img width="24px" height="24px" src={helpImage} /></div>
            <div className="p-2" style={{textAlign:'center'}}><img width="55px" height="55px" src={alertImage} /></div>
            <FormGroup className="p-2">
              <span
                style={{
                  color: '#232526',
                  fontFamily: 'Gilroy-Bold',
                  fontSize: '20px',
                  textAlign:'center'
                }}
              >
                Report
              </span>
              <div style={{textAlign:'center',fontFamily:'Gilroy-Regular',
            fontSize:'16px'}}><span>You can report by selecting from the drop-down or 
                <br />type your problem by selecting other from the 
                <br />drop-down menu.</span></div>  
                <div className="w-75 flex-row mt-4 ml-5"><ReportSelect onChange={selecthandleClick} height="30px" />
                </div>
                {selectA ? <div className="w-75 mt-4 ml-5" ><Textarea placeholder="type here" style={{
                  height:'150px'
                               }}></Textarea></div>:''}
              <Button
                className="mt-4 ml-5 border-0 w-75"
                style={{
                  background: '#018FF7',
                  borderRadius: '10px',
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: '16px',float:'center'
                }}                
              >
                Report
              </Button>
            </FormGroup>
          </div>
        </Col>
      </Row>
    </Page>
  );
};

export default ActivityFirstPage;
