import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import jump from 'jump.js';

/* video player*/
const VideoPlayer = (props) => {

    const videoStyle = {
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
    }

    return (
            <video loop muted autoPlay poster={props.poster}
                   className="fullscreen-bg_video"
                   style={videoStyle}>
            <source src={props.video} type="video/webm"/>
            </video>
    )
}

/* Navbar component. */
/* important and depressing tidbit: I can't seem to decouple the select function
 from the key, so for now, said key will have to be the item's id.*/
class Navibar extends Component {
    constructor() {
	      super();
	      this.state = {
	          activeKey: 1
	      };
    }

    handleSelect(selectedKey) {
	      // console.log(`selected ${selectedKey}`);
	      this.setState({
	          activeKey: selectedKey
	      });
        jump("#" + selectedKey);
        window.location.hash = selectedKey;
    }

    render() {
	      return (
	          <Navbar inverse fixedTop>
	              <Navbar.Header>
		                <Navbar.Brand>
		                    <a href='/'>𒀭Luisch</a>
		                </Navbar.Brand>
		                <Navbar.Toggle />
	              </Navbar.Header>

	              <Nav bsStyle="pills"
		                 activeKey={this.state.activeKey}
                     onSelect={this.handleSelect.bind(this)}>
                    {this.props.sections.map(section =>
                        <NavItem eventKey={section} href={"#" + section}>
                            {section}
                        </NavItem>
                    )}
	              </Nav>
          </Navbar>
	      );
    }
}

/* Easy react-bootstrap grid. polishing in the near future*/
/* render function in the props has this shape

*/
const autoGrid = (props) =>
        <Grid>
            {[...Array(Math.ceil(props.gridList.length/props.rowLength))].map((x, i) =>
                <Row>
                    {[...Array(3)].map((y, j) => (props.gridList[3*i + j]))
                                  .map((z, k) =>
                        <Col xs={12} md={3}>
                            {z?
                             props.renderFunction(z)
                             :""
                            }
                        </Col>
                    )}
                </Row>
            )}
        </Grid>
/* work in progress. stay tuned*/

export {VideoPlayer, Navibar, autoGrid};

// ADDENDUM: useless shit I insist on keeping

///* basic AJAX functionality */
//class Retriever extends Component {
//    constructor(props) {
//        super(props);
//
//        this.state = {
//            posts: []
//        }
//    }
//
//    componentDidMount() {
//        axios.get(`http://reddit.com/r/${this.props.subreddit}.json`)
//             .then(res => {
//                 const posts = res.data.data.children.map(obj => obj.data);
//                 this.setState({ posts });
//             });
//    }
//
//    render() {
//        return (
//            <div>
//            <h1>{`/r/{this.props.subreddit}`}</h1>
//            <ul>
//            {this.state.posts.map(post =>
//                <li key={post.id}>{post.title}</li>
//            )}
//            </ul>
//            </div>
//        );
//    }
//}
