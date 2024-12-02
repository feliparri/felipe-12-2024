import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

export const usePokemonApi = () => {
  const fetchPokemonList = async (limit: number, offset: number) => {
    const { data } = await axios.get(`${API_URL}pokemon?limit=${limit}&offset=${offset}`);
    return data.results;
  };

  const fetchPokemonDetails = async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  };

  const fetchEvolutionChain = async (id: number) => {
    const { data } = await axios.get(`${API_URL}evolution-chain/${id}`);
    return data;
  };

  return { fetchPokemonList, fetchPokemonDetails, fetchEvolutionChain };
};
