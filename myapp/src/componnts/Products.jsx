import {product} from "../Data"
const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>
        <div className="box-container">
            {product.map((item, index)=>(
                    <div className="box">
                        <div className="icons">
                            <a href="#" className="fas fa-shoping-cart"></a>
                            <a href="#" className="fas fa-shoping-cart"></a>
                            <a href="#" className="fas fa-shoping-cart"></a>
                        </div>
                    </div>
                ))}
            
        </div>
      </section>
    </>
  );
};
export default Products;
