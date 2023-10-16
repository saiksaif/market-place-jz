import React from 'react'
import style from './style.module.scss'
import { Row, Col, Button, Carousel, Rate, Pagination } from 'antd'
import slideImage from '../../assets/images/sliderImage.png'
import Image from 'next/image'
import { ArrowLeftOutlined } from '@ant-design/icons'
import countryFlag from '../../assets/images/flag.png'
import Profile from '../../assets/images/profileimg.png'
import thumbnill from '../../assets/images/thumbnill.png'
import Like from '../../assets/images/like.png'
import { useRouter } from 'next/router'


const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <div className={style.FrontPage}>
        {/* Top Welcome  */}
        <Row className='mt-4 mb-5' gutter={20}>
          <Col span={24} lg={8} className='mb-3'>
            <div className={`card ${style.WelcomeCard}`}>
              <h2>Welcome Back !</h2>
              <p>Create a effective Gig according to your skill & Experience. Soon you will get your first order !</p>
              <Button> Create a Gig</Button>
            </div>
          </Col>
          <Col span={24} xl={16} lg={18} className={`mb-3 ${style.topcarousel}`}>
            <Carousel  dots={true}>
              {[1, 2, 3,4].map((item,idx) => (
                <div key={idx} className={style.data}>
                  <Row>
                    <Col span={24} md={8}>
                      <div className={style.slideimage}>
                        <Image
                          src={slideImage}
                          alt="Slide Image"
                          className='img-fluid'
                        />
                      </div>
                    </Col>
                    <Col span={24} md={16} className={style.textdata}>
                      <h3>We always belief in Quality & Experience</h3>
                      <p>Best Marketplace to buy and sell Qualitifull services</p>
                    </Col>
                  </Row>
                </div>
              ))}

            </Carousel>
          </Col>
        </Row>

        {/* Top Rated Freelancer */}
        <Row className='mt-5'>
          <Col span={24} className={`${style.topTitlesection} d-flex justify-content-between flex-wrap w-100 align-items-center gap-2 mb-3`}>
            <div className='d-flex gap-3 align-items-center'>
              <ArrowLeftOutlined />
              <h3>View All</h3>
            </div>
            <h2 className={style.sectionTitle}>Hire Top Rated Freelancers</h2>
          </Col>
        </Row>
        <Row gutter={20} className='mt-3 mb-5'>
          {[1, 2].map((item,idx) => (
            <Col key={idx} span={24} xl={12} className='mb-3'>
              <div className={`${style.freelanceCard} d-flex justify-content-between gap-3`}>
                <div className={`${style.left} d-flex flex-column`}>
                  <h3 className={style.expertTitle}>
                    Web Design & Development Expert
                  </h3>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className={style.rateTitle}>$50 /hour</p>
                    <div className='d-flex flex-column gap-3'>
                      <div className={`${style.rating} d-flex gap-2 align-items-center`}><Rate disabled defaultValue={5} /> <p>4.5</p></div>
                      <div className={`${style.country} d-flex gap-2 align-items-center`}>
                        <Image
                          src={countryFlag}
                          alt="Flag"
                          className='img-fluid'
                        />
                        <p> From United State </p>
                      </div>
                    </div>
                  </div>
                  <div className={`${style.skillbuttons} d-flex gap-2 align-items-center flex-wrap`}>
                    <Button>UI UX Design</Button>
                    <Button>Front-end  Dev.</Button>
                    <Button>PHP</Button>
                    <Button>Laravel</Button>
                  </div>
                </div>
                <div className={style.right}>
                  <div className={style.profileImage}>
                    <Image
                      src={Profile}
                      alt="Profile"
                      className='img-fluid'
                    />
                  </div>
                  <p className={style.profileTitile}>
                    Rahim Alie
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Services Card  */}
        <Row gutter={20} className='mt-5'>
          <Col span={24} className='mb-4'>
            <h2 className={style.sectionTitle}>Browse Services As your Need</h2>
          </Col>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item,idx) => (
            <Col key={idx} span={24} xl={6} lg={8} md={12} className='mb-3'>
              <div onClick={()=>{router.push('/gig-overview')}} className={`${style.serviceCard} d-flex flex-column`}>
                <div className={style.thumbnilicon}>
                  <Image
                    src={thumbnill}
                    alt="thumbnill"
                    className='img-fluid'
                  />
                </div>
                <div className={`${style.content} d-flex flex-column`}>
                  <div className={`${style.top} d-flex justify-content-between gap-1`}>
                    <div className={`${style.rating} d-flex align-items-end gap-1`}>
                      <Rate disabled defaultValue={1} count={1} />
                      <p>4.5 <span>(10)</span></p>
                    </div>
                    <div className={`${style.profile} d-flex gap-2 align-items-center`}>
                      <div>
                        <p className={style.name}>
                          Rahim Alie
                        </p>
                        <p className={style.tagline}>Top Rated Seller</p>
                      </div>
                      <div className={style.profileImage}>
                        <Image
                          src={Profile}
                          alt="Profile"
                          className='img-fluid'
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`${style.bottom} d-flex flex-column`}>
                    <div className={`${style.startPrice} d-flex justify-content-between gap-3`}>
                      <div className={style.likeIcon}>
                        <Image
                          src={Like}
                          alt="Like"
                          className='img-fluid'
                        />
                      </div>
                      <p>$350 <span>Starting Price</span></p>
                    </div>
                    <p className={style.descripton}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className='my-5 text-center'>
          <Col span={24} className='mb-5'>
            <div className={style.servicesCardpagination}>
              <Pagination defaultCurrent={1} total={120} />
            </div>
          </Col>
        </Row>
        {/* skills slider  */}
        <Row className='mt-5'>
          <Col span={24} className={`mb-3 ${style.topcarousel} `}>
            <Carousel dots={true}>
              {[1, 2, 3].map((item,idx) => (
                <div  key={idx} className={`${style.data} ${style.second}`}>
                  <Row>
                    <Col span={24} md={8}>
                      <div className={`py-3 ${style.slideimage}`}>
                        <Image
                          src={slideImage}
                          alt="Slide Image"
                          className='img-fluid'
                        />
                      </div>
                    </Col>
                    <Col span={24} md={16} className={style.textdata}>
                      <h3>We always belief in Quality & Experience</h3>
                      <p>Best Marketplace to buy and sell Qualitifull services</p>
                      <Button> Learn More</Button>
                    </Col>
                  </Row>
                </div>
              ))}

            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HomePage