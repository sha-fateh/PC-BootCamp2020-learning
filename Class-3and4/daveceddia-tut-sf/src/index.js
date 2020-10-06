import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Hi, Greet} from './App';
import Yolo from './hello';

import * as serviceWorker from './serviceWorker';
import {MediaCard, Gate} from './mediaCard';

ReactDOM.render(
  <React.StrictMode>
    <Hi />
    <Greet name="savannah"/>
    <Yolo name="Aena"/>
    <MediaCard title="The Title" body="This is the body" imageURL="https://images.freeimages.com/images/small-previews/9d6/philippine-coins-1483943.jpg"/>
    <Gate isOpen={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
