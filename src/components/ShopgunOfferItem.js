import React from 'react';
import PropTypes from 'prop-types';
const ShopgunOfferItem = ({offer}) => {
    return (
        <div>
            {
                offer.images &&
                <div>
                    <h3>{offer.heading}</h3>
                    <img src={offer.images.view} alt={offer.heading} style={{maxWidth: '100vw'}}/>
                </div>
            }
        </div>
    )
};

ShopgunOfferItem.propTypes = {
    offer: PropTypes.object.isRequired,
};

export default ShopgunOfferItem;