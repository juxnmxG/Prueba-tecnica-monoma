import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { IPokemon } from "../Interfaces/interfaces";
import { PaginateContext } from "./PaginateContext";

interface PokemonContextType {
  dataPokemons: IPokemon[] | null;
}

export const PockemonContext = createContext<PokemonContextType>({
  dataPokemons: null,
});
function PokemonProvider({ children }: any) {
  let urlPokemons = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  const { itemsPerPage, currentPage, setCountItems } =
    useContext(PaginateContext);
  const [dataPokemons, setDataPokemons] = useState<IPokemon[] | null>(null);
  const [dataPokemonsTemp, setDataPokemonsTemp] = useState<IPokemon[]>([]);

  const getPokemons = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(urlPokemons);

      const pokemons: IPokemon[] = results;
      setCountItems(pokemons.map((_, i: number) => i + 1));
      setDataPokemonsTemp(pokemons);
      setDataPokemons(pokemons.slice(currentPage, currentPage + itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (dataPokemonsTemp?.length > 0) {
      const temp: IPokemon[] = [...dataPokemonsTemp];
      setDataPokemons(temp.slice(currentPage, currentPage + itemsPerPage));
    }
  }, [currentPage]);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PockemonContext.Provider value={{ dataPokemons }}>
      {children}
    </PockemonContext.Provider>
  );
}

export default PokemonProvider;
