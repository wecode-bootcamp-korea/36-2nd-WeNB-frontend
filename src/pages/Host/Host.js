import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../../styles/variables';

function Host() {
  return (
    <HostStyle.Container>
      <HostStyle.Image>
        <h1>호스팅을 시작해보세요.</h1>
      </HostStyle.Image>
      <HostStyle.SectionContainer>
        <HostStyle.SectionIntro>
          <Link to="/">⇱ 나가기</Link>
          <h1>호스트님 안녕하세요.</h1>
        </HostStyle.SectionIntro>
        <HostStyle.SectionInputWrap>
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" id="Name" />
          <label htmlFor="Nick name">Nick name</label>
          <input type="text" name="Nick name" id="Nick name" />
          <label htmlFor="E-mail">E-mail</label>
          <input type="text" name="E-mail" id="E-mail" />
          <label htmlFor="Phone">Phone</label>
          <input type="text" name="Phone" id="Phone" />
        </HostStyle.SectionInputWrap>
        <HostStyle.SectionRegistration>
          <button>등록</button>
        </HostStyle.SectionRegistration>
      </HostStyle.SectionContainer>
    </HostStyle.Container>
  );
}

export default Host;

const HostStyle = {
  Container: styled.div`
    ${variables.flex('row', 'space-between', 'center')};
    width: 100%;
    height: 100vh;
    background-color: #fff0f0;
    box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.GrayHavy};
  `,

  Image: styled.div`
    ${variables.flex('column')};
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 48px;
    font-weight: 800;
    color: ${({ theme }) => theme.White};
    background: linear-gradient(180deg, purple, hotpink, #58c, hotpink);

    h1 {
      line-height: 100%;
    }
  `,

  SectionContainer: styled.section`
    ${variables.flex('column')};
    width: 50%;
    height: 100%;
    transition: 0.1s;

    &:hover {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: ${({ theme }) => theme.White};
    }
  `,

  SectionInputWrap: styled.div`
    ${variables.flex('column', '', 'flex-start')};
    margin-bottom: 60px;
    font-size: 20px;
    font-weight: 500;
    color: #e53170;

    label {
      margin: 30px 0px 11px 0px;
    }

    input {
      width: 335px;
      height: 25px;
      padding: 30px 20px;
      border: 1px solid #d6d6d6;
      border-radius: 11px;
      font-size: 20px;

      &:hover {
        box-shadow: 0px 0px 5px 1px #c0c0c0;
      }
    }
  `,

  SectionIntro: styled.div`
    ${variables.flex('row-reverse', 'space-around')}
    position: relative;
    width: 100%;
    height: 100vh;

    a {
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
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 10%;
      font-size: 30px;
      font-weight: 900;
      white-space: pre-wrap;
    }
  `,

  SectionRegistration: styled.div`
    ${variables.flex('', 'flex-end')}
    width: 100%;
    height: 50vh;
    border-bottom-right-radius: 15px;
    background-color: #fff0f0;
    box-shadow: 0px -5px 10px 0px #c0c0c0;

    &:hover {
      background-color: ${({ theme }) => theme.White};
    }

    button {
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
    }
  `,
};
