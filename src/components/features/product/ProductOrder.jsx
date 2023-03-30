import { Text } from '@mantine/core'
import React from 'react'

const ProductOrder = () => {
  return (
    <>
      <div className="container">
        <h1 className='product__title'>Название</h1>
        <div className="backinfo">
          <div className="tag">Купили: 129 раз</div>
          <div className="tag">Артикул: ЫВАЫВА-020Ы</div>
        </div>
        <div className="shopinfo">
          <div className="shop__item">
            В наличии
          </div>
          <div className="shop__item">
            Сравнить
          </div>
          <div className="shop__item">
            Поделиться
          </div>
          
        </div>

        <div className="price">
          29 990 р.
        </div>
      </div>
    </>
  )
}

export default ProductOrder