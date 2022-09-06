import React, { useEffect, useState } from 'react';
import OverView from './components/OverView';
import styled from 'styled-components';

let count = 0;
let timer;

const MainWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 63px;
`;
const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      'https://1a27-61-98-242-60.jp.ngrok.io/places/?limit=40&offset=0',
      //http://10.58.0.100:3000/places/?limit=99999&offset=0
      {
        method: 'GET',
        header: { 'Content-Type': `application/json` },
      }
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result);
      });

    // 스크롤 이벤트 등록
    window.addEventListener('scroll', function () {
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

  const makeList = () => {
    count++;
    fetch(
      `https://1a27-61-98-242-60.jp.ngrok.io/places/?limit=40&offset=${count}`
    )
      .then(response => response.json())
      .then(result => {
        // 기존 데이터에 새로운 데이터 합치기
        setData(prevState => [...prevState, ...result]);
      });
  };

  //  1. 임시 - mock data 연결
  // {
  //   fetch('http://localhost:3000/data/maindata.json')
  //     .then(response => response.json())
  //     .then(result => {
  //       setData(result);
  //     });
  // }, []);

  return (
    <MainWrap id="wrap">
      {data.map((item, id) => (
        <OverView item={item} key={id} />
      ))}
    </MainWrap>
  );
};
export default Main;
