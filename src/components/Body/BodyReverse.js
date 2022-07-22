import './Body.css'

export default function BodyReverse() {
    return (
        <div>
            <section  className="container-fluid px-0">
                <div className="content row align-items-center">
                    <div className="col-md-6 text-center">
                        <div className="row justify-content-center">
                            <div className="blurb col-10 col-lg-8 mb-5 mb-md-0">
                                <h2>MUSEUM OF CANDY</h2>
                                    <img src="/imgs/lolli_icon.png" alt="" className="d-none d-lg-inline"/>
                                    <p class="lead">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                                        beatae, maiores deserunt
                                        in voluptatibus
                                        aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                                        repellat eveniet quidem
                                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                                        autem nam ex deserunt debitis
                                        eaque ratione! Nobis, quidem assumenda.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/imgs/gumball.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </section>
        </div>
    )
}