import React from 'react';
import ml5 from 'ml5';
import Sketch from 'react-p5';
import Link from 'next/link';

class NamingPage extends React.Component {
  state = {
    image: 'hello'
  }
  setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(parent)
  }
  draw = p5 => {
    p5.background(0);
    p5.image(p5.loadImage('./images/cat.jpeg'), 0,0);
  }

  render(){
    return(
      <div>
        <h1>This is the Naming Page</h1>
        <h2>Using version {ml5.version} of ml5</h2>
        <Sketch setup={this.setup} draw={this.draw} />
        <Link href='/'>
          <a>Index</a>
        </Link>
      </div>
    );
  }
}

export default NamingPage
