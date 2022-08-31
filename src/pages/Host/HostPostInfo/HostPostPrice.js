import styled from 'styled-components';
import variables from '../../../styles/variables';

function HostPostPrice({ storeRoomData }) {
  return (
    <HostPostPriceContainer>
      <HostPostPriceTitle>가격 정보를 입력해주세요.</HostPostPriceTitle>
      <HostPostPriceLabel>
        숙소 이름
        <HostPostPriceInput
          type="text"
          name="roomName"
          onChange={storeRoomData}
        />
      </HostPostPriceLabel>
      <HostPostPriceLabel>
        최대 수용 인원
        <HostPostPriceInput
          type="text"
          name="maxPerson"
          onChange={storeRoomData}
          placeholder="_____________(명)"
        />
      </HostPostPriceLabel>
      <HostPostPriceLabel>
        1박 기준 숙박비
        <HostPostPriceInput
          type="text"
          name="price"
          onChange={storeRoomData}
          placeholder="_____________(원)"
        />
      </HostPostPriceLabel>
    </HostPostPriceContainer>
  );
}

export default HostPostPrice;

const HostPostPriceContainer = styled.div`
  ${variables.flex('column')};
  margin-top: 50px;
  width: 500px;
`;

const HostPostPriceTitle = styled.h2`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0px 30px 0px;
`;

const HostPostPriceLabel = styled.label`
  ${variables.flex('column', 'center', 'flex-start')};
  margin: 0px 0px 20px 0px;
`;

const HostPostPriceInput = styled.input`
  width: 380px;
  height: 50px;
  margin-top: 10px;
  padding: 10px 30px 10px 30px;
  border: 1px solid #e0e0e0;
  border-radius: 15px;

  &:hover {
    box-shadow: 0px 0px 3px 1px #cccccc;
  }
`;
