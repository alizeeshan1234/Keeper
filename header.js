import React from 'react';
import './index.css';

const FontStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '27px',
    color: 'white',
    fontWeight: 'normal',
    textDecoration: 'none',
    position : 'relative',
    marginTop : '10px',
    marginLeft : '30px'
};

const divStyle = {
    height : '50px',
    width : '100%',
    backgroundColor : 'black',
    position : 'sticky',
    zIndex : '1',
    top : '0px',
    left : '0px',
    right : '0px',
    padding : '10px',
}

export function Header() {
  return (
    <div style={divStyle}>
      <h1 style={FontStyle}>Keeper</h1>
    </div>
  );
}

