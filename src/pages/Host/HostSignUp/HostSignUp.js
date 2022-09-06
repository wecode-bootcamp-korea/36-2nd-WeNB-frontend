import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../../../styles/variables';

function HostSignUp() {
  const [hostInfo, setHostInfo] = useState({
    name: '',
    nick: '',
    email: '',
    phone: '',
  });

  const hostInfoHandle = ({ target }) => {
    setHostInfo({ ...hostInfo, [target.name]: target.value });
  };

  const navigate = useNavigate();

  const hostInfoPost = () => {
    fetch(`http://10.58.4.165:3000/host/register`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 3,
        email: hostInfo.email,
        phone: hostInfo.phone,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'HOST_REGISTRATION_COMPLETE') {
          navigate('/HostPostInfo');
        } else {
          alert('가입 양식을 올바르게 작성해주세요.');
        }
      });
  };

  return (
    <HostStyleContainer>
      <HostStyleImage>
        <HostStyleImageTitle>호스팅을 시작해보세요.</HostStyleImageTitle>
      </HostStyleImage>
      <HostStyleSectionContainer>
        <HostStyleSectionIntro>
          <HostStyleSectionIntroLink to="/">⇱ 나가기</HostStyleSectionIntroLink>
          <HostStyleSectionIntroTitle>
            호스트님 안녕하세요.
          </HostStyleSectionIntroTitle>
        </HostStyleSectionIntro>
        <HostStyleSectionInputWrap onChange={hostInfoHandle}>
          <HostStyleSectionLabel>
            Name
            <HostStyleSectionInput
              type="text"
              name="name"
              defaultValue={hostInfo.name}
            />
          </HostStyleSectionLabel>
          <HostStyleSectionLabel>
            Nick name
            <HostStyleSectionInput
              type="text"
              name="nick"
              defaultValue={hostInfo.nick}
            />
          </HostStyleSectionLabel>
          <HostStyleSectionLabel>
            E-mail
            <HostStyleSectionInput
              type="email"
              name="email"
              defaultValue={hostInfo.email}
            />
          </HostStyleSectionLabel>
          <HostStyleSectionLabel>
            Phone
            <HostStyleSectionInput
              type="tel"
              name="phone"
              defaultValue={hostInfo.phone}
              placeholder=" - 기호를 빼고 입력해주세요."
            />
          </HostStyleSectionLabel>
        </HostStyleSectionInputWrap>
        <HostStyleSectionRegistration>
          <HostStyleSectionRegistrationButton onClick={hostInfoPost}>
            등록
          </HostStyleSectionRegistrationButton>
        </HostStyleSectionRegistration>
      </HostStyleSectionContainer>
    </HostStyleContainer>
  );
}

export default HostSignUp;

const HostStyleContainer = styled.div`
  ${variables.flex('row', 'space-between', 'center')};
  width: 100%;
  height: 100vh;
  background-color: #fff0f0;
  box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.GrayHavy};
`;

const HostStyleImage = styled.div`
  ${variables.flex('column')};
  width: 50%;
  height: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.White};
  background: linear-gradient(180deg, purple, hotpink, #58c, hotpink);
`;

const HostStyleImageTitle = styled.h1`
  line-height: 100%;
`;

const HostStyleSectionContainer = styled.section`
  ${variables.flex('column')};
  width: 50%;
  height: 100%;
  transition: 0.1s;

  &:hover {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: ${({ theme }) => theme.White};
  }
`;

const HostStyleSectionInputWrap = styled.form`
  ${variables.flex('column', '', 'flex-start')};
  margin-bottom: 60px;
  font-size: 20px;
  font-weight: 500;
  color: #e53170;
`;
const HostStyleSectionLabel = styled.label` {
    ${variables.flex('column', '', 'flex-start')};
    margin-top: 30px;
`;
const HostStyleSectionInput = styled.input`
   {
    width: 335px;
    height: 25px;
    margin-top: 10px;
    padding: 30px 20px;
    border: 1px solid #d6d6d6;
    border-radius: 11px;
    font-size: 20px;

    &:hover {
      box-shadow: 0px 0px 5px 1px #c0c0c0;
    }
  }
`;

const HostStyleSectionIntro = styled.div`
  ${variables.flex('row-reverse', 'space-around')}
  position: relative;
  width: 100%;
  height: 100vh;
`;
const HostStyleSectionIntroLink = styled(Link)`
  position: absolute;
  margin: 30px 30px 0px 0px;
  top: 0;
  right: 0;
  text-decoration: none;
  font-size: 25px;
  color: black;
  background-color: rgba(0, 0, 0, 0.01);
  border: none;
  cursor: pointer;
`;

const HostStyleSectionIntroTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 10%;
  font-size: 30px;
  font-weight: 900;
  white-space: pre-wrap;
`;

const HostStyleSectionRegistration = styled.div`
  ${variables.flex('', 'flex-end')}
  width: 100%;
  height: 50vh;
  border-bottom-right-radius: 15px;
  background-color: #fff0f0;
  box-shadow: 0px -5px 10px 0px #c0c0c0;

  &:hover {
    background-color: ${({ theme }) => theme.White};
  }
`;

const HostStyleSectionRegistrationButton = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #e53170;
  cursor: pointer;
`;
