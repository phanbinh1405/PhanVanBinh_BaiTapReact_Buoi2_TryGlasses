import React, { Component } from 'react';
import ListGlasses from './ListGlasses';
import ModelTryGlasses from './ModelTryGlasses';

export default class TryGlassesApp extends Component {
  state = {
    selectedGlass: {},
  };

  tryGlasses = (glass) => {
    this.setState({
      selectedGlass: glass,
    });
  };
  render() {
    return (
      <>
        <div className='container py-4'>
          <ModelTryGlasses selectedGlass={this.state.selectedGlass} />
        </div>
        <div className='container' s>
          <ListGlasses tryGlassesHandler={this.tryGlasses} />
        </div>
      </>
    );
  }
}

