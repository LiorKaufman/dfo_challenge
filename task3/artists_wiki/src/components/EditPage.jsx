import React, { useState, useEffect } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

import linkRenderer from './LinkRenderer';
import noImage from '../assets/no-image.jpg';

marked.setOptions({
  gfm: true,
  tables: true,
  mangle: true,
  langPrefix: 'hljs langauge-',
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  renderer: linkRenderer,
});
hljs.registerLanguage('react', () => hljs.getLanguage('html'));

export default function EditPage({ item, toggleEdit }) {
  const [text, setText] = useState('');
  const [markdown, setMarkdown] = useState(marked(''));

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const loadMarkdown = async () => {
    const m = item.strBiographyEN;
    setText(m);
    setMarkdown(() => marked(m));
  };

  useEffect(() => {
    loadMarkdown();
  }, []);

  return (
    <div className='edit-page'>
      <div>
        <img
          className='artist-card-img'
          src={item.strArtistThumb ? `${item.strArtistThumb}/preview` : noImage}
          alt=''
        />
        <button className='btn btn-success m-2' onClick={toggleEdit}>
          {' '}
          Edit
        </button>
        <h3 className='artist-card-header'>Artist Name: {item.strArtist}</h3>
        <div
          id='preview'
          className='show'
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></div>
        <textarea
          name=''
          id='editor'
          value={markdown}
          onChange={(e) => handleChange(e)}
          className='show'
          rows={10}
        ></textarea>
      </div>
    </div>
  );
}
