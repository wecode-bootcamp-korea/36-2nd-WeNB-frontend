const BASE_URL = 'http://3.34.160.18:3000';

const API = {
  place: `${BASE_URL}/places/?limit=20&offset=`,
  detail: `${BASE_URL}/places/`,
  review: `${BASE_URL}/places/reviews`,
  hostSignUp: `${BASE_URL}/host/register`,
  hostInfo: `${BASE_URL}/places/`,
  amenities: `${BASE_URL}/places/amenities`,
  amenitiesPost: `${BASE_URL}/places/amenity_bunches`,
  imagePost: `${BASE_URL}/places/images/?directory=Accommodation_image`,
  search: `${BASE_URL}/places/search`,
};

export default API;
