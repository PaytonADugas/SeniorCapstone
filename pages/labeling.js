import React from 'react';
import Link from 'next/link';

class LabelingPage extends React.Component {

  render(){
    return(
      <div>
        <h1>This is the Labeling Page</h1>
        <Link href='/'>
          <a>Index</a>
        </Link>
      </div>
    );
  }
}

export default LabelingPage
