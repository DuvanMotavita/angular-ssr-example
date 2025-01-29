const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;
(async () => {
  //Gerating pages and pokemon ids
  const fs = require("fs");
  const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
  const pokemonPages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
  let fileContent =
    pokemonIds.map((id) => `/pokemon/${id}`).join("\n") +
    "\n" +
    pokemonPages.map((page) => `/pokemon/page/${page}`).join("\n");
  //Pokemon by name
  const pokemonListName = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`
  ).then((res) => res.json());
  fileContent += "\n";
  fileContent += pokemonListName.results
    .map((pokemon) => `/pokemon/${pokemon.name}`)
    .join("\n");
  fs.writeFileSync("routes.txt", fileContent);
  console.info("Routes.txt genareted");
})();
