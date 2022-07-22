import "./HeadSection.css"

export default function HeadSection() {
    let headers = []
    for (let i = 0; i < 7; i++) {
        headers.push(<h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>)
    }
    return (
        <div>
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div id="heading-group" className="text-white text-center d-none d-lg-block mt-5">
                            {headers}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src='/imgs/hand2.png' alt=''/>
                    </div>
                </div>
            </section>
        </div>
    )
}
