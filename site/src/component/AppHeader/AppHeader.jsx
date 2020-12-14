import React, { useState } from "react";
import { Icon, Popup, Grid, Label, Header, Button } from "semantic-ui-react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../../style/globalStyles";
import { lightTheme, darkTheme } from "../../style/Themes"

// import {useCookies} from 'react-cookie';

import { ReactComponent as CogIcon } from "../../asset/cog.svg";
import { ReactComponent as ArrowIcon } from "../../asset/arrow.svg";
import { CSSTransition } from "react-transition-group";

import Logo from "../../asset/peterportal-banner-logo.svg";
import "./AppHeader.scss";

export default function AppHeader(props) {
  return (
    <header className="navbar">
    <div className="navbar-nav">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: "auto",
          alignItems: "center",
        }}
      >
        <div className="peterportal-logo-container">
          <a href="/">
            <img alt="PeterPortal" id="peterportal-logo" src={Logo}></img>
          </a>
        </div>
        {/* <div style={{display: "flex"}}>
          <div className={"school-term_container"}>
            <p className={"school-term"} style={{ marginBottom: "-1px" }}>
              {this.state.week}
            </p>
          </div>
        </div> */}
      </div>

      <div style={{margin: "auto 12px"}}>
        <Popup style={{padding: "36px", width: "400px"}} position='bottom right' trigger={<Label as='a' color='yellow' image>alpha<Label.Detail>v0</Label.Detail></Label>} flowing  hoverable >
            <Grid centered columns={1}>
              <Grid.Column textAlign='left'>
                <Header as='h4'>Alpha Disclaimer</Header>
                <p>
                Please note that this is an alpha version of PeterPortal, which is still undergoing development. 
                Some content on this web application may not be accurate. Users are encouraged to double check details.
                <br/>
                <br/> 
                Should you encounter any bugs, glitches, lack of functionality or other problems on the application, 
                please let us know immediately so we can rectify these accordingly. Your help in this regard is greatly appreciated.
                </p>
                <a class="ui button" href="https://github.com/icssc-projects/PeterPortal/issues/new"><Icon name='github'/>Report an issue</a>
              </Grid.Column>
            </Grid>
        </Popup>
      </div>
      <div style={{margin: "auto 12px"}}>
        <Button toggle active={props.darkModeState} onClick={props.darkModeToggle}>
          Dark Mode
        </Button>
      </div>
    </div>
  </header>
  )

}
