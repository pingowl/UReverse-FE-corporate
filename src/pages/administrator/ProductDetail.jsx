import React from 'react';
// import { useParams } from 'react-router-dom';
import ProductDetailBox from '../../component/administrator/ProductDetail/ProductDetailBox';

//더미데이터
const dummyProduct = [
  {
    product:{
        id: 1,
        image1: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
        image2: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
        image3: 'https://media.bunjang.co.kr/product/239312531_4_1697691273_w360.jpg',
        brand: '브랜드A',
        category: '카테고리A',
        point: 10000,
        userId:'jigu123@naver.com',
        date: '2025-06-01',
    },
    result:{
      ai:{
        stain: false,
        tear: false,
        Stretching: true,
        Fading: false
      },
      inspector:{
        inspectorId: "inspector001@naver.com",
        comment: "오케이 굳, 늘어남 정도가 심하지 않습니다. 거의 새옷이네요.",
      },
      grade: "A",
    },
    
  },
]

const ProductDetail = () => {
//   const { id } = useParams();/

  return (
    <div
      style={{
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
        <ProductDetailBox productData={dummyProduct[0]} />
    </div>
  );
};

export default ProductDetail;
 