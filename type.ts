export interface ProductProps {
  _id: string;
  _type: string;
  _rev: string;
  _creatgedAt: string;
  price: number;
  rowprice: number;
  title: string;
  position: string;
  ratings: number;
  description: string;
  brand: string;
  slug: {
    current: string;
    _type: string;
  };
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  category: [
    {
      _key: string;
      _ref: string;
      _type: string;
    }
  ];
  isnew: boolean;
  body: any;
  quantity: number;
}

export interface StateProps {
  toyinnobeautyhub: {
    productData: ProductProps[];
  };
}
