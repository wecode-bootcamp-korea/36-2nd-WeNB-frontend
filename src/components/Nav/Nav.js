import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavUserMenu from './components/NavUserMenu';
import variables from '../../styles/variables';

const Nav = () => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const onSetIsUserVisible = () => {
    setIsUserVisible(prev => !prev);
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  return (
    <>
      <NavContainer>
        <NavLogoBox onClick={goToMain}>wenb</NavLogoBox>
        <NavFilterBox>
          <NavSearchBoxTest>나에게 딱 맞는 숙소 찾기</NavSearchBoxTest>
          <NavSearchIcon>
            <i className="fa-solid fa-magnifying-glass" />
          </NavSearchIcon>
        </NavFilterBox>
        <NavUserLoginSetting onClick={() => onSetIsUserVisible()}>
          <i className="fa-solid fa-bars" />
          <NavUserIconBackground>
            <i className="fa-solid fa-user" />
          </NavUserIconBackground>
        </NavUserLoginSetting>
      </NavContainer>
      <NavUserModalBox>{isUserVisible && <NavUserMenu />}</NavUserModalBox>
    </>
  );
};
export default Nav;

const NavContainer = styled.div`
  ${variables.flex('row', 'space-between', 'center')}
  position: sticky;
  top: 0;
  height: 80px;
  padding: 0 80px;
  border-bottom: 1px solid #e8e8e8;
  background-color: white;
`;

const NavLogoBox = styled.div`
  ${variables.flex('row', null, 'center')}
  height: 80px;
  cursor: pointer;
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.RedButton};
`;

const NavFilterBox = styled.div`
  ${variables.flex('row', 'space-between', 'center')}
  padding: 0 10px;
  width: 250px;
  height: 46px;
  border-radius: 30px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 6px 6px -3px rgba(88, 88, 88, 0.29);
  &:hover {
    transition: 0.2s;
    box-shadow: 0px 8px 9px -4px rgba(94, 94, 94, 0.5);
  }
  &:not(hover) {
    transition: 0.5s;
  }
`;

const NavSearchBoxTest = styled.p`
  padding-left: 30px;
  font-size: 13px;
  font-weight: 600;
`;

const NavUserLoginSetting = styled.div`
  ${variables.flex('row', 'space-around', 'center')}
  padding: 0 10px;
  width: 65px;
  height: 33px;
  padding: 5px 5px 5px 12px;
  border-radius: 30px;
  border: 1px solid #e8e8e8;
  &:hover {
    transition: 0.2s;
    box-shadow: 0px 6px 6px -3px rgba(88, 88, 88, 0.29);
  }
  &:not(hover) {
    transition: 0.5s;
  }

  .fa-bars {
    color: #717171;
  }
`;

const NavUserIconBackground = styled.div`
  ${variables.flex('row', 'center', 'center')}
  width: 29px;
  height: 29px;
  border-radius: 50px;
  color: white;
  background-color: #717171;

  .fa-user {
    font-size: 20px;
  }
`;

const NavUserModalBox = styled.div`
  position: relative;
`;

const NavSearchIcon = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.RedButton};
  cursor: pointer;

  .fa-magnifying-glass {
    color: white;
  }
`;
