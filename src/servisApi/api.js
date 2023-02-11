import axios from 'axios';

const API = async (search, page) => {
  // const { search } = this.state;
  const response = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=32799764-75091cc806dab77fae6a325d0&image_type=photo&orientation=horizontal&per_page=12`
  );
  // console.log(response);
  this.setState({ images: response.data.hits });
  console.log(response.data.totalHits);
};

export default API;
