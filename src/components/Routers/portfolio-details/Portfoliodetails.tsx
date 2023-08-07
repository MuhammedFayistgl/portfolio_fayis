import React from 'react'

const Portfoliodetails:React.FC = () => {
  return (
    <>
     <div className="hero hero-single route bg-image" style={{ backgroundImage: ` url(assets/img/overlay-bg.jpg)` }}>
    <div className="overlay-mf"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <h2 className="hero-title mb-4">Portfolio Details</h2>
          <ol className="breadcrumb d-flex justify-content-center">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">Portfolio Details</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <main id="main">

    {/* <!-- ======= Portfolio Details Section ======= --> */}
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">

                <div className="swiper-slide">
                  <img src="assets/img/portfolio-details-1.jpg" alt=""/>
                </div>

                <div className="swiper-slide">
                  <img src="assets/img/portfolio-details-2.jpg" alt=""/>
                </div>

                <div className="swiper-slide">
                  <img src="assets/img/portfolio-details-3.jpg" alt=""/>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Portfolio Details Section --> */}

  </main>
  {/* <!-- End #main --> */}
    </>
  )
}

export default Portfoliodetails