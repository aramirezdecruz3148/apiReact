import React from 'react';
import PropTypes from 'prop-types';

function Character({ characterName, status, species, image }) {
  return (
    <section>
      <h3>{characterName}</h3>
      <h5>{status}</h5>
      <h5>{species}</h5>
      <img src={image} alt={`a picture of ${characterName} from Rick & Morty`} />
    </section>
  );
}

Character.propTypes = {
  characterName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
