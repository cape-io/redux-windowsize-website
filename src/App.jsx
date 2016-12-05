import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { mediaXY } from './select'
import './App.css'

function App({ height, isNarrow, isMedium, isWide, sizeId, url, width }) {
  const sourceThis = 'View source for this page on Github '
  return (
    <div className="App">
      <div className="App-header">
        <h1>Redux Windowsize</h1>
      </div>
      <p>Link to npm module <a href={url}>cape-io/redux-windowsize</a>.</p>
      <p>{sourceThis}<a href={url.concat('-website')}>cape-io/redux-windowsize</a>.</p>
      <h2>{`Height: ${height}`}</h2>
      <h2>{`Width: ${width}`}</h2>
      {isNarrow && <h3>Narrow only message or whatever.</h3>}
      {isMedium && <h3>Medium is nice.</h3>}
      {isWide && <h3>WOW! Your screen is so wide.</h3>}
      <h3>{`Size ID: ${sizeId}`}</h3>
    </div>
  )
}
App.propTypes = {
  height: PropTypes.number.isRequired,
  isNarrow: PropTypes.bool.isRequired,
  isMedium: PropTypes.bool.isRequired,
  isWide: PropTypes.bool.isRequired,
  sizeId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}
App.defaultProps = {
  url: 'https://github.com/cape-io/redux-windowsize',
}

export default connect(mediaXY)(App)
