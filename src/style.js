/**
 * this file contains the styles used throughout the web page. It's just a
 * javascript file, so everything below is a dictionary.
 * @author Luis Chavarriaga
 * @license MIT
 */

//----//----//

// main backgrounds
import mapBkg from '../src/media/map-backgrnd.jpg';
import africaMapBkg from '../src/media/africa_map_backgrnd.jpg';
import vintageMyspaceBkg from '../src/media/vintage-myspace-backgrnds.jpg';
import vidPoster from '../src/media/vidCover.png';
import vid from './media/stockDef.webm';

// backgrounds for the tiles
import bkGrass from '../src/media/backgrounds/grass.png';
import bkGround from '../src/media/backgrounds/ground.png';

// constants
const duration = 300;

/**
 * This contains the section settings, mainly the backgrounds.
 */
const sectionConf = {
    home: null,
    skills: mapBkg,
    projects: africaMapBkg,
    contact: vintageMyspaceBkg,
};

/**
 * sections for the navbar.
 */
const sections = [
  {
    text: "home",
    url: "#home",
    id: "home",
  },
  {
    text: "skills",
    url: "#skills",
    id: "skills",
  },
  {
    text: "projects",
    url: "#projects",
    id: "projects",
  },
  {
    text: "contact",
    url: "#contact",
    id: "contact",
  },
];

/**
 * box component configuration (just transition duration for now.)
 */
const boxConf = {
    duration: duration,
};

/**
 * project configuration for the video player.
 */
const videoPlayerConf = {
    poster: vidPoster,
    video: vid,
};

/**
 * tile background images.
 */
const tileGridConf = {
  grass: bkGrass,
  ground: bkGround,
};


export {sectionConf, videoPlayerConf, boxConf, tileGridConf, sections};
