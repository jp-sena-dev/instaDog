import getApi from '../../helpers/getApi';

const getImages = async (quantity = 10) => {
  const URL = `https://dog.ceo/api/breeds/image/random/${quantity}`;
  const { message } = await getApi(URL);
  message.push('https://images.dog.ceo/breeds/dingo/n02115641_7355.jpg');
  return message;
};

export default getImages;
