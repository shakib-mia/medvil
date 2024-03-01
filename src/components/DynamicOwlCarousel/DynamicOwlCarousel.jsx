// DynamicOwlCarousel.js
import React, { Component } from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(
  () => {
    return import('react-owl-carousel3');
  },
  {
    ssr: false, // This line is important. It's what prevents server-side render
  }
);

class DynamicOwlCarousel extends Component {
  state = {
    isMounted: false,
    // items,
  };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const options = {
      //   loop: true,
      //   margin: 10,
      //   nav: false,
      //   dots: true,
      //   items: this.props.items,
      ...this.props,
      // other options here
    };
    return (
      <div className='container'>
        {this.state.isMounted && (
          <OwlCarousel
            className={`owl-theme ${this.props.className}`}
            {...options}
          >
            {this.props.children}
            {/* More items here */}
          </OwlCarousel>
        )}
      </div>
    );
  }
}

export default DynamicOwlCarousel;
