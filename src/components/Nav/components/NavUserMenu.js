import React from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';

const NavUserMenu = () => {
  return (
    <NavUserContainer>
      <NavLoginLinkBox>로그인</NavLoginLinkBox>
      <NavSignupLinkBox>회원가입</NavSignupLinkBox>
      <NavLogoutBox>로그아웃</NavLogoutBox>
    </NavUserContainer>
  );
};

export default NavUserMenu;

const NavUserContainer = styled.div`
  position: absolute;
  right: 0;
  width: 200px;
  padding: 10px 0;
  margin-right: 80px;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 0px 9px 3px rgba(94, 94, 94, 0.21);
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
