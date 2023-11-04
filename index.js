import React from 'react';
import { createRoot } from 'react-dom';
import { Header } from './header.js';
import { Footer } from './footer.js';
import {tasks} from './tasks.js';
import './index.css';

const root = createRoot(document.getElementById('root'));


function RenderData(data){
  return (
    <div className='divStyle'>
      <h1 className='headingStyle' contentEditable="true" spellCheck="false">{data.title}</h1>
      <h3 className='contentStyle' contentEditable="true" spellCheck="false">{data.content}</h3>
    </div>
  )
}

root.render(
  <div>
<Header />
<div className='renderTasks'>
  {tasks.map(RenderData)}
  {/* {tasks.map((data) => {
    return RenderData(data);
  })
  } */}
  </div>
<Footer />
</div>
)