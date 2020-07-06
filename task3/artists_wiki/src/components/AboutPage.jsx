import React from 'react';

export default function AboutPage() {
  return (
    <div className='about-grid'>
      <div className='about-col'>
        <h4 className='about-header'>About Page:</h4>
        <p className='about-text'>
          Artists Wiki is your resource for real and fake Artists facts! Enter
          to an Artist profile and see what other people think. Top edits by
          users will show on top. (Not yet implimanted)
        </p>
      </div>
      <div className='about-col'>
        <h4 className='about-header'>User Stories:</h4>
        <ul>
          <li>1. A User can always see the original Arist data.</li>
          <li>2. A user can add a new summary for an artist.</li>
          <li>3. A user can rate other users artist summary.</li>
        </ul>
      </div>
      <div className='about-col'>
        <h4>About Page:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor
          minus facere doloremque, vitae ducimus. Libero aut optio quod aperiam
          at tempore fugit neque et unde. Voluptas dolor aliquam illo. Lore
        </p>
      </div>
    </div>
  );
}
