import "./Body.css"

export default function Body({img, children}) {
    return (
        <div>
            <section className="container-fluid px-0">
                <div className="content row align-items-center">
                    <div className="col-md-6 order-2 order-md-1">
                        <img src={img} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="blurb col-10 col-lg-8 mb-5 mb-md-0">
                                <h2>MUSEUM OF CANDY</h2>
                                    <img src="/imgs/lolli_icon.png" alt="" className="d-none d-lg-inline"/>
                                    {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
