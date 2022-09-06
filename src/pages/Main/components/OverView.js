import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const OverView = props => {
  const { item } = props;

  const myDue1 = item.available_from;
  const myDue2 = item.available_until;

  const month1 = myDue1.split('-');
  const day1 = month1[2].split('T');

  const month2 = myDue2.split('-');
  const day2 = month2[2].split('T');

  const price = item.price;
  const myprice = price.split('.');

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
      <SlideWrap>
        <Slide item={item.image_urls} />
      </SlideWrap>
      <OverViewText>
        <HostTitle>{item.name}</HostTitle>
        <MyFont>{getMyKm(item.latitude, item.longitude)}km</MyFont>
        <MyDay>
          {month1[1]}월 {day1[0]}일~ {month2[1]}월 {day2[0]}일
        </MyDay>
        <div>
          <StrongWrap>
            <Storng>₩{myprice[0]}</Storng> /박
          </StrongWrap>
        </div>
        <Score>★ {item.average_rate}</Score>
      </OverViewText>
      {/* </Link> */}
    </OverViewWrap>
  );
};

const OverViewWrap = styled.div`
  width: 25%;
  cursor: pointer;

  img {
    width: 300px;
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
    border-radius: 20px;
   
}
  }
`;

const SlideWrap = styled.div`
  padding: 5px 10px;
`;

const StrongWrap = styled.div`
  margin-bottom: 25px;
  font-size: 21px;
`;

const MyFont = styled.div`
  color: grey;
  font-size: 19px;
`;

const MyDay = styled.div`
  color: grey;
  margin-bottom: 15px;
  font-size: 19px;
`;

const OverViewText = styled.div`
  font-size: 19px;
  line-height: 22px;
  position: relative;
  right: -21px;
`;

const HostTitle = styled.div`
  font-weight: bold;
  font-size: 23px;
`;

const Storng = styled.span`
  font-weight: bold;
`;

const Score = styled.span`
  position: absolute;
  top: 10px;
  right: 35px;
  font-size: 21px;
`;
export default OverView;
