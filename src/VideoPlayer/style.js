import {videoPlayerConf} from '../style.js';


/**
 * style for the VideoPlayer component.
 * includes the video and poster, which must be provided in the general
 * style of the app.
 * @author Luis Chavarriaga
 */
const videoStyle = {
    videoStyle: {
        position: "fixed",
        top: "50%",
        left: "50%",
        minWidth: "100%",
        minHeight: "100%",
        width: "auto",
        height: "auto",
        zIndex: "-100",
        transform: "translateX(-50%) translateY(-50%)",
        backgroundSize: "cover",
    },
    config: {
        poster: videoPlayerConf.poster,
        video: videoPlayerConf.video,
    },
};

export default videoStyle;
