import React, { useState } from 'react';

import { Link } from 'react-scroll';

export default function MyPortfolio() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const plusSlides = (delta) => {
    setCurrentSlideIndex((prevIndex) => prevIndex + delta);
  };

  const currentSlide = (index) => {
    setCurrentSlideIndex(index - 1);
  }
  }
