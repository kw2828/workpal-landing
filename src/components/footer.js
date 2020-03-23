import PropTypes from "prop-types"
import React from "react"
import './footer.css'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="FooterGroup">
      <div className="FooterInfo">
        <span className="location"/>
        <span><p className="nyc">New York City</p></span> 
        <p className="copyright">© Workpal, 2020. All rights reserved</p>
      </div>
      <div className="Icons">
        <a href = "mailto: founder@workpal.chat">
          <span className="email"/>
        </a>
        <a href="https://www.linkedin.com/company/workpal-chat/" target="_blank">
          <span className="linkedin"></span>
        </a> 
      </div>
      <p className="copyright-mobile">© Workpal, 2020. All rights reserved</p>
    </div>
  </div>
)

export default Footer
