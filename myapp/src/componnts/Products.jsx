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
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <div className="image">
                            <img src={item.img} alt="" srcset="" />
                        </div>
                        <div className="content">
                            <h3>fresh coffee</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                ))}
            
        </div>
      </section>
    </>
  );
};
export default Products;
