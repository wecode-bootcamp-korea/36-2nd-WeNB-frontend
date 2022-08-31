import React, { useState } from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';

function HostPostButton({ list, storeFacilities }) {
  const [imageToggle, setImageToggle] = useState(false);

  const changeToggle = () => {
    setImageToggle(!imageToggle);
  };
  return (
    <HostPostRoomSectionFacilitiesButton
      key={list.id}
      onClick={({ target }) => {
        storeFacilities(target);
        changeToggle();
      }}
      toggle={imageToggle}
    >
      <HostPostRoomSectionFacilitiesImage src={list.icon_image_url} alt="" />
      {list.name}
    </HostPostRoomSectionFacilitiesButton>
  );
}

export default HostPostButton;

const HostPostRoomSectionFacilitiesButton = styled.button`
  ${variables.flex('column')};
  width: 150px;
  height: 100px;
  margin: 0px 8px 16px 8px;
  font-weight: 900;
  background-color: ${({ theme }) => theme.White};
  border: ${({ toggle }) =>
    !toggle ? '1px solid #e0e0e0;' : '2px solid #4a4a4a;'}
  border-radius: 10px;

  &:hover {
    border: 2px solid #4a4a4a;
  }
`;

const HostPostRoomSectionFacilitiesImage = styled.img`
  border-radius: 50%;
`;
