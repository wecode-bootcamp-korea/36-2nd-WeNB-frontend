//To do : Naver map API 이슈 해결 후 수정

/* import React, { useEffect, useRef, useState } from 'react';
import { geocoding } from './Geocode';
import styled from 'styled-components';

function Map() {
  const mapElement = useRef(null);
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    const location = new naver.maps.LatLng(37.5063712, 127.0536603);
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
  }, []);
  const [data, setData] = useState();

  const dataHandle = ({ target }) => {
    setData(target.value);
  };
  return (
    <MapContainer>
      <MapTitleContainer>
        <MapTitle>호스팅 지역</MapTitle>
      </MapTitleContainer>
      <MapDraw ref={mapElement} />
      <input type="text" value={data} onChange={dataHandle} />
      <button onClick={() => geocoding(data)}>검색</button>
      <MapDescriptionTitle>강남구,서울,한국</MapDescriptionTitle>
      <MapDescription>
        선릉역 인접한 위치로, 강남구 업무중심구역과 대치동 학원가가 바로
        인근에있습니다. 선정릉 공원이 인근에 있어서 산책하기좋고, 교통이
        편리하여 서울 어디든 편리하게 이동이 가능합니다. 도심공항터미덜과,
        삼성동 코엑스, 무역센터도 도보 15분, 지하철 한정거장 거리 입니다.
      </MapDescription>
      <SeeMore>
        <span>더 보기</span> {'>'}
      </SeeMore>
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
  font-size: 22px;
  padding-bottom: 28px;
`;
const MapDraw = styled.div`
  height: 480px;
  margin-bottom: 32px;
`;
const MapDescriptionTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;
const MapDescription = styled.p`
  font-size: 16px;
  width: 650px;
  color: rgb(113, 113, 113);
  line-height: 20px;
  letter-spacing: 0.8px;
`;
const SeeMore = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 32px;
  cursor: pointer;
  span {
    text-decoration: underline;
    font-weight: 500;
  }
`;
 */
