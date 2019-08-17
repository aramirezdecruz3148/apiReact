export const getRickAndMortyCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => {
      if(!res.ok) throw 'Unable to load characters, try again!';

      return res.json();
    })
    .then(({ info, results }) => {
      const characters = results.map(character => ({
        id: character.id,
        characterName: character.name,
        species: character.species,
        status: character.status,
        image: character.image
      }));
      return {
        characters,
        totalPages: info.pages
      };
    });
};
