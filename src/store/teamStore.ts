import { defineStore } from 'pinia';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export const useTeamStore = defineStore('team', {
  state: () => ({
    team: [] as Pokemon[],
  }),
  actions: {
    addPokemon(pokemon: Pokemon) {
      if (this.team.length < 6 && !this.team.find(p => p.id === pokemon.id)) {
        this.team.push(pokemon);
      }
    },
    removePokemon(id: number) {
        console.log(id)
      this.team = this.team.filter(pokemon => pokemon.id !== id);
    },
  },
});
