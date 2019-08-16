import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ charactersArray }) {
  const characterList = charactersArray.map(({ id, characterName, status, species, image }) => (
    <li key={id}>
      <Character 
        characterName={characterName}
        status={status}
        species={species}
        image={image}
      />
    </li>
  ));
  return (
    <ul>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  charactersArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    characterName: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string
  })).isRequired
};

export default Characters;
