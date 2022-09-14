import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isDateRange } from 'react-day-picker';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import API from '../../../config';
import HostPostPrice from './HostPostPrice';
import HostPostCalendar from './Calendar/HostPostCalendar';
//To do : Naver map API 이슈 해결 후 수정
import HostPostMap from './HostPostMap';

function HostPostInfo() {
  const [pageList, setPageList] = useState(1);
  const [roomData, setRoomData] = useState({
    roomName: '',
    maxPerson: null,
    price: null,
    maxDate: null,
  });
  const [range, setRange] = useState(isDateRange);

  const storeRoomData = ({ target }) => {
    setRoomData({
      ...roomData,
      [target.name]: target.value,
    });
  };

  const HOST_PAGES = {
    1: (
      <HostPostPrice
        key={1}
        roomData={roomData}
        storeRoomData={storeRoomData}
      />
    ),
    //To do : Naver map API 이슈 해결 후 수정
    2: (
      <HostPostMap key={2} roomData={roomData} storeRoomData={storeRoomData} />
    ),
    3: (
      <HostPostCalendar
        key={3}
        roomData={roomData}
        storeRoomData={storeRoomData}
        range={range}
        setRange={setRange}
      />
    ),
  };

  const navigate = useNavigate();

  const pageHandle = () => {
    for (let key in HOST_PAGES) {
      if (pageList === Number(key)) {
        let list = [];
        list.push(HOST_PAGES[key]);
        return list;
      }
    }
  };

  const pgDn = () => {
    if (pageList === 1) return;
    setPageList(pageList - 1);
  };

  const pgUp = () => {
    if (pageList === 3) return;
    setPageList(pageList + 1);
  };

  const hostRoomInfoPost = () => {
    fetch(`${API.hostInfo}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        user_id: 3,
        name: roomData.roomName,
        price: Number(roomData.price),
        max_capacity: Number(roomData.maxPerson),
        latitude: 123.1234567,
        longitude: 1234.1234567,
        available_from: `${range.from.getFullYear()}-${
          range.from.getMonth() + 1
        }-${range.from.getDate()} 00:00:00.00`,
        available_until: `${range.to.getFullYear()}-${
          range.to.getMonth() + 1
        }-${range.to.getDate()} 00:00:00.00`,
        max_days: Number(roomData.maxDate),
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === `place with ${data.place_id} place_id = Created`) {
          navigate(`/HostPostFacility/${data.place_id}`);
        } else {
          alert('입력 양식을 올바르게 입력해주세요.');
        }
      });
  };
  return (
    <HostPostRoomContainer>
      <HostPostRoomBackGround>
        <h1>숙소를 등록해보세요.</h1>
      </HostPostRoomBackGround>
      <HostPostRoomSectionContainer>
        <HostPostRoomSectionIntro>
          <Link to="/">⇱ 나가기</Link>
          <h1>호스트님의 숙소 정보를 등록해주세요.</h1>
        </HostPostRoomSectionIntro>
        <HostPostRoomSectionRegistrationWrap>
          {pageHandle()}
        </HostPostRoomSectionRegistrationWrap>
        <HostPostRoomSectionRegistration>
          {pageList !== 1 && <button onClick={pgDn}>이전</button>}
          {pageList === 3 ? (
            <button
              onClick={() => {
                pgUp();
                hostRoomInfoPost();
              }}
            >
              등록
            </button>
          ) : (
            <button onClick={pgUp}>다음</button>
          )}
        </HostPostRoomSectionRegistration>
      </HostPostRoomSectionContainer>
    </HostPostRoomContainer>
  );
}

export default HostPostInfo;

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
  ${variables.flex('column', 'center', 'space-between')};
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
