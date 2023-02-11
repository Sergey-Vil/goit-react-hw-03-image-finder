import axios from 'axios';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Buton/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    elements: 12,
    totalPage: 0,
    loader: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      try {
        const { search, page, elements } = this.state;
        this.setState({ loader: !this.state.loader });
        const response = await axios.get(
          `https://pixabay.com/api/?q=${search}&page=${page}&key=32799764-75091cc806dab77fae6a325d0&image_type=photo&orientation=horizontal&per_page=${elements}`
        );

        if (response.data.hits.length > 0) {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...response.data.hits],
              totalPage: Math.ceil(response.data.total / elements),
            };
          });
        }
      } catch (error) {
      } finally {
        this.setState({ loader: !this.state.loader });
      }
    }
  }

  handleSearch = e => {
    e.preventDefault();

    if (this.state.search !== e.target.elements.search.value) {
      this.setState({
        search: e.target.elements.search.value,
        images: [],
        page: 1,
      });
      return;
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} search={this.state.search} />
        {this.state.loader && <Loader />}
        <ImageGallery images={images} />
        {this.state.images.length === 0 ||
        this.state.totalPage === page ? null : (
          <Button onClick={this.handleLoadMore} loader={this.state.loader} />
        )}
      </div>
    );
  }
}
