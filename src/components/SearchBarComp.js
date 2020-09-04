import React from 'react'

import './styles/search.scss'
import Search from 'carbon-components-react/es/components/Search';

import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


const props = () => ({
    className: 'some-class',
    small: boolean('Small UI (small)', false),
    light: boolean('Light variant (light)', false),
    name: text('Form item name (name)', ''),
    defaultValue: text('Default value (defaultValue)', ''),
    labelText: text('Label text (labelText)', 'Search'),
    closeButtonLabelText: text(
      'The label text for the close button (closeButtonLabelText)',
      ''
    ),
    placeHolderText: text('Placeholder text (placeHolderText)', 'Search w3 places and BluePages'),
    onChange: action('onChange'),
});


function SearchBarComp() {
  return (
    <div>
      
      <h1 className ="searchBar" >
        <a href="#" className="Main" >IBM </a>
        <a  href="#">  133.31 </a>
        </h1>
    
        <div className="search" >
            <Search {...props()} id="search-1" />

         </div>
    </div>
  )
}

export default SearchBarComp
