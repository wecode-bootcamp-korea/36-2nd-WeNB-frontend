import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import API from '../../../config';
import HostButton from './HostButton';
import styled from 'styled-components';
import variables from '../../../styles/variables';

function HostPostFacility() {
  const [facilities, setFacilities] = useState([]);
  const [selectFacilities, setSelectFacilities] = useState([]);
  const placeID = useParams();
  console.log(placeID.placeID);
  useEffect(() => {
    fetch(`${API.amenities}`, {
      method: 'GET',
      headers: { authorization: localStorage.getItem('TOKEN') },
    })
      .then(res => res.json())
      .then(setFacilities);
  }, []);

  const storeFacilities = list => {
    if (selectFacilities.includes(list)) return;
    setSelectFacilities([...selectFacilities, list]);
  };

  const deleteFacilities = id => {
    const itemFilter = [...selectFacilities].filter(item => item.id !== id);
    setSelectFacilities(itemFilter);
  };

  const makeFacilityIdArray = () => {
    const arr = [];
    for (let i = 0; i < selectFacilities.length; i++) {
      arr.push(selectFacilities[i].id);
    }

    return arr;
  };
  const idArray = makeFacilityIdArray().sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  const navigate = useNavigate();
  const facilitiesPost = () => {
    fetch(`${API.amenitiesPost}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        place_id: Number(placeID.placeID),
        amenity_ids: idArray,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'amenitiesRegistered') {
          navigate(`/HostPostImage/${placeID.placeID}`);
        } else {
          alert('Error');
        }
      });
  };

  return (
    <HostPostRoomContainer>
      <HostPostRoomBackGround>
        <HostPostRoomBackGroundTitle>
          숙소 편의시설을 등록해주세요.
        </HostPostRoomBackGroundTitle>
      </HostPostRoomBackGround>
      <HostPostRoomSectionContainer>
        <HostPostRoomSectionIntro>
          <HostPostRoomSectionIntroLink to="/">
            ⇱ 나가기
          </HostPostRoomSectionIntroLink>
          <HostPostRoomSectionIntroLinkTitle>
            호스트님의 숙소 정보를 등록해주세요.
          </HostPostRoomSectionIntroLinkTitle>
        </HostPostRoomSectionIntro>
        <HostPostRoomSectionRegistrationWrap>
          <HostPostRoomSectionFacilities>
            <HostPostRoomSectionFacilitiesTitle>
              편의 시설을 선택해주세요.
            </HostPostRoomSectionFacilitiesTitle>
            {facilities.map(list => {
              return (
                <HostButton
                  key={list.id}
                  list={list}
                  storeFacilities={storeFacilities}
                  deleteFacilities={deleteFacilities}
                  makeFacilityIdArray={makeFacilityIdArray}
                />
              );
            })}
          </HostPostRoomSectionFacilities>
        </HostPostRoomSectionRegistrationWrap>
        <HostPostRoomSectionRegistration>
          <Link to="/HostPostImage">
            <HostPostRoomSectionRegistrationButton onClick={facilitiesPost}>
              등록
            </HostPostRoomSectionRegistrationButton>
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
`;

const HostPostRoomBackGroundTitle = styled.h1`
  line-height: 100%;
`;

const HostPostRoomSectionContainer = styled.section`
  ${variables.flex('column', 'space-between')};
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
`;

const HostPostRoomSectionIntroLink = styled(Link)`
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

const HostPostRoomSectionIntroLinkTitle = styled.h2`
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
  height: 100%;
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
`;
const HostPostRoomSectionRegistrationButton = styled.button`
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
