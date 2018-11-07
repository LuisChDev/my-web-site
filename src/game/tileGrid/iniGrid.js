// initial state of the world.
// we'll first try with a 30x10 grid with the following structure:

const flatWorld = `
                              
                              
                              
                              
                              
                              
                              
------------------------------
------------------------------
------------------------------
`;

// seven rows of sky and three of solid ground.
// now we parse it.
// split by newlines
// then for each row, add an array and
// for each element, add a character to the array.
const worldObj = (world) => world.split(/\n/).map(x => [...x]).slice(1,-1);
const flatWorldObj = worldObj(flatWorld);

// and then we export it.
export default flatWorldObj;
