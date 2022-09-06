import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Photos({ homePhotos }) {
  const [photos, setPhotos] = useState([{ id: '', src: '' }]);

  useEffect(() => {
    fetch('./data/Detail/homePhotos.json')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <PhotoContainer>
      <InnerContainer>
        <PhotoLeft>
          <Photo className="photoLeft" src={homePhotos[0]} />
        </PhotoLeft>
        <PhotoRight>
          {photos.map(photo => (
            <PhotoOne key={photo.id}>
              <Photo src={photo.src} />
            </PhotoOne>
          ))}
          <PhotoButton>
            <PhotoIcon src="./images/Detail/icons/dots.png" alt="dotIcon" />
            사진 모두 보기
          </PhotoButton>
        </PhotoRight>
      </InnerContainer>
    </PhotoContainer>
  );
}

export default Photos;

const PhotoContainer = styled.div`
  width: 1143px;
  height: 545px;
  padding-top: 24px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 3px;
`;

const PhotoLeft = styled.div`
  width: 567.69px;
  height: 545px;

  .photoLeft {
    border-radius: 10px 0 0 10px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const PhotoRight = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
  overflow: hidden;
  border-radius: 0 10px 10px 0;
`;

const PhotoOne = styled.div`
  width: 283.83px;
  height: 272.5px;
  object-fit: cover;
  cursor: pointer;
`;

const PhotoButton = styled.button`
  position: relative;
  bottom: 65px;
  left: 410px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 140px;
  margin: 0;
  padding: 8px 0;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const PhotoIcon = styled.img`
  height: 14px;
  width: 14px;
`;
