import React, { useState, useEffect } from 'react';

import { Categories, Sort, Skeleton, PizzaCard, Pagination } from '../components';

export function Home({ searchValue }) {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [carrentPage, setCarrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'popular',
    sort: 'reating',
  });

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    const sort = sortType.sort.replace('-', '');
    const order = sortType.sort.includes('-') ? 'asc' : 'desc';
    setIsLoading(true);
    fetch(
      `https://62d02a291cc14f8c0885bc46.mockapi.io/items?page=${carrentPage}&limit=4&${category}&sortBy=${sort}&order=${order}&${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((array) => {
        setItem(array);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, carrentPage]);

  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const pizzas = item.map((data) => <PizzaCard key={data.id} {...data} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onClickSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCarrentPage(number)} />
    </>
  );
}
