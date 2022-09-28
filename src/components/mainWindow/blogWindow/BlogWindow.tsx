import * as React from 'react';
import './BlogWindow.css';

interface BlogWindowProps {
  language: string
}

function BlogWindow(props: BlogWindowProps) {
  return (
    <div className='blog-window-wrapper'>
      <a href='https://blog.birkheadc.me' target='_blank' rel='noreferrer'>Visit My Blog!</a>
    </div>
  );
}

export default BlogWindow;