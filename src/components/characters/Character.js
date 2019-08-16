import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, status, species, image }) {
  return (
    <section>
      <h3>{name}</h3>
      <h5>{status}</h5>
      <h5>{species}</h5>
      <img src={image} alt={`a picture of ${name} from Rick & Morty`} />
    </section>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
