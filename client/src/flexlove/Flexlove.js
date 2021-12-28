import './styles.css';
import React, { useEffect } from 'react';

function Flexlove() {
  //sessionStorage.setItem('myCat2', 'Tom2');
  
  useEffect(async() => {
    const lyrics = await fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime');
    const lyricsjson = await lyrics.json();
    console.log(lyricsjson);
  }, []);
  return (
    <div className="flexmain">
      <div>Flex1</div>
      {sessionStorage.getItem('myCat2')}
      {localStorage.getItem('myCat')}
      <div>Flex2</div>
      <div>Flex3</div>
      <div>Flex4</div>
      <div>Flex5</div>
      <div>Flex6</div>
      <div className="contentfits">
        Flex last
        <div>Grid Item1</div>
        <div>Grid Item2</div>
        <div>Grid Item3</div>
      </div>
    </div>
  );
}

export default Flexlove;