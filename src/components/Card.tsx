import UsePokemon from "../Hooks/UsePokemon";
import { background } from "../utils/BackgroundsByType";
import styled from "styled-components";
import ImgPockeBall from "./../assets/pockeball.png";

const PockeBall = styled.img`
  width: auto;
  height: 10rem;
  margin: 5px;
  opacity: 0.5;
  position: absolute;
  left: -3rem;
  top: -2rem;
`;

interface Props {
  name: string;
  url: string;
  setModalIsOpen?: any;
  setPokemonSelected?: any;
}
function Card({ name, url, setModalIsOpen, setPokemonSelected }: Props) {
  const { dataPokemon } = UsePokemon(url);
  const backgroundSelected = background[dataPokemon?.types[0]?.type?.name];

  const handleClickCard = () => {
    setModalIsOpen(true);
    setPokemonSelected(dataPokemon);
  };

  return (
    <div
      onClick={handleClickCard}
      className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:scale-105 cursor-pointer"
      style={{
        border: "1px solid " + backgroundSelected,
      }}
    >
      <div
        className={`relative h-36 flex justify-center`}
        style={{
          backgroundColor: backgroundSelected,
        }}
      >
        <PockeBall src={ImgPockeBall} />
        {dataPokemon && dataPokemon?.sprites ? (
          <img
            className="h-full absolute"
            src={dataPokemon?.sprites?.front_default}
            alt="Sunset in the mountains"
          />
        ) : (
          "Cargando..."
        )}
        <h1 className="absolute bottom-1 right-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Peso: {dataPokemon ? dataPokemon?.weight : "Cargando..."}
          </span>
        </h1>
        <h1 className="absolute bottom-1 left-2">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
            {new Date().toDateString()}
          </span>
        </h1>
      </div>
      <div className="px-6 py-2">
        <h1
          className="font-bold text-3xl mb-0"
          style={{
            color: backgroundSelected,
          }}
        >
          {name}
        </h1>
      </div>
      <div className="px-6 pt-2 pb-2">
        {dataPokemon &&
          dataPokemon?.moves &&
          dataPokemon?.moves?.map(
            (moveItem: any, i: number) =>
              i <= 1 && (
                <span
                  key={i}
                  className={`inline-block rounded-full mr-2 text-sm font-semibold text-white-700 mb-2`}
                  style={{
                    color: backgroundSelected,
                  }}
                >
                  #{moveItem.move.name}
                </span>
              )
          )}
      </div>
    </div>
  );
}

export default Card;
