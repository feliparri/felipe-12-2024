import { defineStore } from 'pinia';
export const useTeamStore = defineStore('team', {
    state: () => ({
        team: [],
    }),
    actions: {
        addPokemon(pokemon) {
            if (this.team.length < 6 && !this.team.find(p => p.id === pokemon.id)) {
                this.team.push(pokemon);
            }
        },
        removePokemon(id) {
            console.log(id);
            this.team = this.team.filter(pokemon => pokemon.id !== id);
        },
    },
});
