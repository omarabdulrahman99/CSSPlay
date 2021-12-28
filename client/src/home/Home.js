import React, {Component} from 'react';
import {Link} from 'react-router-dom';


function Home () {
  return(
  	<div>
       <div>
        <Link to="/center">
         Centering
        </Link>
        <Link to="/flexlove">
         Flexlove
        </Link>
      </div>
  	</div>
  	)
}

export default Home;