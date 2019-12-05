import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import withSpinner from '../../components/with-spinner/with-spinner';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../../pages/collection/collection';



import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';


const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    UnsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
    
        collectionRef.get().then(snapshot => {
           const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });   
    } 

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
                <div className='shop-page'>
                    <Route exact path={`${match.path}`} render={props => (
                        <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> 
                        )}
                    />
                    <Route 
                        path={`${match.path}/:collectionId`}
                        
                        render={props => console.log('props: ', props) || ( 
                        <CollectionPageWithSpinner isLoading={loading} {...props}  /> 
                        )} 
                    /> 
                </div>    
        );
    }  
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
})
    

export default connect(null, 
    mapDispatchToProps
    )(ShopPage);




/////////////////////////////////////////////////////////////////////////////////////////

    const inputArray = [2, 5, 9, 20, 15, 10, 19, 20, 44, 21];

    const square = inputArray.map((val) => {
        return {value:val*val};
    });
    
    console.log('squareRoot: ', square);


    const sqr = inputArray.map((num) => {
        return Math.sqrt(num)
    });

    console.log("NEW SQUARE: ", sqr);
    
    const oddNumber = inputArray.map((val) => {
        if (val % 2 !==0 ) {
            return val
        } else {
            return null
        }
        
    });

    console.log('oddNumbers' , oddNumber);


    const odd = oddNumber.filter(val => {
        return val

    });

    console.log("the odd numbers:" , odd);

    const sortInsc = inputArray.sort((a,b) =>  {
        return a-b
    });

    console.log('increasing order: ', sortInsc);


    const sortDesc = inputArray.sort((a,b) =>  {
        return b-a
    });

    console.log('decreasing order: ', sortDesc);

    const reverse = sortInsc.sort((val) => {
       val = sortInsc.reverse()
        return val
    }); 

    console.log('reverse order: ', reverse);

