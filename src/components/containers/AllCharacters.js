import React, { Component } from 'react';
import { getRickAndMortyCharacters } from '../services/rickAndMortyApi';
import Characters from '../characters/Characters';

export default class AllCharacters extends Component {
  state = {
    charactersArray: [],
    loading: true,
    error: null
  }

  fetchCharacters = () => {
    return getRickAndMortyCharacters()
      .then(characters => {
        this.setState({ charactersArray: characters, loading: false });
      })
      .catch(err => this.setState({ error: err, loading: true }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }


  render() {
    const { charactersArray, error, loading } = this.state;

    if(error) return <h1>Unable to load characters, try again!</h1>;
    if(loading) return <h1>Loading...</h1>;

    return (
      <>
        <Characters charactersArray={charactersArray}/>
      </>
    );
  }
}
