import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../api/product';
import { add } from "../../slices/Cart";
import { useAppDispatch } from "../../store/hook";
import { message } from 'antd';

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = id;
  const dispatch = useAppDispatch();
  // const { items } = useAppSelector((state: any) => state.cart);
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);

  // Use the generated hook from the API to fetch the product by its ID
  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Error occurred while fetching product details</div>;
  }

  const handleAddToCart = () => {
    console.log(product, quantity)
    dispatch(add({ newProduct: product, quantity: quantity }), message.success("Thêm vào giỏ hàng thành công"));
  };
  return (
    <div className="container-detail">
      <div className="nav-detail">
        <a href="/" className="text-xm">
          Trang chủ <span className="text-blue-500">Apple Watch</span>
        </a>
      </div>

      <div className="box-detail flex pt-16">
        <div className="detail-left w-2/4">
          <img src="https://news.khangz.com/wp-content/uploads/2022/11/cach-chup-man-hinh-dien-thoai-samsung-a23-1.jpg" alt="" width="90%" style={{ margin: '0 auto' }} />
          <div className="left-product grid grid-cols-5">
            {/* {product.images.map((image, index) => (
              <img key={index} src={image} alt="" />
            ))} */}
          </div>
        </div>
        <div className="box-right w-2/4">
          <div className="information-product">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <span className="text-red-500 block pt-6 text-xl font-bold">
              {product.price}₫
            </span>
            <p className="pt-16 pb-10">{product.desc}</p>
            <div className="quality">

              <p>số lượng :</p>
              <div className="box-quality flex">
                {/* Quantity input */}
                <div className="quantity-input">
                  <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
                  {/* <input type='number' value={quantity} /> */}
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                {/* Add to cart button */}
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </button>
              </div>
          </div>
        </div>
      </div>

      <div className="content pt-24">
        <h1 className="text-3xl font-medium ml-6 mb-10">Thông tin chi tiết</h1>
        <div className="content text-sm">

        </div>
      </div>

      <div className="related products pt-16 pb-16">
        {/* ... Render related products section as before ... */}
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage
