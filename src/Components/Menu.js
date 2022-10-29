import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="red" handleClick={props.addblocks}/>
          <Color color="pink" handleClick={props.addblocks}/>
          <Color color="blue" handleClick={props.addblocks}/>
          <Color color="green" handleClick={props.addblocks}/>
      </div>
    );
}

export default Menu;