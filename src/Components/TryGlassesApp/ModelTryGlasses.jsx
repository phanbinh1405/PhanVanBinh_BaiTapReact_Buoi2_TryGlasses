import React, { Component } from 'react';

export default class ModelTryGlasses extends Component {
  render() {
    const { name, desc, url } = this.props.selectedGlass;
    return (
      <div className='row'>
        <div className='col-6 text-center'>
          <div className='position-relative mx-auto' style={{ width: 350 }}>
            <img src='./image/model.jpg' alt='' className='w-100' />

            {name && desc ? (
              <div
                className='position-absolute bottom-0 start-50 translate-middle-x p-3 text-start w-100'
                style={{ background: 'rgba(255, 159, 28, 0.3)' }}
              >
                <h4>{name}</h4>
                <p className='mb-0'>{desc}</p>
              </div>
            ) : null}

            <div className='position-absolute w-50 start-50 translate-middle-x' style={{ top: 110 }}>
              <img src={url} style={{ width: '100%' }} alt='' />
            </div>
          </div>
          <p className='mb-0 fs-3 fw-bold'>After</p>
        </div>
        <div className='col-6 text-center'>
          <img src='./image/model.jpg' alt='' style={{ width: 350 }} />
          <p className='mb-0 fs-3 fw-bold'>Before</p>
        </div>
      </div>
    );
  }
}
