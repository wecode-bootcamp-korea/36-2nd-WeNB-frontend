import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function MapModal({ handleGoBackMap, latitude, longitude }) {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    const location = new naver.maps.LatLng(latitude, longitude);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [latitude, longitude]);
  return (
    <ModalContainer>
      <ModalNavWrap>
        <GoBackArrow
          src="./images/Detail/icons/left-arrow.png"
          onClick={handleGoBackMap}
        />
      </ModalNavWrap>
      <ModalMapContainer>
        <ModalMapTitleWrap>
          <ModalMapTitle>호스팅 지역</ModalMapTitle>
          <ModalMapLocation>강남구, 서울, 한국</ModalMapLocation>
          <ModalMapDescription>
            선릉역 인접한 위치로, 강남구 업무중심구역과 대치동 학원가가 바로
            인근에있습니다. 선정릉 공원이 인근에 있어서 산책하기좋고, 교통이
            편리하여 서울 어디든 편리하게 이동이 가능합니다. 도심공항터미덜과,
            삼성동 코엑스, 무역센터도 도보 15분, 지하철 한정거장 거리 입니다.
          </ModalMapDescription>
          <ModalMapTransportation>교통편</ModalMapTransportation>
          <ModalMapDescription>
            지하철 2호선 선릉역, 수인분당선 선릉역이 함께 있습니다. 다수의
            버스노선과 공항버스및 도심공항터미널도 가까이 있습니다.
          </ModalMapDescription>
        </ModalMapTitleWrap>
        <ModalMapWrap>
          <ModalMap ref={mapElement} />
        </ModalMapWrap>
      </ModalMapContainer>
    </ModalContainer>
  );
}

export default MapModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  position: absolute;
  z-index: 1000;
`;

const ModalNavWrap = styled.div`
  height: 64px;
  width: 100%;
  padding: 0 24px;
`;

const ModalMapContainer = styled.div`
  height: 900px;
  width: 1708px;
  padding: 0 32px 32px 32px;
  display: grid;
  grid-template-columns: 25% 75%;
`;

const ModalMapTitleWrap = styled.div``;

const ModalMapWrap = styled.div``;

const ModalMapTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

const ModalMapLocation = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
`;

const ModalMapDescription = styled.p`
  width: 368px;
  margin-top: 30px;
  color: rgb(113, 113, 113);
  line-height: 25px;
`;

const ModalMapTransportation = styled.p`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 500;
`;

const ModalMap = styled.div`
  width: 1300px;
  height: 900px;
`;

const GoBackArrow = styled.img`
  width: 14px;
  height: 14px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;
