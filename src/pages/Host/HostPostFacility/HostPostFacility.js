import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../config';
import HostPostButton from './HostPostButton';
import styled from 'styled-components';
import variables from '../../../styles/variables';

function HostPostFacility() {
  const [facilities, setFacilities] = useState([]);

  console.log(facilities);
  useEffect(() => {
    fetch(`${API.amenities}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setFacilities);
  }, []);

  const storeFacilities = target => {
    console.log(target);
  };

  return (
    <HostPostRoomContainer>
      <HostPostRoomBackGround>
        <h1>숙소 편의시설을 등록해주세요.</h1>
      </HostPostRoomBackGround>
      <HostPostRoomSectionContainer>
        <HostPostRoomSectionIntro>
          <Link to="/">⇱ 나가기</Link>
          <h1>호스트님의 숙소 정보를 등록해주세요.</h1>
        </HostPostRoomSectionIntro>
        <HostPostRoomSectionRegistrationWrap>
          <HostPostRoomSectionFacilities>
            <HostPostRoomSectionFacilitiesTitle>
              편의 시설을 선택해주세요.
            </HostPostRoomSectionFacilitiesTitle>
            {facilities.map(list => {
              return (
                <HostPostButton
                  key={list.id}
                  list={list}
                  storeFacilities={storeFacilities}
                />
              );
            })}
          </HostPostRoomSectionFacilities>
        </HostPostRoomSectionRegistrationWrap>
        <HostPostRoomSectionRegistration>
          <Link to="/HostPostImage">
            <button>등록</button>
          </Link>
        </HostPostRoomSectionRegistration>
      </HostPostRoomSectionContainer>
    </HostPostRoomContainer>
  );
}

export default HostPostFacility;

const HostPostRoomContainer = styled.div`
  ${variables.flex('row', 'space-between', 'center')};
  width: 100%;
  height: 100vh;
  background-color: #fff0f0;
  box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.GrayHavy};
`;

const HostPostRoomBackGround = styled.div`
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
`;

const HostPostRoomSectionContainer = styled.section`
  ${variables.flex('column')};
  width: 50%;
  height: 100%;
  transition: 0.1s;
  background-color: ${({ theme }) => theme.White};
`;

const HostPostRoomSectionIntro = styled.div`
  ${variables.flex('row-reverse', 'space-around')}
  position: relative;
  width: 100%;
  height: 250px;
  box-shadow: 0px 1px 2px 0px #d0d0d0;

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
`;

const HostPostRoomSectionRegistrationWrap = styled.div`
  ${variables.flex('column', 'flex-start')};
  width: 100%;
  height: 600px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const HostPostRoomSectionRegistration = styled.div`
  ${variables.flex('row', 'flex-end')}
  width: 100%;
  height: 150px;
  background-color: #fff0f0;
  box-shadow: 0px -1px 2px 0px #d0d0d0;

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
`;

const HostPostRoomSectionFacilities = styled.div`
  ${variables.flex('row', 'flex-start', 'center')};
  width: 500px;
  flex-wrap: wrap;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.Black};
`;
const HostPostRoomSectionFacilitiesTitle = styled.h2`
      width: 100%;
      margin: 20px 0px 20px 0px;
      font-size: 20px;
      font-weight: 600;
    }
`;
