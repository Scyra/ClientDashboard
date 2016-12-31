import React        from 'react';
import ReactDOM     from 'react-dom';
import {BrowserRouter, Match, Link} from 'react-router';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

import '../node_modules/grommet/scss/vanilla/index.scss';

ReactDOM.render(
  <App>
    <Split>
      <Sidebar>
        Navigation.
      </Sidebar>
      <Article>
        <Section>
          Section 1
        </Section>
        <Section>
          Section 2
        </Section>
      </Article>
    </Split>
  </App>, document.getElementById('app'));
