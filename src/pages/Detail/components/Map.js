import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MapModal from './MapModal';

function Map({ placeInfo, handleSeeMoreMap, handleGoBackMap, mapModal }) {
  const mapElement = useRef(null);
  let latitude = placeInfo.latitude;
  let longitude = placeInfo.longitude;
  console.log(latitude);
  console.log(longitude);

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
    <MapContainer>
      <MapTitleContainer>
        <MapTitle>호스팅 지역</MapTitle>
      </MapTitleContainer>
      <MapDraw ref={mapElement} />
      <MapDescriptionTitle>강남구,서울,한국</MapDescriptionTitle>
      <MapDescription>
        선릉역 인접한 위치로, 강남구 업무중심구역과 대치동 학원가가 바로
        인근에있습니다. 선정릉 공원이 인근에 있어서 산책하기좋고, 교통이
        편리하여 서울 어디든 편리하게 이동이 가능합니다. 도심공항터미덜과,
        삼성동 코엑스, 무역센터도 도보 15분, 지하철 한정거장 거리 입니다.
      </MapDescription>
      <SeeMore onClick={handleSeeMoreMap}>더 보기 {'>'}</SeeMore>
      {mapModal === true && (
        <MapModal
          handleGoBackMap={handleGoBackMap}
          latitude={latitude}
          longitude={longitude}
        />
      )}
    </MapContainer>
  );
}

export default Map;

const MapContainer = styled.div`
  height: 706px;
  padding: 48px 0;
  border-bottom: 0.8px solid #95a5a6;
`;

const MapTitleContainer = styled.div`
  height: 50px;
`;

const MapTitle = styled.h2`
  padding-bottom: 28px;
  font-size: 22px;
`;

const MapDraw = styled.div`
  height: 480px;
  margin-bottom: 32px;
`;

const MapDescriptionTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

const MapDescription = styled.p`
  width: 650px;
  color: rgb(113, 113, 113);
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.8px;
`;

const SeeMore = styled.p`
  width: 100px;
  margin-top: 32px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;
