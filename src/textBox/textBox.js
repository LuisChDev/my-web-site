import textBoxStyle from 'style.js';

//these text boxes are generic i guess
const TextBox = (props) => {
    return (
        <div style={textBoxStyle}>
        <p>{props.children}</p>
        </div>
    );
};

TextBox.defaultProps = {
    float: 'none',
    children: 'nam a sapien. vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.',
    margin: '10px',
    maxWidth: '10vw'
};
