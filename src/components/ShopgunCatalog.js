import React from "react";
import PropTypes from 'prop-types';
import shopgun from '../config/shopgun';
import ShopgunOfferItem from './ShopgunOfferItem';

class ShopgunCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {catalog: {}, message: '', offers: [], filterText: ''};
        this.id = this.props.match.params.id;
        this.startGetCatalogQuery = this.startGetCatalogQuery.bind(this);
        this.handleCatalog = this.handleCatalog.bind(this);
        this.handleError = this.handleError.bind(this);
        this.startGetOffersQuery = this.startGetOffersQuery.bind(this);
        this.handleNewOffers = this.handleNewOffers.bind(this);
        this.handleOffer = this.handleOffer.bind(this);
        this.fetchAllOffers = this.fetchAllOffers.bind(this);
        this.filterOffer = this.filterOffer.bind(this);
        this.onFilterTextChange = this.onFilterTextChange.bind(this);
    }

    componentDidMount() {
        this.startGetCatalogQuery(this.id);
    }

    startGetCatalogQuery(id) {
        console.log("Starting Shopgun query");
        shopgun({
            url: `/v2/catalogs/${this.id}`
        }, (error, data) => {
            if (error) this.handleError(error);
            else this.handleCatalog(data);
        })
    }

    startGetOffersQuery(catalog, offset) {
        console.log("Starting Shopgun query");
        shopgun({
            url: `/v2/offers`,
            qs: {
                catalog_ids: catalog.id,
                offset: offset
            }
        }, (error, data) => {
            if (error) this.handleError(error);
            else this.handleNewOffers(data);
        })
    }

    fetchAllOffers(catalog) {
        const offerCount = catalog.offer_count;
        let currentOffset = 0;
        while (currentOffset < offerCount) {
            this.startGetOffersQuery(catalog, currentOffset);
            currentOffset += 24;
        }
    }

    handleNewOffers(offers) {
        console.log("NEW OFFERS");
        console.log(offers);
        this.setState({offers: [...this.state.offers, ...offers]});
    }

    handleOffer(offer) {

    }

    handleCatalog(catalog) {
        console.log(catalog);
        this.setState({catalog});
        document.title = catalog.label || catalog.branding.name || 'Tilbud på Messenger';
        this.fetchAllOffers(catalog);
    }

    handleError(error) {
        console.error(error);
        this.setState({message: error})
    }

    filterOffer(offer) {
        if (this.state.filterText) {
            return offer.heading.match(new RegExp(this.state.filterText, 'ig')) !== null;
        } else {
            return true;
        }
    }

    onFilterTextChange(event) {
        event.preventDefault();
        this.setState({filterText: event.target.value});
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text"
                           id="filter-offer-text"
                           placeholder="Filter"
                           onChange={this.onFilterTextChange}
                           style={{width: '100vw'}}/>
                </div>
                <div>
                    {
                        this.state.offers
                            .filter(this.filterOffer)
                            .map(offer => <ShopgunOfferItem key={offer.id} offer={offer}/>)
                    }
                </div>
            </div>
        )
    }
}

ShopgunCatalog.propTypes = {
    match: PropTypes.object.isRequired
};

export default ShopgunCatalog;