import { useContext, useState } from "react";
import { PockemonContext } from "../Contexts/PokemonContext";
import { IDataPokemon, IPokemon } from "../Interfaces/interfaces";
import Paginate from "./Paginate";
import Card from "./Card";
import Modal from "./Modal";

function ListPokemon() {
  let pokemon: IDataPokemon = { name: "default" };
  const { dataPokemons } = useContext(PockemonContext);
  const [modalIsOpen, setModalIsOpen] = useState<Boolean>(false);
  const [pokemonSelected, setPokemonSelected] = useState<IDataPokemon>(pokemon);

  return (
    <div className="p-4">
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        pokemonSelected={pokemonSelected}
      />
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-2 mb-4">
          {dataPokemons &&
            dataPokemons.map((pokemon: IPokemon) => (
              <Card
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                setModalIsOpen={setModalIsOpen}
                setPokemonSelected={setPokemonSelected}
              />
            ))}
        </div>
        <div className="w-full flex justify-center">
          <Paginate />
        </div>
      </div>
    </div>
  );
}

export default ListPokemon;
