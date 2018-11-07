import {sectionConfig} from '../style.js';

/**
 * Section styles
 * call as function, include itemId of section to choose proper bkg
 */
function styleSection(bkgPic) {
    return ({
        backgroundImage: "url(" + sectionConfig[bkgPic] + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "auto",
        minHeight: "100vh",
    });
}
