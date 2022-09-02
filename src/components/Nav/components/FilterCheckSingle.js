import React from 'react';
import styled from 'styled-components';

const FilterCheckSingle = ({ amenitiedInfo, addCheckedList, checkedList }) => {
  const checkedListId = checkedList.map(item => item.id);

  return (
    <FilterCheckSingleWrap>
      <FilterSingleCheckBox
        type="checkbox"
        checked={checkedListId.includes(amenitiedInfo.id)}
        onChange={e => {
          addCheckedList(amenitiedInfo, e.target.checked);
        }}
      />
      <FilterAmenitiedName>{amenitiedInfo.name}</FilterAmenitiedName>
    </FilterCheckSingleWrap>
  );
};
export default FilterCheckSingle;

const FilterSingleCheckBox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  accent-color: black;
`;

const FilterAmenitiedName = styled.p`
  font-size: 16px;
`;

const FilterCheckSingleWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;
