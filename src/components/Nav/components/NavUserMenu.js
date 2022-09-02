import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../../Login/Login';
import LoginBlackOut from '../../Login/components/LoginBlackOut';
import variables from '../../../styles/variables';

const NavUserMenu = () => {
  const tokenPossession = localStorage.getItem('TOKEN');

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const onSetIsLoginVisible = () => {
    setIsLoginVisible(prev => !prev);
  };

  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const onSetSingupVisible = () => {
    setIsSignupVisible(prev => !prev);
  };

  const logoutHandle = () => {
    fetch(`http://10.58.4.138:3000/kakao/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') {
          localStorage.removeItem('TOKEN');
          alert('로그아웃 성공');
        } else {
          alert('로그아웃 실패');
        }
      });
  };

  return (
    <NavUserContainer>
      {!tokenPossession && (
        <NavLoginLinkBox onClick={() => onSetIsLoginVisible()}>
          로그인
        </NavLoginLinkBox>
      )}
      {!tokenPossession && (
        <NavSignupLinkBox onClick={() => onSetSingupVisible()}>
          회원가입
        </NavSignupLinkBox>
      )}
      {tokenPossession && (
        <NavLogoutBox NavLogoutBox onClick={logoutHandle}>
          로그아웃
        </NavLogoutBox>
      )}
      {isLoginVisible && (
        <Login type="login" onSetIsLoginVisible={onSetIsLoginVisible} />
      )}
      {isSignupVisible && (
        <Login type="signup" onSetSingupVisible={onSetSingupVisible} />
      )}
      {isLoginVisible && (
        <LoginBlackOut type="login" onSetIsLoginVisible={onSetIsLoginVisible} />
      )}
      {isSignupVisible && (
        <LoginBlackOut type="signup" onSetSingupVisible={onSetSingupVisible} />
      )}
    </NavUserContainer>
  );
};

export default NavUserMenu;

const NavUserContainer = styled.div`
  position: fixed;
  right: 0;
  width: 200px;
  padding: 10px 0;
  margin-right: 80px;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 0px 9px 3px rgba(94, 94, 94, 0.21);
  z-index: 11;
  background-color: white;
`;

const NavLoginLinkBox = styled.div`
  ${variables.flex('row', null, 'center')}
  padding: 15px 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
`;

const NavSignupLinkBox = styled(NavLoginLinkBox)`
  padding: 15px 20px;
  font-weight: 400;
`;

const NavLogoutBox = styled(NavLoginLinkBox)`
  padding: 15px 20px;
  font-weight: 400;
`;
