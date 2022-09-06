const BASE_URL = 'http://10.58.2.70:3000';

const API = {
  place: `${BASE_URL}/places`,
  review: `${BASE_URL}/places/reviews`,
  amenities: `${BASE_URL}/places/amenities`,
  amenitiesPost: `${BASE_URL}/places/amenity_bunches`,
  imagePost: `${BASE_URL}/places/images/?directory=Accommodation_image`,
  search: `${BASE_URL}/places/search`,
};

export default API;
