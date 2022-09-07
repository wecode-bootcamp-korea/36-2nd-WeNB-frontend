import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../../config';
import OverView from './components/OverView';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

let count = 0;
let timer;

const Main = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch('http://3.34.160.18:3000/places/?limit=20&offset=0', {
      method: 'GET',
      header: { 'Content-Type': `application/json` },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result);
      });

    const makeList = () => {
      count++;

      fetch(`${API.place}${count}`)
        .then(response => response.json())
        .then(result => {
          // 기존 데이터에 새로운 데이터 합치기
          setData(prevState => [...prevState, ...result]);
        });
    };

    // 스크롤 이벤트 등록
    window.addEventListener('scroll', () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight + scrollTop >= clientHeight - 10) {
          makeList();
        }
      }, 400);
    });
  }, []);

  useEffect(() => {
    if (!location.search) {
      return;
    }
    fetch(`http://3.34.160.18:3000/places/search${location.search}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [location]);

  return (
    <>
      <Nav />
      <MainWrap id="wrap">
        {data.map((item, id) => (
          <OverView item={item} key={id} />
        ))}
      </MainWrap>
      <Footer />
    </>
  );
};

const MainWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 63px;
`;

export default Main;
