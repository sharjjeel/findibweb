import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/carsetists" target="_blank">@carsetists</a>.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.counterContainer}>
            <CounterButton multireducerKey="counter1"/>
          </div>

          <dl>
            <dt>What is Findib?</dt>
            <dd>
              The <Link to="/about">About Us page</Link> has information on this website!
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}
