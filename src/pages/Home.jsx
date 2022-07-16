import React, { useState, useEffect } from 'react';

import { Categories, Sort, Skeleton, PizzaCard } from '../components';

export function Home() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'popular',
    sort: 'reating',
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62d02a291cc14f8c0885bc46.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sort.replace('-', '')}&order=${
        sortType.sort.includes('-') ? 'ASC' : 'DESC'
      }`,
    )
      .then((res) => {
        return res.json();
      })
      .then((array) => {
        setItem(array);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onClickSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : item.map((data) => <PizzaCard key={data.id} {...data} />)}
      </div>
    </>
  );
}
