import React from 'react'
import '../App.scss';


import { action } from '@storybook/addon-actions';

import {
    select,
    text,
  } from '@storybook/addon-knobs';

const radioValues = {
    None: '',
    standard: 'standard',
    'default-selected': 'default-selected',
    selected: 'selected',
  };


const props = {
    group: () => ({
      name: text('Form item (name in <TileGroup>)', 'tile-group'),
      valueSelected: select(
        'Value of the selected item (valueSelected in <TileGroup>)',
        radioValues,
        ''
      ),
      onChange: action('onChange'),
    }),
    
  };

  const Card = ({ children }) => (
    <div className="card">
        <div className="face">
            {children} 
        </div>
    </div>
);


export default Card;
