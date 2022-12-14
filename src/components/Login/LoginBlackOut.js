import React from 'react';
import styled from 'styled-components';

const LoginBlackOutBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.65);
`;

const LoginBlackOut = ({
  onSetIsLoginVisible,
  onSetSingupVisible,
  onSetIsFilterVisible,
  type,
}) => {
  const authType = {
    login: onSetIsLoginVisible,
    signup: onSetSingupVisible,
    filter: onSetIsFilterVisible,
  };

  return <LoginBlackOutBox onClick={authType[type]} />;
};

export default LoginBlackOut;
