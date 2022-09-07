import React, { useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import API from '../../../config';
import styled from 'styled-components';
import variables from '../../../styles/variables';

function HostPostImage() {
  const [imageFileList, setImageFileList] = useState([]);

  const upload = useRef();

  const handleClick = () => {
    upload.current.click();
  };

  const storeImage = ({ target }) => {
    const image = target.files;
    let imageList = [...imageFileList];

    for (let i = 0; i < image.length; i++) {
      imageList.push(image[i]);
    }
    setImageFileList(imageList);
  };

  const deleteImage = file => {
    const filteredList = [...imageFileList].filter(item => item !== file);
    setImageFileList(filteredList);
  };

  /* let fileData = new FormData();
  for (let i = 0; i < imageFileList.length; i++) {
    fileData.append(`fileList_${i}`, imageFileList[i]);
  }

  for (let key of fileData.keys()) {
    console.log(key);
  }
  for (let values of fileData.entries()) {
    console.log(values);
  } */
  /* console.log(Object.keys(fileData)); */
  const placeID = useParams();
  const navigate = useNavigate();
  console.log(placeID);
  const imageFilePost = () => {
    const fileData = new FormData();

    for (let i = 0; i < imageFileList.length; i++) {
      fileData.append(`fileList_${i}`, imageFileList[i]);
    }
    fileData.append('place_id', Number(placeID.placeID));

    fetch(`${API.imagePost}`, {
      method: 'POST',
      headers: {
        'Content-Type': `Multipart/form-data`,
        authorization: localStorage.getItem('TOKEN'),
      },
      body: fileData,
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          navigate('/');
        }
      });
  };

  return (
    <HostPostRoomContainer>
      <HostPostRoomBackGround>
        <HostPostRoomBackGroundTitle>
          숙소 이미지를 등록해주세요.
        </HostPostRoomBackGroundTitle>
      </HostPostRoomBackGround>
      <HostPostRoomSectionContainer>
        <HostPostRoomSectionIntro>
          <HostPostRoomSectionIntroLink to="/">
            ⇱ 나가기
          </HostPostRoomSectionIntroLink>
          <HostPostRoomSectionIntroTitle>
            숙소의 이미지를 등록해주세요.
          </HostPostRoomSectionIntroTitle>
        </HostPostRoomSectionIntro>
        <HostPostRoomSectionRegistrationWrap>
          <HostPostRoomSectionImageFiles>
            <HostPostRoomSectionImageFilesTitle>
              이미지를 여기에 끌어다 놓으세요.
            </HostPostRoomSectionImageFilesTitle>
            <HostPostRoomSectionIcon className="fa-solid fa-images" />
            <div onChange={storeImage}>
              <HostPostRoomSectionImageFilesInput
                type="file"
                ref={upload}
                accept="image/*"
                multiple
              />
            </div>
            <HostPostRoomSectionImageFilesTitleUploadButton
              onClick={handleClick}
            >
              기기에서 업로드
            </HostPostRoomSectionImageFilesTitleUploadButton>
          </HostPostRoomSectionImageFiles>
          <HostPostRoomSectionImagesWrap>
            {imageFileList.map((list, idx) => (
              <HostPostRoomSectionImagesBox key={idx}>
                <HostPostRoomDeleteWrap onClick={() => deleteImage(list)}>
                  <i className="fa-solid fa-trash-can" />
                </HostPostRoomDeleteWrap>
                <HostPostRoomSectionImagesItem
                  src={URL.createObjectURL(list)}
                  alt=""
                />
              </HostPostRoomSectionImagesBox>
            ))}
          </HostPostRoomSectionImagesWrap>
        </HostPostRoomSectionRegistrationWrap>
        <HostPostRoomSectionRegistration>
          <HostPostRoomSectionRegistrationButton onClick={imageFilePost}>
            등록
          </HostPostRoomSectionRegistrationButton>
        </HostPostRoomSectionRegistration>
      </HostPostRoomSectionContainer>
    </HostPostRoomContainer>
  );
}

export default HostPostImage;

const HostPostRoomContainer = styled.div`
  ${variables.flex('row', 'space-between', 'center')};
  width: 100%;
  height: 100vh;
  background-color: #fff0f0;
  box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.GrayHavy};
`;

const HostPostRoomBackGround = styled.div`
  ${variables.flex('column')};
  width: 50%;
  height: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.White};
  background: linear-gradient(180deg, purple, hotpink, #58c, hotpink);
`;
const HostPostRoomBackGroundTitle = styled.h1`
  line-height: 100%;
`;

const HostPostRoomSectionContainer = styled.section`
  ${variables.flex('column', 'space-between', '')};
  width: 50%;
  height: 100%;
  transition: 0.1s;
  background-color: ${({ theme }) => theme.White};
`;

const HostPostRoomSectionIntro = styled.div`
  ${variables.flex('row-reverse', 'space-around')}
  position: relative;
  width: 100%;
  height: 250px;
  box-shadow: 0px 1px 2px 0px #d0d0d0;
`;
const HostPostRoomSectionIntroLink = styled(Link)`
  position: absolute;
  margin: 30px 30px 0px 0px;
  top: 0;
  right: 0;
  text-decoration: none;
  font-size: 25px;
  color: black;
  background-color: rgba(0, 0, 0, 0.01);
  border: none;
  cursor: pointer;
`;
const HostPostRoomSectionIntroTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 10%;
  font-size: 30px;
  font-weight: 900;
  white-space: pre-wrap;
`;

const HostPostRoomSectionRegistrationWrap = styled.div`
  ${variables.flex('column', 'flex-start')};
  width: 100%;
  height: 600px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const HostPostRoomSectionRegistration = styled.div`
  ${variables.flex('row', 'flex-end')}
  width: 100%;
  height: 150px;
  background-color: #fff0f0;
  box-shadow: 0px -1px 2px 0px #d0d0d0;

  &:hover {
    background-color: ${({ theme }) => theme.White};
  }
`;
const HostPostRoomSectionRegistrationButton = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #e53170;
  cursor: pointer;
`;
const HostPostRoomSectionImageFiles = styled.div`
  position: relative;
  ${variables.flex('column')}
  width: 350px;
  height: 300px;
  margin: 100px 0px 50px 0px;
  border: 2px dotted #909090;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;
const HostPostRoomSectionImageFilesTitle = styled.h2`
  position: absolute;
  top: 0;
  margin: 20px 0px 20px 0px;
  font-size: 20px;
  font-weight: 600;
`;
const HostPostRoomSectionImageFilesInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 350px;
  height: 300px;
  opacity: 0;
  cursor: pointer;
`;

const HostPostRoomSectionImageFilesTitleUploadButton = styled.button`
  margin: 100% 0px 30px 0px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;
const HostPostRoomSectionIcon = styled.i`
  position: absolute;
  font-size: 50px;
`;

const HostPostRoomSectionImagesWrap = styled.div`
  ${variables.flex()}
  width: 600px;
  flex-wrap: wrap;
  width: 550px;
`;

const HostPostRoomSectionImagesBox = styled.div`
  position: relative;
`;

const HostPostRoomSectionImagesItem = styled.img`
  margin: 0px 10px 20px 10px;
  width: 250px;
  height: 250px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.GrayHavy};
`;

const HostPostRoomDeleteWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  ${variables.flex()}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.01;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
`;
