import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Title from './components/Title';
import Photos from './components/Photos';
import Contents from './components/Contents/Contents';
import Reviews from './components/Reviews';
import Map from './components/Map';
import HostInfo from './components/HostInfo';
import Guidelines from './components/Guidelines';
import Nav from '../../../src/components/Nav/Nav';

const Detail = () => {
  const [placeInfo, setPlaceInfo] = useState({
    id: '',
    name: '',
    price: '',
    max_capacity: '',
    latitude: '',
    longitude: '',
    available_from: '',
    available_until: '',
    max_days: '',
    image_urls: [''],
    reviews: [{}],
    amenities: [{}],
  });
  const [reviewModal, setReviewModal] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const params = useParams();
  const placeId = params.id;

  useEffect(() => {
    fetch(`http://3.34.160.18:3000/places/181`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setPlaceInfo(data[0]);
      });
  }, []);

  const handleSeeMoreReviews = () => {
    setReviewModal(!reviewModal);
    window.scroll(2100, 2100);
  };

  const handleXClickReviews = () => {
    setReviewModal(!reviewModal);
  };

  const handleSeeMoreMap = () => {
    setMapModal(!mapModal);
    window.scroll(0, 0);
  };

  const handleGoBackMap = () => {
    setMapModal(!mapModal);
    window.scroll(2800, 2800);
  };
  return (
    <>
      <Nav />
      <DetailMainContainer>
        <DetailSubContainer>
          <Title
            placeInfo={placeInfo}
            reviewModal={reviewModal}
            handleSeeMoreReviews={handleSeeMoreReviews}
            handleXClickReviews={handleXClickReviews}
            mapModal={mapModal}
            handleSeeMoreMap={handleSeeMoreMap}
            handleGoBackMap={handleGoBackMap}
          />
          <Photos homePhotos={placeInfo.image_urls} />
          <Contents placeInfo={placeInfo} placeId={placeId} />
          <Reviews
            placeInfo={placeInfo}
            reviewModal={reviewModal}
            handleSeeMoreReviews={handleSeeMoreReviews}
            handleXClickReviews={handleXClickReviews}
          />
          <Map
            placeInfo={placeInfo}
            mapModal={mapModal}
            handleSeeMoreMap={handleSeeMoreMap}
            handleGoBackMap={handleGoBackMap}
          />
          <HostInfo placeInfo={placeInfo} />
          <Guidelines />
        </DetailSubContainer>
      </DetailMainContainer>
    </>
  );
};

export default Detail;

const DetailMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #fff;
`;

const DetailSubContainer = styled.div`
  height: 100vh;
`;
