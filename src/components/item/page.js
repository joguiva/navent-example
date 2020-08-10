import React from 'react';
import Contact from '../contact';
import HistoryIcon from '@material-ui/icons/History';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import Moment from 'moment';
import 'moment/locale/es';
import './style.scss';

const setClass = (plan) => {
  switch (plan) {
    case 'SUPERHIGHLIGHTED':
      return 'posting-card--super-highlighted';

    case 'HIGHLIGHTED':
      return 'posting-card--highlighted';
  
    default:
      return '';
  }
}

const setLabel = (plan) => {
  switch (plan) {
    case 'SUPERHIGHLIGHTED':
      return 'Super destacado';

    case 'HIGHLIGHTED':
      return 'Destacado';
  
    default:
      return 'Simple';
  }
}

const shortenString = (string, limit) => {
  
  if (string.length > limit)
    return string.substring(0,limit)+'...';
  else
    return string;
  
}

function Page(props) {
  const {
    item,
    favorite,
    modal,
    handleFavorite,
    handleModal,
  } = props;
  return (
    <div className={`posting-card ${setClass(item.publication_plan)}`}>
      <div className="general-content">
        <div className="first-column">
          <div className="gallery">
            <span className="plan-label">{setLabel(item.publication_plan)}</span>
            {
              favorite ?
                <button className="favorite" onClick={() => {handleFavorite(item.posting_id)}}>
                  <Favorite fontSize="small" />
                </button>
              :
                <button className="favorite" onClick={() => {handleFavorite(item.posting_id)}}>
                  <FavoriteBorder fontSize="small" />
                </button>              
            }
            <img src={item.posting_picture} alt="" />
          </div>
          <div className="posting-prices">
            <div className="prices">
              <span>
                {item.posting_prices[0].price.currency === 'ARS' ? '$' : 'USD'} {item.posting_prices[0].price.amount}
              </span>
            </div>
            <div className="expenses">
              {item.posting_prices[0].expenses ? (
                <span>
                  + {item.posting_prices[0].expenses.currency === 'ARS' ? '$' : 'USD'} {item.posting_prices[0].expenses.amount} Expensas
                </span>
              ) : (
                null
              )}
            </div>
          </div>
        </div>
        <div className="second-column">
          <div className="item-content">
            <h2 className="title">
              {item.title}
            </h2>
            <span className="location">
              {item.posting_location.address}, {item.posting_location.zone}, {item.posting_location.city}
            </span>
            <div className="item-description">
              {shortenString(item.posting_description,240)}
            </div>
          </div>
          <div className="item-action">
            <div className="item-history">
              <HistoryIcon fontSize="small" />
              <span>Publicado hace {Moment(item.publish_date, "DD-MM-YYYY").fromNow('dd')}</span>
            </div>
            <button className="custom-button"
              onClick={() => {handleModal(item.posting_id)}}
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
      
      {
        modal ?
          <Contact
            open={modal}
            onClose={handleModal}
            itemId={item.posting_id}
          />
        : null
      }
    </div>
  )
}

export default Page;