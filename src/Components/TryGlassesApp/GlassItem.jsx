import React, { Component } from 'react';

export default class GlassItem extends Component {
  render() {
    const {tryGlassesHandler, glass} = this.props
    return (
      <div className='col-2 mb-4' style={{cursor: 'pointer'}}>
        <div onClick={() => tryGlassesHandler(glass)}>
          <img src={glass.url} alt='' style={{ width: '100%' }} />
        </div>
      </div>
    );
  }
}
