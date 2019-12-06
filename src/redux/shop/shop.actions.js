import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,  
});


export const fetchColllectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
    
        collectionRef.get().then(snapshot => {
           const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
           console.log('result: ', collectionsMap);
            dispatch(fetchColllectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.Message)));
    }; 
}