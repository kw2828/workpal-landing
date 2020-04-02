import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Hero from './'

export default class HeroPage extends React.Component {
    state = {
        email: "",
        submitted: false,
    };
    
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    };
    
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const email = this.state.email
        const validEmail = this.validateEmail(email)
        if (validEmail === true) {
          addToMailchimp(email)
          this.setState({ submitted: true })
        } else {
          alert(`Please enter a valid email! ${email}`);
        }
    };

    render() {
        const hasSubmitted = this.state.submitted;
        let button;
    
        if (hasSubmitted) {
          button = <button type="submit" className="submitted" />
        } else {
          button = <button type="submit" className="not_submitted" />
        }
        return (
          <div>
            <SEO title="Home" />
            <div className="Hero">
              <div className="HeroGroup">
                <div className="mobile-image" />
                <div className="info">
                  <h1>
                    Work is stressful. <br /> Meet Workpal.
                  </h1>
                  <p>
                  Workpal is your AI-powered friend to help you do your best work. 
                  Often times, work is demanding, stressful, and overwhelming. 
                  We all need a little help and support.
                  </p>
                  <form onSubmit={this.handleSubmit} className="form-group">
                        <div className="row">
                          <input
                              type="text"
                              name="email"
                              placeholder="Enter email for early access"
                              value={this.state.email}
                              onChange={this.handleInputChange} />    
                          {button}                
                      </div>
                  </form>
                </div>
                <div className="image"></div>
              </div>
            </div>
          </div>
        );
    }
}