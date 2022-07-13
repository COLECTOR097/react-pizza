import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';

export function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = index => {
    setActiveIndex(index);
  };

  const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? 'active' : ''}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
