import {boxConf} from '../style.js';

/**
 * Box styles. God there's so many of these
 * was going to do these as a const but I should keep a consistent API instead
 * will most likely refactor in future
 */
const boxStyles = {
    boxImageStyle: {
        maxWidth: '50%',
        maxHeight: '90%',
        borderRadius: '50%',
        margin: '0 auto',
        display: 'block'
    },

    boxStyle: {
        maxWidth: '20vw',
        maxHeight: 'auto',
        background: 'rgba(255,255,255,0.5)'
    },

    titleStyle: {
        display: 'block',
        margin: '0 auto'
    },

    defaultStyle: {
        transition: `${boxConf.duration}ms ease-in-out`,
        height: '0',
        overflow: 'hidden'
    },

    transStyles: {
        entering: {
            height: '0',
            overflow: 'hidden',
            opacity: '0',
        },

        entered: {
            height: 'auto',
            opacity: '1'
        },

        exiting: {
            height: 'auto',
            opacity:'1'
        },

        exited: {
            height: '0',
            opacity: '0',
            overflow: 'hidden'
        }
    }
};

export default boxStyles;
