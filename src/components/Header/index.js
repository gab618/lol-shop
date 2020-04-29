import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LolShop" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>itens</span>
        </div>
        <MdShoppingBasket size={36} color="#eee4d0" />
      </Cart>
    </Container>
  );
}
