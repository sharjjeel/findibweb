import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us"/>

        <p>Findib is created and maintained by Sharjeel Aziz
          (<a href="https://twitter.com/carsetists" target="_blank">@carsetists</a>).
        </p>
        <p>
            It is still in progress, so I appreciate your patience!
        </p>
        <p>
          I hope to finish by end of December 2016, but I have to satisfy the product people before I can push it...
        </p>
        <p>
            I used this <a href="https://github.com/erikras/react-redux-universal-hot-example" target="_blank">template</a> to build out this website.
        </p>

        <h3>Images</h3>

        <p>
          Psst! Would you like to see a kitten?

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}
