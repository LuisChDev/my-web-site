import React, {Component} from 'react';
import {StyledRow, StyledCell, StyledGame, GridWrapper} from './style.js';
import Player from './Sprite/Player/Player.js';
import Hammer from './Sprite/Hammer/Hammer.js';
import BrickWall from './Sprite/BrickWall/BrickWall.js';

import {worldObj, objectsObj} from './initGrid.js';

/**
* Main logic container of the app. Keeps track of the global variables.
*/
class Game extends Component {
  constructor() {
    super();
    this.state = {
      coinCount: 0,
      score: 0,
      time: 0,
      asteroidsCount: 0,
      isPaused: false,
      grid: worldObj,
      objects: objectsObj,

      playPos: [1, 1],
      playerPose: true,
      playerFace: "down",

      attacking: false,
    };
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  // this.handleKeypress = this.handleKeypress.bind(this);
  componentDidMount() {
    window.addEventListener("keypress", (event) => {
      let keyName = event.key;
      this.handleKeypress.call(this, keyName);
    });
  }

  render() {
    const {grid, objects,
           playPos, playerPose, playerFace, attacking} = this.state;
    return (
      <StyledGame>
        {/*terrain*/}
        <GridWrapper>
          {grid.map((x,i) =>
                    <StyledRow key={i}>
                      {x.map((y,j) =>
                             <StyledCell bkg={y} key={j}/>)}
                    </StyledRow>)}
        </GridWrapper>
        {/*objects*/}
        <GridWrapper>
          {objects.map((x,i) =>
                       <StyledRow key={i}>
                         {x.map((y,j) =>
                                (objects[i][j].name==="brickWall"
                                 ?<BrickWall pose={
                                   objects[i][j].beingBroken?"breaking":""
                                 } key={j} position={{x:j, y:i}}/>
                                 :""))}
                       </StyledRow>)}
        </GridWrapper>
        <Player playPos={playPos}
                pose={playerPose? "zig":"zag"}
                playerFace={playerFace}/>
        <Hammer playPos={playPos}
                pose={attacking?"attacking":(playerPose?"zig":"zag")}
                playerFace={playerFace}/>
      </StyledGame>
    );
  }

  handleKeypress(keyName) {
    if (keyName==='a' || keyName==='d') {
      this.movePlayerX(keyName==='d');
    } else if (keyName ==='w' || keyName==='s') {
      this.movePlayerY(keyName==='s');
    } else if (keyName === 'p') {
      this.attack();
    }
  }

  movePlayerX(right) {
    const {playPos, grid, objects, playerPose} = this.state;
    this.setState({
      playerFace: (right? "right":"left"),
    });
    const nextPos = [playPos[0], playPos[1] + (right? 1:-1)];
    if (grid[nextPos[0]][nextPos[1]].walkable &&
       objects[nextPos[0]][nextPos[1]].walkable) {
      this.setState({
        playPos: nextPos,
        playerPose: !playerPose,
      });
    }
  }

  movePlayerY(down) {
    const {playPos, grid, objects, playerPose} = this.state;
    this.setState({
      playerFace: (down? "down":"up"),
    });
    const nextPos = [playPos[0] + (down? 1:-1), playPos[1]];
    if (grid[nextPos[0]][nextPos[1]].walkable &&
        objects[nextPos[0]][nextPos[1]].walkable) {
      this.setState({
        playPos: nextPos,
        playerPose: !playerPose,
      });
    }
  }

  attack() {
    const {playPos, playerFace, objects} = this.state;
    // animation of the hammer
    this.setState({
      attacking: true,
    });
    setTimeout(() => {
      this.setState({

        attacking: false,
      });
    }, 300);

    // animation of the brick wall (if any)
    const frontPos = [playPos[0] +
                      (playerFace==='up'||playerFace==='down'
                       ?(playerFace==='up'
                          ?-1
                         :1)
                       :0),
                      playPos[1] +
                      (playerFace==='left'||playerFace==='right'
                       ?(playerFace==='right'
                         ?1
                         :-1)
                       :0)];
    if (objects[frontPos[0]][frontPos[1]].breakable) {
      // this.setState(prevState => {
      //   let newObjects = [...prevState.objects];
      //   newObjects[frontPos[0]][frontPos[1]].beingBroken = true;
      //   return {objects: newObjects};
      // });
      setTimeout(() => {
        this.setState(prevState => {
          let newObjects = [...prevState.objects];
          newObjects[frontPos[0]][frontPos[1]] = { name: 'none', walkable: true, breakable: false };
          return {objects: newObjects};
        });
      }, 300);
    }
  }

}

export default Game;
