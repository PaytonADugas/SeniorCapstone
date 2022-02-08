import React from 'react';
import Link from 'next/link';

class ModelsPage extends React.Component {

  render(){
    return(
      <div>
        <h1>This is the Models Page</h1>
        <Link href='/'>
          <a>Index</a>
        </Link>
      </div>
    );
  }
}

export default ModelsPage
