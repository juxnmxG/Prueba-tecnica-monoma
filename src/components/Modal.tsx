import { IDataPokemon } from "../Interfaces/interfaces";
import { background } from "../utils/BackgroundsByType";
import styled from "styled-components";

const ImgPockemon = styled.img`
  width: auto;
  height: 13rem;
  margin: 5px;
  position: absolute;
  left: calc(50% - 7rem);
  top: -8rem;
`;

interface Props {
  modalIsOpen: Boolean;
  setModalIsOpen: any;
  pokemonSelected: IDataPokemon;
}
function Modal({ modalIsOpen, setModalIsOpen, pokemonSelected }: Props) {
  const backgroundSelected = pokemonSelected.types
    ? background[pokemonSelected?.types[0]?.type?.name]
    : background["fire"];

  return (
    <div>
      {modalIsOpen && (
        <div className="fixed bg-[rgba(0,0,0,0.9)] flex justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full">
          <div className="relative w-full max-w-md max-h-full mt-16">
            <div
              className="relative bg-white rounded-lg shadow-xl shadow-white dark:bg-gray-700"
              style={{
                border: "1px solid " + backgroundSelected,
              }}
            >
              <div className="flex items-center justify-between p-5 rounded-t dark:border-gray-600">
                <h3
                  className="text-3xl uppercase font-medium text-gray-900 dark:text-white"
                  style={{
                    color: backgroundSelected,
                  }}
                >
                  {pokemonSelected.name}
                </h3>
                <button
                  onClick={() => setModalIsOpen(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  style={{
                    color: backgroundSelected,
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6 ">
                <div className="h-80 bg-white rounded-lg mt-16 relative">
                  <ImgPockemon src={pokemonSelected?.sprites?.front_default} />
                  <div className="flex gap-2 justify-between mt-16 px-16 pt-16 w-full">
                    <p
                      className="text-2xl text-bold rounded-full text-white-900 p-2"
                      style={{
                        backgroundColor: backgroundSelected,
                      }}
                    >
                      Peso: {pokemonSelected?.weight}
                    </p>
                    <p
                      className="text-2xl text-bold rounded-full text-white-900 p-2"
                      style={{
                        backgroundColor: backgroundSelected,
                      }}
                    >
                      Altura: {pokemonSelected?.height}
                    </p>
                  </div>
                  <div className="px-16 w-full mt-4">
                    {pokemonSelected?.stats?.map(
                      (stat, i) =>
                        i <= 5 && (
                          <div key={i} className="text-gray-600">
                            <p className="text-xl rounded-full font-black flex justify-center">
                              <span>{stat.stat.name}: </span>
                              <span
                                style={{
                                  color: backgroundSelected,
                                }}
                              >
                                {stat.base_stat}
                              </span>
                            </p>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
