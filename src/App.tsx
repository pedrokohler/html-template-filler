import React from 'react';
import { renderToString } from 'react-dom/server'
import { html as beautifyHtml } from 'js-beautify';
import { SimpleTemplate } from './templates';

function App() {

  const Element = () => (
    <>
    <SimpleTemplate></SimpleTemplate>
    </>
  );
  const pretty = beautifyHtml(renderToString(
    <Element></Element>
  ));

  return (
    <div className="App">
        <Element></Element>
        <textarea value={pretty}></textarea>
    </div>
  );
}

export default App;
