import * as React from 'react';
import { IBlurb } from '../../../api/AppData';
import './BlogWindow.css';

interface BlogWindowProps {
  blurbs: IBlurb[],
  language: string
}

function BlogWindow(props: BlogWindowProps) {

  function getBlurbs(): JSX.Element {
    if (props.blurbs.length < 1) {
      return (
        <div>
          <p>
            There doesn't seem to be anything here...
          </p>
        </div>
      );
    }

    return (
      <div>
        {props.blurbs.map(
          blurb => 
          <div className='blurbs-window-individual-wrapper' key={blurb.id}>
            <h4><a href={process.env.REACT_APP_BLOG_URL ? process.env.REACT_APP_BLOG_URL + '/articles/' + blurb.id : '#'}>{blurb.title}</a></h4>
            <p>{blurb.sub_title}</p>
            <p className='blurb-date'>{blurb.created.toString().substring(0, 10)}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='blog-window-wrapper'>
      <h1>My Blog</h1>
      <hr></hr>
      <div className='blog-window-body'>
        <a className='nav-link' href='https://blog.birkheadc.me' target='_blank' rel='noreferrer'>Read More</a>
        {getBlurbs()}
        <a className='nav-link' href='https://blog.birkheadc.me' target='_blank' rel='noreferrer'>Read More</a>
      </div>
    </div>
  );
}

export default BlogWindow;