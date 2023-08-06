import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../api/product'; // Update this path to the location of your product API

const Category = () => {
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
      <div className="main-container">
        <div className="large ">
          <div className="container-catagory ">
            <div className="awe-section-4 pt-20 relative">
              <div className="before-main "></div>
              <h1 className="text-3xl font-bold">Sản phẩm danh mục</h1>
            </div>
            <div className="mini pt-6">
              <span>
                Những sản phẩm nổi tiếng với chất lượng hàng đầu được shop nhập về phục vụ quý khách hàng
              </span>
            </div>
            <div className="item flex pt-9">
              <a className="pr-9 text-lg text-blue-500 " href="">
                <img className="w-20" src="/src/assets/img/item1.png" alt="" />
                apple watch
              </a>
              <a className="pr-9 text-lg hover:text-blue-500" href="">
                <img className="w-20" src="/src/assets/img/item2.png" alt="" />
                apple watch
              </a>
            </div>
          </div>

          <div className="container-list pt-9 pb-12 ">
            <div className="box-product flex justify-between flex-wrap gap-4 " style={{ width: widthValue }}>
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
      </div>
    </div>
  );
};

export default Category;
