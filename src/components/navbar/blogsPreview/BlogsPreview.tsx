import * as React from 'react';
import { IBlurb } from '../../../api/AppData';
import './BlogsPreview.css';

interface IBlogsPreviewProps {
  blurbs: IBlurb[]
}

function BlogsPreview(props: IBlogsPreviewProps) {

  function renderBlurbs(): JSX.Element {
    if (props.blurbs.length < 1) {
      return (
        <div>
          <p>There doesn't seem to be anything here...</p>
        </div>
      );
    }

    return (
      <div>
        {props.blurbs.map(
          blurb => 
          <div className='blurbs-individual-wrapper' key={blurb.id}>
            <h4><a href={process.env.REACT_APP_BLOG_URL ? process.env.REACT_APP_BLOG_URL + '/articles/' + blurb.id : '#'}>{blurb.title}</a></h4>
            <p>{blurb.sub_title}</p>
            <p className='blurb-date'>{blurb.created.toString().substring(0, 10)}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='blurbs-wrapper'>
        <h3>My Recent Articles</h3>
        {renderBlurbs()}
        <a className='nav-link' href={process.env.REACT_APP_BLOG_URL ?? '#'}>Visit my blog</a>
    </div>
  );
}

export default BlogsPreview;