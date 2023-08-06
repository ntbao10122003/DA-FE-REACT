import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../../api/product';  // Update this path to the location of your product API
import { Link } from 'react-router-dom'

const ProductPage = () => {
  const widthValue = '100%';
  const width_1 = '23%';

  // Use the generated hook from the API to fetch the products
  const { data: products, error, isLoading } = useGetProductsQuery();

  useEffect(() => {
    // You can add any additional logic here if needed.
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div className="main w-full py-6">
      <div className="container-list pt-9 pb-12">
        <div className="box-product flex justify-between flex-wrap gap-4" style={{ width: widthValue }}>
          {products.map((product) => (

            <div key={product.id} className="box text-center border border-danger-500 pt-6" style={{ width: width_1 }}>
              <img className="m-auto" src="/src/assets/img/sp1.jpg" alt="" width="90%" />
              <Link to={`/product/${product.id}`} className="block mt-6 mb-3 font-medium">
                {product.name}
              </Link>
              <span className="price font-medium text-red-500 ">{product.price}₫</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
