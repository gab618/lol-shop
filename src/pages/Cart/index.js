import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/Trinity_Force_item.png/revision/latest?cb=20171222001255"
                alt="Trinity Force"
              />
            </td>
            <td>
              <strong>Trinity Force</strong>
              <span>3733</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#24494b" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#24494b" />
                </button>
              </div>
            </td>
            <td>
              <strong>7466</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#24494b" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/Trinity_Force_item.png/revision/latest?cb=20171222001255"
                alt="Trinity Force"
              />
            </td>
            <td>
              <strong>Trinity Force</strong>
              <span>3733</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#24494b" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#24494b" />
                </button>
              </div>
            </td>
            <td>
              <strong>7466</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#24494b" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>6667</strong>
        </Total>
      </footer>
    </Container>
  );
}
