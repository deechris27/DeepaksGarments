import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/horse-logo.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const HeaderComponent = ({currentUser, hidden}) => {
   return( <div className="header">
        <Link className="logo-container" to="/">
           <Logo className="logo"/>
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
              SHOP
          </Link>
          <Link className="option" to="/contact">
              CONTACT
          </Link>
          {
              currentUser ? 
              <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
              :
              <Link className="option" to="/signIn"> SIGN IN</Link>
          }
          <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
    </div>)
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(HeaderComponent);