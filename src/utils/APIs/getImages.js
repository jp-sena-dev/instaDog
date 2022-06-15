import getApi from '../../helpers/getApi';

const getImages = async (quantity = 10) => {
  const URL = `https://dog.ceo/api/breeds/image/random/${quantity}`;
  const { message } = await getApi(URL);
  return message;
};

export default getImages;
