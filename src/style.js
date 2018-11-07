/**
 * this file contains the styles used throughout the web page. It's just a
 * javascript file, so everything below is a dictionary.
 * @author Luis Chavarriaga
 * @license MIT
 */

//----//----//

//media content
import mapBkg from '../src/media/map-backgrnd.jpg';
import africaMapBkg from '../src/media/africa_map_backgrnd.jpg';
import vintageMyspaceBkg from '../src/media/vintage-myspace-backgrnds.jpg';
import vidPoster from '../src/media/vidCover.png';
import vid from './media/stockDef.webm';

// constants
const duration = 300;

/**
 * This contains the section settings, mainly the backgrounds.
 */
const sectionConfig = {
    home: vidPoster,
    skills: mapBkg,
    projects: africaMapBkg,
    contact: vintageMyspaceBkg,
};

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

export {sectionConfig, videoPlayerConf, boxConf};
