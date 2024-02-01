export interface Note {
  [index: number]: { name: string; url: string; }
}

interface Notes extends Array<Note> {}

export const NOTES: Note[] = [
  { 0: { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' } },
  { 1: { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' } },
  { 2: { name: 'Venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' } },
  { 3: { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' } },
  { 4: { name: 'Charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' } },
  { 5: { name: 'Charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' } },
  { 6: { name: 'Squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' } },
  { 7: { name: 'Wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' } },
  { 8: { name: 'Blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' } },
  { 9: { name: 'Caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' } },
  { 10: { name: 'Metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' } },
  { 11: { name: 'Butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' } },
  { 12: { name: 'Weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' } },
  { 13: { name: 'Kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' } },
  { 14: { name: 'Beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' } },
  { 15: { name: 'Pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' } },
  { 16: { name: 'Pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/' } },
  { 17: { name: 'Pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' } },
  { 18: { name: 'Rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/' } },

]
