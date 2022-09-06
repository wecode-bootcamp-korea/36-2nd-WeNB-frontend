import React from 'react';
import styled from 'styled-components';

function ContentAmenitiesInfo({ amenities }) {
  return (
    <AmenitiesContainer>
      <AmenetiesTitle>숙소 편의시설</AmenetiesTitle>
      <Amenities>
        {amenities.map(amenity => (
          <Amenity key={amenity.id}>
            <Icon
              src={amenity.icon_image_url}
              className="icons"
              alt={amenity.name}
            />
            <AmenityName>{amenity.name}</AmenityName>
          </Amenity>
        ))}
      </Amenities>
      <ButtonContainer>
        <Button>편의시설 {amenities.length}개 모두 보기</Button>
      </ButtonContainer>
    </AmenitiesContainer>
  );
}

export default ContentAmenitiesInfo;

const AmenitiesContainer = styled.div`
  height: 340px;
  padding: 48px 0;
  border-bottom: 0.8px solid #95a5a6;
`;

const AmenetiesTitle = styled.h2`
  margin: 0;
  padding-bottom: 24px;
  font-size: 22px;
  font-weight: 500;
`;

const Amenities = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Amenity = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 14px;
`;

const Icon = styled.img`
  position: relative;
  bottom: 2px;
  width: 22px;
  height: 22px;
  margin-right: 16px;
`;

const AmenityName = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
  height: 48px;
`;

const Button = styled.button`
  padding: 13px 23px;
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;
