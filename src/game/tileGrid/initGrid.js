// initial state of the world.

const charTerrainValues = {
  ' ': 'air',
  '-': 'ground',
  '=': 'grass',
};
// 10x30, 7 rows of air, one of grass, two of ground.
const flatWorld = `
                              
                              
                              
                              
                              
                              
                              
==============================
------------------------------
------------------------------
`;

const worldObj = (world) => world
      .split(/\n/)
      .map(x => [...x])
      .map(x => x.map(y => charTerrainValues[y]))
      .slice(1,-1);

const flatWorldObj = worldObj(flatWorld);

export default flatWorldObj;
