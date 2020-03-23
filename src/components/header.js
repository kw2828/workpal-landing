import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link className="Logo" to="/" />
    </div>
  </div>
)

export default Header
