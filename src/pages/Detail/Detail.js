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
import Footer from '../../components/Footer/Footer';
import API from '../../config';

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
  console.log('placeInfo', placeInfo);
  const [reviewModal, setReviewModal] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const params = useParams();
  const placeId = params.id;
  console.log('placeId', placeId);
  useEffect(() => {
    fetch(`${API.detail}${placeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setPlaceInfo(data[0]);
      });
  }, [placeId]);

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
        <Footer />
      </DetailMainContainer>
    </>
  );
};

export default Detail;

const DetailMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1143px;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  border: 0;
  background-color: #fff;
`;

const DetailSubContainer = styled.div`
  height: 100vh;
`;
