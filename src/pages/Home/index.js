import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/Trinity_Force_item.png/revision/latest?cb=20171222001255"
          alt="Trinity Force"
        />
        <strong>Trinity Force</strong>
        <span>3733</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#ddd" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/15/Infinity_Edge_item.png/revision/latest?cb=20180531105945"
          alt="Infinity Edge"
        />
        <strong>Infinity Edge</strong>
        <span>3400</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#ddd" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/Trinity_Force_item.png/revision/latest?cb=20171222001255"
          alt="Trinity Force"
        />
        <strong>Trinity Force</strong>
        <span>3733</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#ddd" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/Trinity_Force_item.png/revision/latest?cb=20171222001255"
          alt="Trinity Force"
        />
        <strong>Trinity Force</strong>
        <span>3733</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#ddd" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/Trinity_Force_item.png/revision/latest?cb=20171222001255"
          alt="Trinity Force"
        />
        <strong>Trinity Force</strong>
        <span>3733</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#ddd" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/Trinity_Force_item.png/revision/latest?cb=20171222001255"
          alt="Trinity Force"
        />
        <strong>Trinity Force</strong>
        <span>3733</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#ddd" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
