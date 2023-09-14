import { useEffect, useState } from "react";
import axios from "axios";
import { IDataPokemon } from "../Interfaces/interfaces";
function UsePokemon(url: string) {
  
  let pokemon: IDataPokemon = { name: "default", types: [] };
  const [dataPokemon, setDataPokemon] = useState<IDataPokemon>(pokemon);

  const getPokemon = async () => {
    const { data } = await axios.get(url);
    setDataPokemon(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return { dataPokemon };
}

export default UsePokemon;
