// initial state of the world.

const charTerrainValues = {
  ' ': { name: 'floor', walkable: true, breakable: false},
  '#': { name: 'wall', walkable: false, breakable: false},
};

const charObjectValues = {
  ' ': { name: 'none', walkable: true, breakable: false },
  'H': { name: 'brickWall', walkable: false, breakable: true,
         beingBroken: false },
};
// 10x25, 7 rows of air, one of grass, two of ground.

const simpleWorld = `
#########################
# #  #  #  #   #  #  #  #
#                       #
# #  #  #  #   #  #  #  #
#                       #
#                       #
# #  #  #  #   #  #  #  #
#                       #
# #  #  #  #   #  #  #  #
#########################
`;

const simpleWorldObjects = `
                         
      H  HH  H     HH H  
 H HH H      H           
 H HH        H     HH    
 H H  HH                 
 HH HH  HHHH  HHHH       
                         
   HH   HH       HHH  HH 
         H       H     H 
                         
`;

const mapObj = (world, values) => world
      .split(/\n/)
      .map(x => [...x])
      .map(x => x.map(y => values[y]))
      .slice(1,-1);

const worldObj = mapObj(simpleWorld, charTerrainValues);
const objectsObj = mapObj(simpleWorldObjects, charObjectValues);


export {worldObj, objectsObj};
