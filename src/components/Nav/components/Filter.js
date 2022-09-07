import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterCheckSingle from './FilterCheckSingle';
import FilterPrice from './FilterPrice';
import variables from '../../../styles/variables';
import { useNavigate } from 'react-router-dom';

const Filter = ({ onSetIsFilterVisible }) => {
  const [checkedList, setCheckedList] = useState([]);
  const [amenitied, setAmenitiedInfo] = useState([]);
  const fixedMaxPrice = 1000000;
  const fixedMinPrice = 10000;
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice);
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://3.34.160.18:3000/places/amenities', {
      method: 'GET',
      header: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(result => setAmenitiedInfo(result));
  }, []);

  const addCheckedList = (amenitiedInfo, checked) => {
    checked
      ? setCheckedList([...checkedList, { ...amenitiedInfo }])
      : setCheckedList(
          checkedList.filter(check => {
            return check.id !== amenitiedInfo.id;
          })
        );
  };

  const ckedListReset = () => {
    setCheckedList([]);
  };

  let amenitiedIdFetch = '';
  checkedList.forEach(item => {
    amenitiedIdFetch += `&amenity_ids=` + item.id;
  });

  return (
    <FilterWrap>
      <FilterContainer>
        <FiterTopWrap>
          <FilterExitBtn onClick={() => onSetIsFilterVisible()}>
            ✕
          </FilterExitBtn>
          필터
        </FiterTopWrap>
        <FilterMainWrap>
          <FilterPrice
            fixedMinPrice={fixedMinPrice}
            fixedMaxPrice={fixedMaxPrice}
            setRangeMinValue={setRangeMinValue}
            rangeMinValue={rangeMinValue}
            setRangeMaxValue={setRangeMaxValue}
            rangeMaxValue={rangeMaxValue}
          />
          <FilterAmenitiesWrap>
            <FiterSingleTitle>편의시설</FiterSingleTitle>
            <FilterCheckWrap>
              {amenitied.map(info => {
                return (
                  <FilterCheckSingle
                    key={info.id}
                    amenitiedInfo={info}
                    addCheckedList={addCheckedList}
                    checkedList={checkedList}
                  />
                );
              })}
            </FilterCheckWrap>
          </FilterAmenitiesWrap>
        </FilterMainWrap>
        <FilterBottomWrap>
          <AllCheckRemove onClick={ckedListReset}>전체 해제</AllCheckRemove>
          <FilterBtn
            onClick={() => {
              const searchQuery = `/?minimum_price=${rangeMinValue}&maximum_price=${rangeMaxValue}${amenitiedIdFetch}`;
              navigate(searchQuery);
              onSetIsFilterVisible();
            }}
          >
            필터링된 숙소 찾기
          </FilterBtn>
        </FilterBottomWrap>
      </FilterContainer>
    </FilterWrap>
  );
};

export default Filter;

const FilterWrap = styled.div`
  ${variables.flex('column', 'center', 'center')}
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  z-index: 16;
`;

const FilterContainer = styled.div`
  ${variables.flex('column', 'space-between', null)}
  width: 780px;
  height: 93vh;
  max-height: 1200px;
  background-color: white;
`;

const FiterTopWrap = styled.div`
  ${variables.flex('row', 'center', 'center')}
  position: relative;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px;
  font-weight: bold;
`;

const FilterExitBtn = styled.p`
  position: absolute;
  left: 24px;
  font-size: 18px;
  cursor: pointer;
`;

const FilterMainWrap = styled.div`
  overflow-y: scroll;
  padding: 0 24px;
`;

const FiterSingleTitle = styled.p`
  font-size: 22px;
  padding-bottom: 24px;
`;

const FilterAmenitiesWrap = styled.div`
  padding: 32px 0;
`;

const FilterCheckWrap = styled.div`
  height: 560px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
`;

const FilterBottomWrap = styled.div`
  ${variables.flex('row', 'space-between', 'center')}
  height: 81px;
  padding: 0 24px;
  border-top: 1px solid #e8e8e8;
`;

const AllCheckRemove = styled.button`
  border: none;
  background-color: white;
  font-size: 16px;
  text-decoration: underline;
`;

const FilterBtn = styled(AllCheckRemove)`
  width: 195px;
  height: 48px;
  border-radius: 10px;
  background-color: black;
  color: white;
  text-decoration: none;
`;
