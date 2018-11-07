import React from 'react';
import styleSection from 'style.js';

/**
 * Each section of the page. Static background.
 *
 */
const Section = (props) => {
    return (
        <div style={styleSection(props.itemId)}
        id={props.itemId}>
       {props.children}
        </div>
    );
};

export default Section;
