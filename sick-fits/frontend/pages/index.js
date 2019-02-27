// import React from 'react';     // <<< next.js will take care of importing React for us

// class Home extends React.Component {
//   render () {
//     return <h1> Hey! </h1>
//   }
// }

import Link from 'next/link';

const Home =  props => (
  <div>
    <h1> Hey!! </h1>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default Home
