import React, { Component } from 'react';
import { getRickAndMortyCharacters } from '../services/rickAndMortyApi';
import Characters from '../characters/Characters';

export default class AllCharacters extends Component {
  state = {
    charactersArray: [],
    loading: true,
    error: null, 
    page: 1, 
    totalPages: 1
  }

  fetchCharacters = () => {
    return getRickAndMortyCharacters(this.state.page)
      .then(({ characters, totalPages }) => {
        this.setState({ charactersArray: characters, loading: false, totalPages });
      })
      .catch(err => this.setState({ error: err, loading: true }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchCharacters();
    
  }

  increasePageCount = () => {
    this.setState(state => {
      return ({
        page: state.page + 1
      });
    });
  }

  decreasePageCount = () => {
    this.setState(state => {
      return ({
        page: state.page - 1
      });
    });
  }


  render() {
    const { charactersArray, error, loading, page, totalPages } = this.state;

    if(error) return <h1>Unable to load characters, try again!</h1>;
    if(loading) return <h1>Loading...</h1>;

    return (
      <>
        <span>
          <button onClick={this.decreasePageCount} disabled={page === 1}>⇦</button>
          <button onClick={this.increasePageCount} disabled={totalPages === page}>⇨</button>
        </span>
        <Characters charactersArray={charactersArray}/>
      </>
    );
  }
}
