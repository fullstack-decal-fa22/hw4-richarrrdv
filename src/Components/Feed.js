import React, { useState } from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [blocks, setblocks] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = blocks.map((blocks) => <Block color={blocks}/>); // TODO: edit this variable

    const addblocks = (color) => {setblocks([color, ...blocks])}
    return (
        <div>
            <Menu addblocks={addblocks}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;