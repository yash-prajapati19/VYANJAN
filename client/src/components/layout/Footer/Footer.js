import React, { Fragment } from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="leftFooter">
          <h3>Company</h3>
          <p>Company-1</p>
          <p>Company-2</p>
          <p>Company-3</p>
        </div>
        <div className="middleFooter-1">
          <h3>For You Footer</h3>
          <p>Footer-1</p>
          <p>Footer-2</p>
          <p>Footer-3</p>
        </div>
        <div className="middleFooter-2">
          <h3>Newsteller</h3>
          <p>Newsteller-1</p>
          <p>Newsteller-2</p>
          <p>Newsteller-3</p>
        </div>
        <div className="rightFooter">
          <h3>About</h3>
          <p>About-1</p>
          <p>About-2</p>
          <p>About-3</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer