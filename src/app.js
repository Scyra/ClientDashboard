import React        from 'react';
import ReactDOM     from 'react-dom';
import {BrowserRouter, Match, Link} from 'react-router';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';

import './styles/index.scss';

ReactDOM.render(
  <App>
    <Split flex="right">
      <Sidebar colorIndex="neutral-1">
        <Header><h1>Scyra</h1></Header>
        <Menu>Menu</Menu>
      </Sidebar>
      <Article basis="full" size="full" flex="grow" full="vertical">
        <Section alignSelf="stretch" basis="1/2" colorIndex="light-1">
          Section 1
        </Section>
        <Section alignSelf="stretch" basis="1//2" colorIndex="light-2">
          Section 2
        </Section>
      </Article>
    </Split>
  </App>, document.getElementById('app'));
