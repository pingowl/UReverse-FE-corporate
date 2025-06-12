import React from 'react';
import ProductDetailBox from '../../component/administrator/ProductDetail/ProductDetailBox';

const ProductDetail = () => {
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

//더미데이터
const dummyProduct = [
  {
    product:{
        id: 1,
        image1: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
        image2: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
        image3: 'https://i3.ruliweb.com/img/4/E/6/0/4E60184134133A332A',
        brand: '브랜드A',
        category: '카테고리A',
        paid_point: 10000,
        expect_point: 12000,
        userId:'jigu123@naver.com',
        date: '2025-06-01',
        status: 'FINISH'
    },
    result:{
      ai:{
        tear: false,
        stain: false,
        fading: false,
        stretching: true,
        comment: "대체적으로 괜찮은 옷입니다. 관리자님"
        
      },
      inspector:{
        inspectorId: "inspector001@naver.com",
        tear: false,
        stain: false,
        fading: false,
        stretching: false,
        comment: "오케이 굳, 늘어남 정도가 심하지 않아서 정상으로 올렸습니다. 거의 새옷이네요.",
      },
      grade: "A",
    },
  },
]