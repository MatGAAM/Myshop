import React, {useEffect, useState} from "react";
import * as S from './styles'
import axios from "axios";

import { ProductCard } from "../ProductCard/ProductCard";

import { Product } from '../../data/products'

export const ProductList: React.FC = () => {

  const [responseData, setResponseData] = useState<Product[]>([])
  useEffect(() =>{
    async function getProducts() {
      const response = await axios.get('https://fakestoreapi.com/products')
      setResponseData(response.data)
    }
    getProducts()
    console.log(responseData)

  }, [])
    
  return (
    <S.Container>
      {
        responseData.map((product) => (
            <ProductCard product={product} key={product.id} />
          )
        ) 
      }
    </S.Container>
  )
}