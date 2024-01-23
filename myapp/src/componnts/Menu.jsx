import  menu  from "../Data";
const Menu =()=>{
    return(
        <section className="menu" id="menu">
            <h1 className="heading">our <span>menu</span></h1>
            <div className="box-container">
                {
                    menu.map((item, index)=>{
                        <div className="box">
                            <img src={item.img} alt="" />
                        </div>

                    })
                }
            </div>
        </section>
    );
}
export default Menu;