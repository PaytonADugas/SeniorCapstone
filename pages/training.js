import React from 'react';
import ml5 from 'ml5';
import Link from 'next/link';

class TrainingPage extends React.Component {

  render(){
    return(
      <div>
        <h1>This is the Training Page</h1>
        <h2>Using version {ml5.version} of ml5</h2>
        <Link href='/'>
          <a>Index</a>
        </Link>
      </div>
    );
  }
}

export default TrainingPage
