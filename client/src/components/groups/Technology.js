import React from 'react';
import { connect } from 'react-redux';
import { fetchStoriesByCategory } from '../../actions';

import CategoryHeading from '../CategoryHeading';
import Stories from '../Stories';

class Technology extends React.Component {
  render() {
    return (
      <div>
        <CategoryHeading color='#2c3e50' text='white' category='Technology' headings={['technology','tech','programming','computer science']} />
        <Stories load={() => this.props.fetchStoriesByCategory('technology')} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStoriesByCategory }
)(Technology);
