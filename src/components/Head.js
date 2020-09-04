import React from 'react'

import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  
} from 'carbon-components-react/es/components/UIShell';

import Setting from '@carbon/icons-react/es/settings/16';
import Notification16 from '@carbon/icons-react/es/notification/16';
import { action } from '@storybook/addon-actions';


function Head() {
  return (
    <div>
        <Header>
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={action('Menu clicked')}
        />
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Home</HeaderMenuItem>
          <HeaderMenuItem href="#">News</HeaderMenuItem>
          <HeaderMenuItem href="#">Tools</HeaderMenuItem>
          <HeaderMenu aria-label="Manage">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={action('notification click')}
          >
            <Notification16 />

          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Profile"
            onClick={action('user click')}
          >

            <Setting/>
           
          </HeaderGlobalAction>

          <HeaderGlobalAction
            aria-label="Profile"
            onClick={action('user click')}
          >

           <h1 className ="signIn" >Sign In</h1>
           
          </HeaderGlobalAction>


        </HeaderGlobalBar>
      </Header>
    </div>
  )
}

export default Head
