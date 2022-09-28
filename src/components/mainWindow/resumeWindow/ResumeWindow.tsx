import * as React from 'react';
import './ResumeWindow.css';

interface ResumeWindowProps {
  language: string
}

function ResumeWindow(props: ResumeWindowProps) {
  return (
    <div className='resume-window-wrapper'>
      <a href='/resume/resume_en_swe.pdf' target='_blank' rel='noreferrer'>Download PDF</a>
    </div>
  );
}

export default ResumeWindow;