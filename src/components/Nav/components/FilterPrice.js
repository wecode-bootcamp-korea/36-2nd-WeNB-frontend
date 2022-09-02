import React, { useState } from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';

const FilterPrice = ({
  fixedMinPrice,
  fixedMaxPrice,
  setRangeMinValue,
  rangeMinValue,
  setRangeMaxValue,
  rangeMaxValue,
}) => {
  const priceGap = 10000;
  const [rangeMinPercent, setRangeMinPercent] = useState(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

  const prcieRangeMinValueHandler = e => {
    setRangeMinValue(parseInt(e.target.value));
  };

  const prcieRangeMaxValueHandler = e => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } else {
      setRangeMinPercent((rangeMinValue / fixedMaxPrice) * 100);
      setRangeMaxPercent(100 - (rangeMaxValue / fixedMaxPrice) * 100);
    }
  };

  return (
    <FilterPriceWrap>
      <FiterSingleTitle>가격 범위</FiterSingleTitle>
      <FilterPriceText>평균 1박 요금은 ₩155,554입니다.</FilterPriceText>
      <FilterPriceViewlWrap>
        <FilterPriceControlWrap>
          <FilterPriceSlide>
            <FilterPriceSlideInner
              rangeMinPercent={rangeMinPercent}
              rangeMaxPercent={rangeMaxPercent}
            />
          </FilterPriceSlide>
          <FilterPriceRangeWrap>
            <FilterPriceRangeMin
              type="range"
              min={fixedMinPrice}
              max={fixedMaxPrice - priceGap}
              step="1000"
              value={rangeMinValue}
              onChange={e => {
                prcieRangeMinValueHandler(e);
                twoRangeHandler();
              }}
            />
            <FilterPriceRangeMax
              type="range"
              min={fixedMinPrice + priceGap}
              max={fixedMaxPrice}
              step="1000"
              value={rangeMaxValue}
              onChange={e => {
                prcieRangeMaxValueHandler(e);
                twoRangeHandler();
              }}
            />
          </FilterPriceRangeWrap>
        </FilterPriceControlWrap>

        <FilterPriceInputWrap>
          <MinMaxValueWrap>
            <MinMaxValueText>최저 요금</MinMaxValueText>
            <MinMaxPriceWrap>
              <MinMaxWonSign>₩</MinMaxWonSign>
              <MinMaxPriceText>
                {rangeMinValue.toLocaleString()}
              </MinMaxPriceText>
            </MinMaxPriceWrap>
          </MinMaxValueWrap>
          <MinMaxPartingLine />
          <MinMaxValueWrap>
            <MinMaxValueText>최저 요금</MinMaxValueText>
            <MinMaxPriceWrap>
              <MinMaxWonSign>₩</MinMaxWonSign>
              <MinMaxPriceText>
                {rangeMaxValue.toLocaleString()}
              </MinMaxPriceText>
            </MinMaxPriceWrap>
          </MinMaxValueWrap>
        </FilterPriceInputWrap>
      </FilterPriceViewlWrap>
    </FilterPriceWrap>
  );
};

export default FilterPrice;
const FilterPriceWrap = styled.div`
  padding: 32px 0 50px 0;
  border-bottom: 1px solid #e8e8e8;
`;

const FiterSingleTitle = styled.p`
  font-size: 22px;
  padding-bottom: 24px;
`;

const FilterPriceText = styled.p`
  padding: 8px 0 40px 0;
  font-size: 16px;
  color: #717171;
`;

const FilterPriceViewlWrap = styled.div`
  ${variables.flex('column', null, 'center')}
  margin-top: 24px;
`;

const FilterPriceControlWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
`;

const FilterPriceSlide = styled.div`
  position: relative;
  height: 4px;
  width: 650px;
  border-radius: 10px;
  background-color: #dddddd;
`;

const FilterPriceSlideInner = styled.div`
  position: absolute;
  left: ${props => props.rangeMinPercent}%;
  right: ${props => props.rangeMaxPercent}%;
  height: 4px;
  border-radius: 10px;
  background-color: #b0b0b0;
`;

const FilterPriceRangeWrap = styled.div`
  position: relative;
`;

const FilterPriceRangeMin = styled.input`
  position: absolute;
  top: -9px;
  right: -2px;
  height: 7px;
  width: 100%;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    pointer-events: auto;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 50%;
    background-color: #b0b0b0;
    pointer-events: auto;
    -moz-appearance: none;
  }
`;

const FilterPriceRangeMax = styled(FilterPriceRangeMin)``;

const FilterPriceInputWrap = styled.div`
  display: flex;
`;

const MinMaxValueWrap = styled.div`
  ${variables.flex('column', null, null)}
  width: 306px;
  height: 52px;
  margin: 0 20px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
`;

const MinMaxPartingLine = styled.div`
  width: 15px;
  margin-bottom: 25px;
  border-bottom: 1px solid black;
`;

const MinMaxValueText = styled.p`
  padding: 10px 0px 0px 10px;
  font-size: 12.5px;
  text-align: start;
  color: #b0b0b0;
`;

const MinMaxWonSign = styled.p`
  font-size: 16px;
  margin-right: 5px;
`;

const MinMaxPriceText = styled.p`
  font-size: 16px;
`;

const MinMaxPriceWrap = styled.div`
  display: flex;
  padding: 5px 0 0 10px;
`;
