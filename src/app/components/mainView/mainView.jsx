import React from 'react';

import MainHeader from './mainHeader.jsx';

export default class MainView extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="col-sm-10 main-container">
        <div className="main">
          <MainHeader />
          <div className="divider-full"></div>
{/*          <Posts />*/}
        </div>
      </div>
    );
  }
}