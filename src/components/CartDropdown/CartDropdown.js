import React from 'react';
import CustomButton from './../CustomButton/CustomButton';
import {connect} from 'react-redux';
import CartItem, {} from './../CartItem/CartItem';
import  './CartDropdown.scss';

const CartDropdown = ({cartItems}) => (
	<div className='cart-dropdown' >
        <div className='cart-item'>
			{cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}></CartItem>))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);
const mapStateToProps=({cart: {cartItems}})=>({
   cartItems
})


export default connect(mapStateToProps)(CartDropdown);
