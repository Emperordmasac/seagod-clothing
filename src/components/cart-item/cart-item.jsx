import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer, Span } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <Span>{ name }</Span>
            <Span>{ quantity } x ${ price }</Span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;