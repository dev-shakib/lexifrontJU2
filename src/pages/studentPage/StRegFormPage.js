import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React, { useState } from 'react';
import { Button, Col, Row, Label } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import alert from 'assets/img/logo/alert.png';
import {
  Form,
  Media,
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavLink as BSNavLink,
  FormGroup,
} from 'reactstrap';
// import styles from './stylecss.css';
import Select, { components } from 'react-select';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
import starrowImage from 'assets/img/logo/starrowupanddown.png';
import helpImg from 'assets/img/logo/help.png';
import { red } from '@material-ui/core/colors';

const StLoginFormPage = () => {
  const [modal, setModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checkedA, setCheckedA] = useState(true);
  const [checkedB, setCheckedB] = useState(false);

  const handleChange = event => {
    setCheckedA(event.target.checked);
  };
  const toggle = () => {
    setModal(!modal);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  // toggle = modalType => () => {
  //   if (!modalType) {
  //     return this.setState({
  //       modal: !this.state.modal,
  //     });
  //   }
  //   this.setState({
  //     [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
  //   });
  // };
  // handleAuthState = authState => {
  //   if (authState === STATE_LOGIN) {
  //     this.props.history.push('/login');
  //   } else {
  //     this.props.history.push('/signup');
  //   }
  // };

  // handleLogoClick = () => {
  //   this.props.history.push('/');
  // };

  const loginbutton = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1.5px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '5px',
    width: '399px',
  };

  const idloginbutton = {
    position: 'absolute',
    background: '#FFFFFF',
    borderRadius: '20px',
    width: '391px',
  };
  const CheckboxWithGreenCheck = withStyles({
    root: {
      '&$checked': {
        '& .MuiIconButton-label': {
          position: 'relative',
          zIndex: 0,
          color: ' #172231',
          borderRadius: '5px',
          border: '0.5px solid rgba(255, 255, 255, 0.2)',
        },
        '& .MuiIconButton-label:after': {
          content: '""',
          left: 4,
          top: 4,
          height: 15,
          width: 15,
          position: 'absolute',
          backgroundColor: '#018FF7',
          zIndex: -1,
        },
      },
    },
    checked: {},
  })(Checkbox);
  const options = [
    { value: 'SESAT', label: 'SESAT' },
    { value: 'NORA', label: 'NORA' },
    { value: 'MIKE', label: 'MIKE' },
  ];
  const customStyles = {
    // dropdownIndicator: base => ({
    //   ...base,
    //   color: '#FFFFFF', // Custom colour
    //   borderRadius:'5px',
    // }),
    // // container: provided => ({
    //   ...provided,
    //   width:'auto',
    // }),
    // control: () =>({
    //   width:'auto',
    //   borderRadius:'10px',
    //   background: 'white',
    // })
  };

  // const DropdownIndicator = props => {
  // 	return (
  // 		<components.DropdownIndicator {...props}>
  // 			<FontAwesomeIcon icon="fa-solid fa-arrow-up" />
  // 		</components.DropdownIndicator>
  // 	);
  // };
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img height="23" src={starrowImage} />
      </components.DropdownIndicator>
    );
  };
  const MyComponent = () => (
    <div>
      <Select
        options={options}
        components={{ DropdownIndicator }}
        placeholder="Born year?"
        // isClearable={true}
        styles={customStyles}        
      />
    </div>
  );
  const MyComponentGender = () => (
    <div>
      <Select
        options={options}
        components={{ DropdownIndicator }}
        placeholder="Gender?"
        // isClearable={true}
        styles={customStyles}
      />
    </div>
  );
  const MyComponentConfig = () => (
    <div>
      <Select
        options={options}
        components={{ DropdownIndicator }}
        placeholder="Select a configuration file"
        // isClearable={true}
        styles={customStyles}
      />
    </div>
  );
  const top100Films = [{ title: 'aabb' }];
  return (
    <React.Fragment>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{
          width: '100%',
          background: '#101E2C',
          height: '70px',
          marginLeft: 0,
        }}
      >
        <Col md={4} sm={6} xs={12}>
          <a href="/">
            <div
              className="ml-3"
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
              Back to Startup
            </span>
          </a>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <div className="d-flex justify-content-center">
            <svg
              className="mr-3"
              style={{}}
              width="35"
              height="23"
              viewBox="0 0 35 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.242069 11.3409C0.242069 12.583 1.24161 13.5826 3.24069 15.5816L7.16332 19.5043C9.1624 21.5033 10.1619 22.5029 11.404 22.5029C12.35 22.5029 13.1553 21.9231 14.3686 20.7636C15.7069 22.0645 16.551 22.7149 17.553 22.7149C18.4994 22.7149 19.305 22.1346 20.5193 20.9739C21.7958 22.2053 22.6212 22.8209 23.596 22.8209C24.8381 22.8209 25.8376 21.8214 27.8367 19.8223L31.7593 15.8997C33.7584 13.9006 34.7579 12.9011 34.7579 11.659C34.7579 10.4169 33.7584 9.41739 31.7593 7.41831L27.8367 3.49567C25.8376 1.49659 24.8381 0.49705 23.596 0.49705C22.6496 0.49705 21.844 1.07737 20.6297 2.23803C19.3532 1.0067 18.5278 0.391031 17.553 0.391032C16.607 0.391033 15.8018 0.970804 14.5885 2.13035C13.2501 0.829447 12.406 0.178998 11.404 0.178998C10.1619 0.178998 9.1624 1.17854 7.16332 3.17762L3.24069 7.10025C1.24161 9.09933 0.242069 10.0989 0.242069 11.3409ZM17.659 5.19194L19.3553 3.49567C19.8312 3.01982 20.2504 2.60061 20.6297 2.23803C20.9797 2.57562 21.3635 2.9595 21.7937 3.38965L25.7163 7.31229C27.7154 9.31137 28.715 10.3109 28.715 11.553C28.715 12.795 27.7154 13.7946 25.7163 15.7937L21.7937 19.7163C21.3178 20.1921 20.8986 20.6114 20.5193 20.9739C20.1693 20.6363 19.7855 20.2525 19.3553 19.8223L17.341 17.808L19.5673 15.5816C21.5664 13.5826 22.566 12.583 22.566 11.3409C22.566 10.0989 21.5664 9.09933 19.5673 7.10025L17.659 5.19194ZM17.659 5.19194L15.4327 7.41831C13.4336 9.41738 12.434 10.4169 12.434 11.659C12.434 12.9011 13.4336 13.9006 15.4327 15.8997L17.341 17.808L15.6447 19.5043C15.1681 19.9808 14.7484 20.4006 14.3686 20.7636C14.0479 20.4518 13.6988 20.1027 13.3123 19.7163L9.38969 15.7937C7.39061 13.7946 6.39107 12.795 6.39107 11.553C6.39107 10.3109 7.39061 9.31137 9.38969 7.31229L13.3123 3.38965C13.7889 2.91308 14.2087 2.49331 14.5885 2.13035C14.9092 2.44209 15.2583 2.79118 15.6447 3.17762L17.659 5.19194Z"
                fill="#F1B02D"
              />
            </svg>
            <span
              style={{
                color: '#FFFFFF',
                fontFamily: 'Pilat Extended',
                fontStyle: 'normal',
                fontWeight: '900',
                fontSize: '19.6924px',
              }}
            >
              LEXISMAT
            </span>
          </div>
        </Col>
        <Col md={4} sm={6} xs={12}></Col>
      </Row>
      <Row
        className="d-flex justify-content-center"
        style={{
          width: '100%',
          background: '#172231',
          flexGrow: 1,
          // height: '557px'
          marginLeft: 0,
        }}
      >
        <div className="d-flex align-items-center ">
          <form action="/act01">
            <FormGroup style={{ width: '400px' }} className="ml-5">
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.54)',
                  fontFamily: 'Gilroy-Regular',
                  fontSize: '16px',
                  marginTop: '200px',
                }}
              >
                <span
                  className="d-flex justify-content-center"
                  style={{
                    fontFamily: 'Gilroy-Bold',
                    fontSize: '24px',
                    color: '#FFFFFF',
                  }}
                >
                  Let’s create your account!
                </span>
                <span className="d-flex justify-content-center">
                Please fill up the asking credential to register as a
                </span>
                <span className="d-flex justify-content-center">                  
                  new user.
                </span>
              </span>
              <div className="mt-3 "  >
                  <Input                    
                    className="text-white p-2" style={{width:'100%',borderRadius:'10px',height:'38px'
                    ,border: '1.5px solid rgba(255, 255, 255, 0.2)'
                  ,background: 'rgba(255, 255, 255, 0.05)',}}
                    placeholder="User ID"
                  ></Input>
                </div>             
              <div className="mt-3" style={loginbutton}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={'Password'}
                  style={{
                    width: '100%',
                    height: '38px',
                    color: '#FFFFFF',
                    fontFamily: 'Gilroy-Regular',
                    fontSize: '16px',
                    textAlign: 'center',
                    paddingLeft: 10,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <Visibility style={{ color: 'grey' }} />
                        ) : (
                          <VisibilityOff style={{ color: 'grey' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  required
                />
              </div>
              <div className="mt-3">
                <MyComponent placeholder="aaa" style={{ borderRadius: '20px' }} />
              </div>
              <div className="mt-3">
                <MyComponentGender style={{ borderRadius: '20px' }} />
              </div>
              <div className="mt-3">
                <MyComponentConfig style={{ borderRadius: '20px' }} />
              </div>
              <FormControlLabel
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.54)',                  
                }}
                control={
                  <CheckboxWithGreenCheck
                    checked={checkedA}
                    onChange={handleChange}
                    value="checkedA"
                    color="primary"                    
                  />
                }
                label="Save my informations"
              />              
              <Button
                className="form-control"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Gilroy-SemiBold',
                  background: '#018FF7',
                  borderWidth: '0px',
                }}
              >
                Register now
              </Button>
            </FormGroup>
            <a href="/stloginform">
            <Button onClick={toggle} 
              className="form-control ml-5 mb-3"
              type="button"
              style={{
                width: '89.5%',
                fontSize: '16px',
                fontFamily: 'Gilroy-SemiBold',
                background: 'rgba(1, 143, 247, 0.05)',
                border: ' 1.5px solid rgba(1, 143, 247, 0.54)',
              }}
            >
              Already have an account?{' '} 
              <span style={{ color: '#018FF7' }}>Log in</span>
            </Button>
            </a>            
          </form>
          <Modal
            isOpen={modal}
            toggle={toggle}
            //className={this.props.className}
            width="30%"
            height="28%"
            style={{ borderRadius: '30px', top: '100px' }}
          ><ModalHeader className="d-flex justify-content-end border-0 rounded-top p-1"
          style={{background:'#dae2eb'}}
          >          
              <Media
                object
                src={helpImg}
                className="rounded-circle"
                style={{                  
                  height: '24px',
                }}
              />
            </ModalHeader>           
            <ModalBody
              style={{
                background: '#dae2eb',
                backgroundBlendMode: 'luminosity',
                backdropFilter: 'blur(81.5485px)',
                borderRadius: '0px 0px 15px 15px',
                textAlign:'center'
              }}
            >
              <Media width="55" height="55" object src={alert} />
              <div>
                <Row>
                  <Col className="d-flex justify-content-center pt-3">
                    <span
                      style={{
                        fontFamily: 'Gilroy-Bold',
                        fontSize: '20px',
                        lineHeight: '16px',
                      }}
                    >
                      Don’t have any account?
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <span
                      style={{
                        fontFamily: 'Gilroy-Regular',
                        fontSize: '16px',
                        textAlign: 'center',
                      }}
                      className="p-3"
                    >
                      Do you want to register?
                    </span>
                  </Col>
                </Row>
              </div>
              <div className="d-flex justify-content-center p-4">
                <Col>
                <Button
                  className="border border-0"
                  style={{
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: '20px',
                    color: '#757575',
                    width:'100%',                                       
                    background: 'rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={toggle}
                >
                  No
                </Button>
                </Col>
                <Col>
                <a href="/stregform">
                  <Button
                    className="border-0"
                    style={{                      
                      background: '#018FF7',
                      fontFamily: 'Gilroy-SemiBold',
                      fontSize: '20px',
                      width:'100%',
                    }}
                  >
                    Yes
                  </Button>
                </a>
                </Col>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </Row>

      <Row
        className="d-flex justify-content-center align-items-center "
        style={{
          width: '100%',
          background: '#101E2C',
          height: '70px',
          borderRadius: '0px 0px 21px 21px',
          marginLeft: 0,
        }}
      >
        <span
          style={{
            color: 'rgba(255, 255, 255, 0.54)',
            fontFamily: 'Gilroy-Regular',
            fontSize: '16px',
          }}
        >
          ©2022 <span style={{ color: '#F1B02D' }}>Lexismat</span>. All Rights
          Reserved
        </span>
      </Row>
    </React.Fragment>
  );
};

export default StLoginFormPage;
