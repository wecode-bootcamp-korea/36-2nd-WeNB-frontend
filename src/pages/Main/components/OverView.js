import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const OverViewWrap = styled.div`
  width: 25%;
  cursor: pointer;

  & > div {
    padding: 5px 10px;
  }
  img {
    width: 300px;
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
    border-radius: 20px;
   
}
  }
`;

const StrongWrap = styled.div`
  margin-bottom: 25px;
`;

const MyFont = styled.div`
  color: grey;
`;

const MyDay = styled.div`
  color: grey;
  margin-bottom: 15px;
  font-size: 16px;
`;

const OverViewText = styled.div`
  font-size: 16px;
  line-height: 22px;
  position: relative;

  & > div:first-child {
    font-weight: bold;
    font-size: 17px;
  }

  & strong {
    font-weight: bold;
  }

  & > span {
    position: absolute;
    top: 10px;
    right: 17px;
  }
`;

const OverView = props => {
  const { item } = props;

  const myDue = item.available_from;

  const month = myDue.split('-');
  const day = month[2].split('T');

  /**
   * @param {string} lat1 기준이 되는 위도
   * @param {string} lon1 기준이 되는 경도
   * @param {string} lat2 목표 위치 위도
   * @param {string} lon2 목표 위치 경도
   * @returns {number} 기준과 목표의 거리를 반환(단위: KM)
   */
  function calcCrow(lat1, lon1, lat2, lon2) {
    let R = 6371; // km
    let dLat = toRad(lat2 - lat1);

    let dLon = toRad(lon2 - lon1);
    let lat1_ = toRad(lat1);
    let lat2_ = toRad(lat2);

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(lat1_) *
        Math.cos(lat2_);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return Math.round(d * 10);

    function toRad(Value) {
      return (Value * Math.PI) / 180;
    }
  }

  const getMyKm = (lat, lon) => {
    return calcCrow('37.5063317', '127.0536271', lat, lon);
  };

  return (
    <OverViewWrap>
      {/* <Link to={`../../main/${item.id}`}> */}
      <div>
        <Slide item={item.image_urls} />
      </div>
      <OverViewText>
        <div>{item.name}</div>
        <MyFont>{getMyKm(item.latitude, item.longitude)}km</MyFont>
        <MyDay>
          {month[1]}월 {day[0]}일~{day[0]}일
        </MyDay>
        <div>
          <StrongWrap>
            <strong>₩{item.price}</strong> /박
          </StrongWrap>
        </div>
        <span>★ {item.average_rate}</span>
      </OverViewText>
      {/* </Link> */}
    </OverViewWrap>
  );
};

export default OverView;
