export const getRickAndMortyCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => {
      if(!res.ok) throw 'Unable to load characters, try again!';

      return res.json();
    })
    .then(characters => {
      return characters.results.map(character => ({
        id: character.id,
        characterName: character.name,
        species: character.species,
        status: character.status,
        image: character.image
      }));
    });
};
