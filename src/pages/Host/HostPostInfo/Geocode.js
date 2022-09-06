//To do : Naver map API 이슈 해결 후 수정

/* import axios from 'axios';

const geocodingUrl =
  'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode';

export async function geocoding(query) {
  const coord = await axios
    .get(`${geocodingUrl}?query=${decodeURIComponent(query)}`, {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'X-NCP-APIGW-API-KEY-ID': '0vdubgubyk',
        'X-NCP-APIGW-API-KEY': 'IsPH4C72WZin2PSlAJMgYAQikQcQzU5NEjF1delV',
      },
    })
    .then(res => {
      // TODO: check if response is ok
      res.json();
    })
    .then(data => {
      if (data.addresses.length > 1) {
        console.log(`${query}에는 여러 주소가 있어요.`);
      } else if (data.addresses.length === 0) {
        console.log(`${query}에 해당되는 좌표가 없어요.`);
        return [-1, -1];
      }
      return [data.addresses[0].x, data.addresses[0].y];
    });

  return coord;
}
 */
