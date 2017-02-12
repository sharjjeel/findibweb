import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Terms extends Component {

  render() {
    return (
      <div className="container">
        <h1>Terms and Conditions</h1>
        <Helmet title="Terms and conditions"/>

        <p>By using the Findib application (refered to as the application),
        you agree to follow the Findib honor code listed below. Any user of the application acknowledges
        that the terms and condition may change at anytime. Furthermore, any user of the application
        also acknowledges that the application and its creator are not responsible for the theft, damage, or loss
        of any item listed on the application.
        Before submitting, please note how we use this data. Everything you submit will be available for any other user to
        view. This includes the way for users to contact you and the information on the item you post. Please use discretion in
        giving out any private information. This app's main goal is take away having to put up flyers around areas of where you
        have lost items. As with flyers, you should not put any information that may identify you. We recommend you use an alias email
        and meet in public areas to deliver and verify items.
        </p>

        <h1>Findib Honor Code</h1>
        <p>As a user, I will only use this application to return lost items to their respective owners,
        regardless of reward, and only post items that I have personally lost or found.
        </p>
      </div>
    );
  }
}
