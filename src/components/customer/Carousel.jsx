import React from 'react';

import CarouselContainer from './CarouselContainer.jsx';
import Wrapper from './CarouselWrapper.jsx';
import CarouselSlot from './CarouselSlot.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0
    }
  }

  getOrder(itemIndex) {
    const numItems = this.props.children.length || 1;

    if (itemIndex - this.state.position < 0) {
      return numItems - Math.abs(itemIndex - this.state.position)
    }

    return itemIndex - this.state.position;
  }

  nextSlide = () => {
    const numItems = this.props.children.length || 1;

    this.setState({
      position: this.state.position === numItems - 1 ? 0 : this.state.position + 1
    })
  }

  render() {
    const { title, children } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <Wrapper>
          <CarouselContainer>
            {children.map((child, index) => (
              <CarouselSlot
                key={index}
                order={this.getOrder(index)}
              >{child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
          <button onClick={() => this.nextSlide()}>Next</button>
        </Wrapper>
      </div>
    )
  }
}

export default Carousel;