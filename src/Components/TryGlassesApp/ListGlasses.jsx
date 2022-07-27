import React, { Component } from 'react';
import GlassItem from './GlassItem';

const data = [
  {
    id: 1,
    price: 30,
    name: 'GUCCI G8850U',
    url: './image/v1.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 2,
    price: 50,
    name: 'GUCCI G8759H',
    url: './image/v2.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 3,
    price: 30,
    name: 'DIOR D6700HQ',
    url: './image/v3.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 4,
    price: 70,
    name: 'DIOR D6005U',
    url: './image/v4.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 5,
    price: 40,
    name: 'PRADA P8750',
    url: './image/v5.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 6,
    price: 60,
    name: 'PRADA P9700',
    url: './image/v6.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 7,
    price: 80,
    name: 'FENDI F8750',
    url: './image/v7.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 8,
    price: 100,
    name: 'FENDI F8500',
    url: './image/v8.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
  {
    id: 9,
    price: 60,
    name: 'FENDI F4300',
    url: './image/v9.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  },
];

export default class ListGlasses extends Component {
  render() {
    const { tryGlassesHandler } = this.props;
    return (
      <div className='row p-3 bg-white mx-5' style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}}>
        {data.map((glass) => {
          return <GlassItem glass={glass} tryGlassesHandler={tryGlassesHandler} 
          key={glass.id} />;
        })}
      </div>
    );
  }
}
