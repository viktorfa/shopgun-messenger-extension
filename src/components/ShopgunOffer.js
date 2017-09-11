import React from "react";
import PropTypes from 'prop-types';
import shopgun from '../config/shopgun';
import ShopgunOfferItem from './ShopgunOfferItem';
class ShopgunOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {offer: {}, message: ''};
        this.id = this.props.match.params.id;
        this.startShopgunQuery = this.startShopgunQuery.bind(this);
        this.handleOffer = this.handleOffer.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
        this.startShopgunQuery(this.id);
    }

    startShopgunQuery(id) {
        console.log("Starting Shopgun query");
        shopgun({
            url: `/v2/offers/${this.id}`
        }, (err, data) => {
            if (err) this.handleError(err);
            else this.handleOffer(data);
        })
    }

    handleOffer(offer) {
        console.log(offer);
        this.setState({offer});
    }

    handleError(error) {
        console.error(error);
        this.setState({message: error})
    }

    render() {
        return (
            <div>
                {`This is a Shopgun offer with id: ${this.id}`}
                {
                    this.state.offer.images &&
                    <ShopgunOfferItem offer={this.state.offer}/>
                }
                <pre>
                    {JSON.stringify(this.state.offer, null, 2)
                    }
                </pre>
                <p>
                    {this.state.message}
                </p>
            </div>
        )
    }
}

ShopgunOffer.propTypes = {
    match: PropTypes.object.isRequired
};

export default ShopgunOffer;