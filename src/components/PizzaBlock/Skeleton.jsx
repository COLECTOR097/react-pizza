import React from 'react';
import ContentLoader from 'react-content-loader';

export function Skeleton() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#210099"
      foregroundColor="#00fffb">
      <circle cx="136" cy="140" r="125" />
      <rect x="0" y="283" rx="10" ry="10" width="280" height="28" />
      <rect x="1" y="329" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="442" rx="10" ry="10" width="90" height="27" />
      <rect x="130" y="432" rx="24" ry="24" width="150" height="45" />
    </ContentLoader>
  );
}
