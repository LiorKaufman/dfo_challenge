import axios from 'axios';

export const getArtistName = async (name) => {
  try {
    const res = await axios.get(
      `http://theaudiodb.com/api/v1/json/1/search.php?s=${name}`
    );

    const { data } = res;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const sad = {};
