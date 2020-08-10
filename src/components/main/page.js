import React from 'react';
import Sidebar from '../sidebar';
import Item from '../item';
import './style.scss';

function Page(props) {
  const {
    results,
  } = props;
  const isEmpty = results.length === 0;
  return (
    <main>
      <div className="main-container">
        <Sidebar />
        <div className="list-page">
          {isEmpty ?
            <div className="no-results">
              <h2>There are not results.</h2>
            </div>
          :
            results.map(item =>
              <Item
                item={item}
                key={item.posting_id}
              />
            )
          }
        </div>
      </div>
    </main>
  );
}

export default Page;