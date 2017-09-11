import SGN from 'shopgun-sdk/dist/sgn-sdk';
import {SHOPGUN_API_KEY} from './vars';
SGN.config.set({
    appKey: SHOPGUN_API_KEY,
    locale: 'nb_NO'
});

export default SGN.CoreKit.request;