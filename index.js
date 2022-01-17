fetch('https://rickandmortyapi.com/api/character/')
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));


showCharacters = characters => {
  const charactersDiv = document.querySelector('#characters');
  characters.forEach(character => {
    const characterElement = document.createElement('li');
    characterElement.innerHTML = 
             `<div class="character-list">
               <img src="${character.image}" alt="" />
               <p>${character.name}</p>
              </div>`;
    charactersDiv.append(characterElement);
  });
}


//function handleOnSubmitSearch(e) {
//   e.preventDefault();

//    const { currentTarget = {} } = e;
//    const fields = Array.from(currentTarget?.characters);
//    const fieldQuery = fields.find(field => field.name === 'q');

//    const value = fieldQuery.value || '';
//   const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

 //   updatePage({
 //     current: endpoint
//   });
//}

