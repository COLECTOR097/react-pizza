import React, { useState, useEffect } from 'react'

import { Categories, Sort, Skeleton, PizzaCard } from '../components';

export function Home() {
	const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://62d02a291cc14f8c0885bc46.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(array => {
        setItem(array);
        setIsLoading(false);
      });
  }, []);
	return (
		<>
			<div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
              : item.map(data => <PizzaCard key={data.id} {...data} />)}
          </div>
		</>
	)
}
