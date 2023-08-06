import NewProduct from "./new-product/NewProduct"
import News from "./news/News"
import Partner from "./partner/Partner"
import Category from "./product-category/Category"
import SaleProduct from "./sale-product/SaleProduct"

const HomePage = () => {
  return (
    <div>
        <Partner/>
        <Category/>
        <NewProduct/>
        <SaleProduct/>
        <News/>
    </div>
  )
}

export default HomePage