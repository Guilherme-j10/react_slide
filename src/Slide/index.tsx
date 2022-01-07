import React, { useEffect, useRef } from 'react';
import { ContainerSlide } from './style';

export const Slide = () => {

  const SlidReference = useRef({} as HTMLDivElement);
  const PositionSlideReference = useRef(0);
  const QuantitieElements = useRef(0);
  const CurrentSlideIsShowing = useRef(0);

  const Preview = () => {

    if (PositionSlideReference.current == 0) {

      SlidReference.current.scrollTo((PositionSlideReference.current = QuantitieElements.current * 600), 0);
      CurrentSlideIsShowing.current = QuantitieElements.current;

      return;

    }

    SlidReference.current.scrollTo((PositionSlideReference.current -= 600), 0);
    CurrentSlideIsShowing.current = 0;

  }

  const Next = () => {

    if (PositionSlideReference.current + 600 >= (QuantitieElements.current * 600)) {

      SlidReference.current.scrollTo((PositionSlideReference.current = 0), 0);
      CurrentSlideIsShowing.current = 1;

    } else {

      SlidReference.current.scrollTo((PositionSlideReference.current += 600), 0);
      CurrentSlideIsShowing.current++;

    }

  }

  useEffect(() => {

    if (!QuantitieElements.current) {

      QuantitieElements.current = document.querySelectorAll('[data-slide]').length;

    }

    CurrentSlideIsShowing.current = 2;

    setInterval(() => {

      console.log(CurrentSlideIsShowing.current);

      Next();

    }, 3000);

  }, []);

  return (
    <ContainerSlide>
      <button onClick={() => Preview()}>Preview</button>
      <div ref={SlidReference} className='Containerfather'>
        <div className='ContainerSoon' data-slide="1">
          <h1>Container [Slide] - 1</h1>
        </div>
        <div className='ContainerSoon' data-slide="2">
          <h1>Container [Slide] - 2</h1>
        </div>
        <div className='ContainerSoon' data-slide="3">
          <h1>Container [Slide] - 3</h1>
        </div>
        <div className='ContainerSoon' data-slide="4">
          <h1>Container [Slide] - 4</h1>
        </div>
        <div className='ContainerSoon' data-slide="5">
          <h1>Container [Slide] - 5</h1>
        </div>
        <div className='ContainerSoon' data-slide="6">
          <h1>Container [Slide] - 6</h1>
        </div>
        <div className='ContainerSoon' data-slide="7">
          <h1>Container [Slide] - 7</h1>
        </div>
      </div>
      <button onClick={() => Next()}>Next</button>
    </ContainerSlide>
  );
}