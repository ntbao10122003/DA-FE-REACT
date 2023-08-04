import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../api/product'; // Update this path to the location of your product API
import { IProduct } from '../../interface/product/product'; 

const ProductDetailPage = () => {
  const { productId } = useParams();

  // Use the generated hook from the API to fetch the product by its ID
  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);

  useEffect(() => {
    // You can add any additional logic here if needed.
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Error occurred while fetching product details</div>;
  }

  return (
    <div className="container-detail">
      <div className="nav-detail">
        <a href="/" className="text-xm">
          Trang chủ <span className="text-blue-500">Apple Watch</span>
        </a>
      </div>

      <div className="box-detail flex pt-16">
        <div className="detail-left w-2/4">
          <img src={product.imageUrl} alt="" width="90%" style={{ margin: '0 auto' }} />
          <div className="left-product grid grid-cols-5">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt="" />
            ))}
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
                {/* Quantity input and add to cart button */}
              </div>
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
  );
};

export default ProductDetailPage;
