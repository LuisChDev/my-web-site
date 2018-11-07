import React from 'react';


// animated grid of elements
class GameGrid extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        ...dictlist,
      ]
    };
    this.shuffle = this.shuffle.bind(this);
  }


  render() {
    return (
      <Grid>
        {[...Array(Math
                   .ceil(this
                         .state
                         .items
                         .length/3))]
         .map((x,i) =>
              <Row>
                {[...Array(3)]
                 .map((y,j) => this
                      .state
                      .items[i*3 + j])
                 .map((z,k) =>
                      <Col xs={12} md={3}>
                        {z?
                         <Box
                           key={i*3 + k}
                           name={z['name']}
                           description={z['description']}
                           image={z['image']}
                           alt={z['alt']}
                           onClick={this.shuffle.bind(this, z['name'])}/>
                         :
                         <Box/>
                        }
                      </Col>
                     )}
              </Row>
             )}
      </Grid>
    );
  }
}

export default GameGrid;
