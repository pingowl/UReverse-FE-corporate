import React from 'react';
import { useParams } from 'react-router-dom';
import PickupDetailBox from '../../component/administrator/ProductDetail/PickupDetailBox';


const PickupDetail = () => {
  const {id} =useParams(); //예시
  const productId = Number(id); //예시
  const productData = dummyProduct.find(item => item.product.id === productId);

  return (
    <div
      style={{
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
        <PickupDetailBox productData={productData} />
    </div>
  );
};

export default PickupDetail;


//더미데이터
const dummyProduct = [
  {
    //수거완료 - FINHISH인 상품
    product:{
        id: 1,
        image1: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
        image2: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
        image3: 'https://media.bunjang.co.kr/product/239312531_4_1697691273_w360.jpg',
        brand: '브랜드A',
        category: '카테고리A',
        paid_point: 10000,
        expect_point: 12000,
        userId:'jigu123@naver.com',
        date: '2025-06-01',
        status: 'FINISH'
    },
    delivery:{
      sender_name: '김지구',
      postal_code: 16809,
      address: "경기도 용인시 수지구 성복동",
      phone: "010-1111-2222"
    },
    result:{
      ai:{
        stain: false,
        tear: false,
        stretching: true,
        fading: false,
        comment: "대체적으로 괜찮은 옷입니다. 관리자님"
        
      },
      inspector:{
        inspectorId: "inspector001@naver.com",
        stain: false,
        tear: false,
        stretching: false,
        fading: false,
        comment: "오케이 굳, 늘어남 정도가 심하지 않아서 정상으로 올렸습니다. 거의 새옷이네요.",
      },
      grade: "A",
    },
  },
  {
    //수거요청, 수거중
    product:{
        id: 2,
        image1: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
        image2: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
        brand: '브랜드B',
        category: '카테고리B',
        paid_point: 10000,
        expect_point: 12000,
        userId:'jigu123@naver.com',
        date: '2025-06-01',
        status: 'DELIVERY_REQUEST' //또는 DELIVERING
    },
    delivery:{
      sender_name: '김지구',
      postal_code: 16809,
      address: "경기도 용인시 수지구 성복동",
      phone: "010-1111-2222"
    },
    result:{
      ai:{
        stain: false,
        tear: false,
        stretching: true,
        fading: false,
        comment: "대체적으로 괜찮은 옷입니다. 관리자님"
        
      },
      inspector:{
        inspectorId: "inspector001@naver.com",
        stain: false,
        tear: false,
        stretching: false,
        fading: false,
        comment: "오케이 굳, 늘어남 정도가 심하지 않아서 정상으로 올렸습니다. 거의 새옷이네요.",
      },
      grade: "A",
    },
  },
  {
    //1차 검수 완료
    product:{
        id: 3,
        image1: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
        image2: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
        brand: '브랜드C',
        category: '카테고리C',
        paid_point: 10000,
        expect_point: 12000,
        userId:'jigu123@naver.com',
        date: '2025-06-01',
        status: 'SECOND_INSPECT'
    },
    delivery:{
      sender_name: '김지구',
      postal_code: 16809,
      address: "경기도 용인시 수지구 성복동",
      phone: "010-1111-2222"
    },
    result:{
      ai:{
        stain: false,
        tear: false,
        stretching: true,
        fading: false,
        comment: "대체적으로 괜찮은 옷입니다. 관리자님"
        
      },
      inspector:{
        inspectorId: "inspector001@naver.com",
        stain: false,
        tear: false,
        stretching: false,
        fading: false,
        comment: "오케이 굳, 늘어남 정도가 심하지 않아서 정상으로 올렸습니다. 거의 새옷이네요.",
      },
      grade: "A",
    },
  },
  {
    //AI검수 완료
    product:{
        id: 4,
        image1: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
        image2: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
        brand: '브랜드D',
        category: '카테고리D',
        paid_point: null,
        expect_point: 12000,
        userId:'jigu123@naver.com',
        date: '2025-06-01',
        status: 'FIRST_INSPECT'
    },
    delivery:{
      sender_name: '김지구',
      postal_code: 16809,
      address: "경기도 용인시 수지구 성복동",
      phone: "010-1111-2222"
    },
    result:{
      ai:{
        stain: false,
        tear: false,
        stretching: true,
        fading: false,
        comment: "대체적으로 괜찮은 옷입니다. 관리자님"
        
      },
      inspector:{
        inspectorId: "inspector001@naver.com",
        stain: null,
        tear: null,
        stretching: null,
        fading: null,
        comment: null,
      },
      grade: null,
    },
  },
  {
    //상품 등록
    product:{
        id: 5,
        image1: 'https://cdn.hellodd.com/news/photo/201909/69577_craw1.jpg',
        image2: 'https://flexible.img.hani.co.kr/flexible/normal/970/710/imgdb/original/2022/0107/20220107501703.jpg',
        brand: '브랜드E',
        category: '카테고리E',
        paid_point: null,
        expect_point: 12000,
        userId:'jigu123@naver.com',
        date: '2025-06-01',
        status: 'REGISTER'
    },
    delivery:{
      sender_name: '김지구',
      postal_code: 16809,
      address: "경기도 용인시 수지구 성복동",
      phone: "010-1111-2222"
    },
    result:{
      ai:{
        stain: null,
        tear: null,
        stretching: null,
        fading: null,
        comment: null
        
      },
      inspector:{
        inspectorId: "inspector001@naver.com",
        stain: null,
        tear: null,
        stretching: null,
        fading: null,
        comment: null,
      },
      grade: null,
    },
  },
]
