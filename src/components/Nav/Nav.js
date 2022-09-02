import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavUserMenu from './components/NavUserMenu';
import Filter from './components/Filter';
import LoginBlackOut from '../Login/components/LoginBlackOut';
import variables from '../../styles/variables';

const Nav = () => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const navTokenPossession = !!localStorage.getItem('TOKEN');

  const onSetIsUserVisible = () => {
    setIsUserVisible(prev => !prev);
  };
  const onSetIsFilterVisible = () => {
    setIsFilterVisible(prev => !prev);
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  const goToHost = () => {
    navigate('/Host');
  };
  return (
    <>
      <NavContainer>
        <NavLogoBox navTokenPossession={navTokenPossession}>
          <NavLogo onClick={() => goToMain()}>wenb</NavLogo>
        </NavLogoBox>
        <NavFilterBox onClick={() => onSetIsFilterVisible()}>
          <NavSearchBoxTest>나에게 딱 맞는 숙소 찾기</NavSearchBoxTest>
          <NavSearchIcon>
            <i className="fa-solid fa-magnifying-glass" />
          </NavSearchIcon>
        </NavFilterBox>
        <NavUserBox>
          {navTokenPossession && (
            <NavHostMode onClick={() => goToHost()}>
              호스트 모드로 전환
            </NavHostMode>
          )}
          <NavUserLoginSetting onClick={() => onSetIsUserVisible()}>
            <i className="fa-solid fa-bars" />
            <NavUserIconBackground>
              <i className="fa-solid fa-user" />
            </NavUserIconBackground>
          </NavUserLoginSetting>
        </NavUserBox>
      </NavContainer>
      <NavUserModalBox>
        {isUserVisible && (
          <NavUserMenu
            goToMain={goToMain}
            setIsUserVisible={setIsUserVisible}
          />
        )}
        {isFilterVisible && (
          <Filter type="filter" onSetIsFilterVisible={onSetIsFilterVisible} />
        )}
        {isFilterVisible && (
          <LoginBlackOut
            type="filter"
            onSetIsFilterVisible={onSetIsFilterVisible}
          />
        )}
      </NavUserModalBox>
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
  z-index: 10;
`;

const NavLogoBox = styled.div`
  width: ${props => (props.navTokenPossession ? '237px' : '103px')};
`;

const NavLogo = styled.p`
  ${variables.flex('row', null, 'center')}
  height: 80px;
  width: 70px;
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.RedButton};
  cursor: pointer;
`;

const NavFilterBox = styled.div`
  ${variables.flex('row', 'space-between', 'center')}
  padding: 0 10px;
  width: 250px;
  height: 46px;
  border-radius: 30px;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 6px 6px -3px rgba(88, 88, 88, 0.29);
  cursor: pointer;
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
  margin-left: 20px;
  width: 65px;
  height: 33px;
  padding: 5px 5px 5px 12px;
  border-radius: 30px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
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

const NavUserBox = styled.div`
  ${variables.flex('row', 'center', 'center')}
`;

const NavHostMode = styled.div`
  ${variables.flex('row', 'center', 'center')}
  width: 133px;
  height: 42px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    border-radius: 30px;
    background-color: #f7f7f7;
  }
`;
