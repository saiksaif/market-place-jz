import React from 'react'
import style from './style.module.scss'
import { Button, Col, Collapse, Rate, Row } from 'antd'
import OverViewImage from '../../assets/images/overView.png'
import TopUser from '../../assets/images/topUser.png'
import Avatar from '../../assets/images/avatar2.png'
import Avatar2 from '../../assets/images/avatar1.png'
import Avatar3 from '../../assets/images/avatar4.png'
import Sellerimg from '../../assets/images/sellerImg.png'
import Sellerimg1 from '../../assets/images/sellerImg1.png'
import Sellerimg2 from '../../assets/images/sellerImg2.png'
import LeftArrow from '../../assets/images/arrowLeft.png'
import LikeIcon from '../../assets/images/like.png'
import SuggestedGig from '../../assets/images/suggestedGig.png'
import SuggestedGig1 from '../../assets/images/suggestedGig1.png'
import SuggestedGig2 from '../../assets/images/suggestedGig2.png'
import SuggestedGig3 from '../../assets/images/suggestedGig3.png'
import Image from 'next/image'

const OverView = () => {
  return (
    <div>
      <Row gutter={40} className={style.overViewMainContainer}>
        <Col span={24} xl={11} lg={24}>
          <div>
            <div className="d-flex justify-content-between">
              <Button className={style.topBtn}>2 Order in Progress</Button>
              <Button className={style.topBtn}>{'Music & Audio > Music Composin'}g</Button>
            </div>
            <p className={style.overViewDesc}>I will organize your vocal music with best background music</p>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonLabel}>Response Time Avg</h1>
              <h1 className={style.commonValue}>1 hours</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonLabel}>Language</h1>
              <h1 className={style.commonValue}>Bangla, English</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonLabel}>Started Selling</h1>
              <h1 className={style.commonValue}>November 2022</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonLabel}>Last Delivery</h1>
              <h1 className={style.commonValue}>18 hours ago</h1>
            </div>
            <div className="d-flex justify-content-between mt-5 align-items-center">
              <Button className={style.viewBtn}>View Profile</Button>
              <div className='d-flex'>
                <div>
                  <h1 className={style.userName}>Rahim Alie</h1>
                  <h1 className={style.userValue}>Top Rated </h1>
                </div>
                <Image src={TopUser} alt="top-user" height={62} width={62} />
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} xl={13} lg={24}>
          <div>
            <Image src={OverViewImage} alt="overViewImage" className='img-fluid' />
            <Button className={style.continueBtn}>Continue</Button>
          </div>
        </Col>
      </Row>
      <Row gutter={30}>
        <Col span={24} xl={24} className={style.gigBtnsContainer}>
          <Button className={style.gigBtn}>Gig Specification</Button>
          <Button className={style.gigOtherBtn}>Review</Button>
          <Button className={style.gigOtherBtn}>FAQ</Button>
          <Button className={style.gigOtherBtn}>Previous Work</Button>
        </Col>
        <Col span={24} xl={9} lg={12} md={24}>
          <div className={style.gigDetailContainer}>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonValue}>2 Hours</h1>
              <h1 className={style.commonLabel}>Response Time Avg.</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonValue}>Bengali, English</h1>
              <h1 className={style.commonLabel}>Language</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonValue}>3 may, 2023</h1>
              <h1 className={style.commonLabel}>Started Selling</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonValue}>3 Days Ago</h1>
              <h1 className={style.commonLabel}>Last Delivery</h1>
            </div>
            <div className="d-flex justify-content-between mt-4 align-items-center">
              <Button className={style.viewBtn}>View Profile</Button>
              <div className='d-flex'>
                <div>
                  <h1 className={style.userName}>Rahim Alie</h1>
                  <h1 className={style.userValue}>Top Rated </h1>
                </div>
                <Image src={TopUser} alt="top-user" height={62} width={62} />
              </div>
            </div>
            <p className={style.description}>Lorem ipsum dolor ut labore sit amet, consectetur adipiscing elit,
              sed do eiusmod  Lorem ipsum dolor ut labore sit amet, consectetur
              adipiscing elit, sed do  ame   eiusmod tempor incididunt  eiusmod
              tempor incididuntut labore tempor incididunt  eiusmod tempor incididuntut labore
            </p>
            <Button className={style.continueBtn}>Order Now</Button>
            <div className="d-flex justify-content-between mt-5">
              <h1 className={style.commonValue}>Basic</h1>
              <h1 className={style.commonLabel}>Package</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonValue}>$50</h1>
              <h1 className={style.commonLabel}>Price</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonValue}>28 Days</h1>
              <h1 className={style.commonLabel}>Delivery time</h1>
            </div>
            <div className="d-flex justify-content-between">
              <h1 className={style.commonValue}>2</h1>
              <h1 className={style.commonLabel}>Extra assets</h1>
            </div>
          </div>
        </Col>
        <Col span={24} xl={15} lg={12} md={24}>
          <div className={style.specificationContainer}>
            <h1 className={style.title}>Gig Specification</h1>
            <p className={style.description}>We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film, video game, advertisement, or podcast].
            </p>
            <h1 className={style.gigTitle}>Responsibilities:</h1>
            <p className={style.description}>
              Compose original music tracks that align with the project&apos;s requirements.
              Collaborate with the project team to understand their vision and incorporate their
            </p>
            <h1 className={style.gigTitle}>Deliverables:</h1>
            <p className={style.description}>
              A set number of fully composed and mixed tracks (specify the required length and number of tracks).
              High-quality audio files in the specified format
            </p>
            <h1 className={style.gigTitle}>Timeline:</h1>
            <p className={style.description}>
              Specify the project duration and key milestones,
              including deadlines for initial drafts, revisions, and final delivery.
            </p>
            <h1 className={style.gigTitle}>Budget:</h1>
            <p className={style.description}>
              Clearly define the budget for the project or indicate that
              it will be discussed with interested composers individually
            </p>
            <h1 className={style.gigTitle}>Qualifications:</h1>
            <p className={style.description}>
              Proven experience as a music composer, with a portfolio of previous
              work showcasing a range of styles and genres.Proficiency in music composition software
            </p>
          </div>
        </Col>
      </Row>
      <div className={style.extrasContainer}>
        <h1 className={style.title}>Extras</h1>
        {[1, 2, 3]?.map((idx) => {
          return (
            <div key={idx} className='d-flex justify-content-between mt-5'>
              <div className='d-flex'>
                <h1 className={style.extrasAmount}>$4</h1>
                <h1 className={style.extrasDays}>2days</h1>
              </div>
              <div>
                <h1 className={style.extrasDes}>Boost Your Web 2.0s with 100 HQ Do follow backlinks(Recommended)</h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className={style.reviewContainer}>
        <h1 className={style.title}>Client’s Reviews about the Seller</h1>
        <div>
          <div className='d-flex'>
            <div style={{ width: "95%", marginRight: "20px" }}>
              <h1 className={style.userName}>Willium Watson</h1>
              <h1 className={style.userCity}>United Kingdom</h1>
            </div>
            <Image src={Avatar} alt='Avatar' />
          </div>
          <div className={style.reviewRating}>
            <div className='d-flex justify-content-between'>
              <h1 className={style.reviewTime}>16days go</h1>
              <div className={style.ratingStar}>
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <h1 className={style.rating}>5.0</h1>
              </div>
            </div>
            <p className={style.reviewDescription}>
              Certainly! Guns N&apos; Roses is a legendary rock band known for their energetic performances and iconic songs.
              However, as an AI text-based model, I don&apos;t have the ability to listen to the music directly.
            </p>
          </div>
        </div>
        <div>
          <div className='d-flex'>
            <div style={{ width: "95%", marginRight: "20px" }}>
              <h1 className={style.userName}>Ema Watson</h1>
              <h1 className={style.userCity}>Canada</h1>
            </div>
            <Image src={Avatar2} alt='Avatar' />
          </div>
          <div className={style.reviewRating}>
            <div className='d-flex justify-content-between'>
              <h1 className={style.reviewTime}>16days go</h1>
              <div className={style.ratingStar}>
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <h1 className={style.rating}>5.0</h1>
              </div>
            </div>
            <p className={style.reviewDescription}>
              Certainly! Guns N&apos; Roses is a legendary rock band known for their energetic performances and iconic songs.
              However, as an AI text-based model, I don&apos;t have the ability to listen to the music directly.
            </p>
          </div>
        </div>
        <div>
          <div className='d-flex'>
            <div style={{ width: "95%", marginRight: "20px" }}>
              <h1 className={style.userName}>Ema Watson</h1>
              <h1 className={style.userCity}>Canada</h1>
            </div>
            <Image src={Avatar2} alt='Avatar' />
          </div>
          <div className={style.reviewRating}>
            <div className='d-flex justify-content-between'>
              <h1 className={style.reviewTime}>16days go</h1>
              <div className={style.ratingStar}>
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <Rate disabled defaultValue={1} count={1} />
                <h1 className={style.rating}>5.0</h1>
              </div>
            </div>
            <p className={style.reviewDescription}>
              Certainly! Guns N&apos; Roses is a legendary rock band known for their energetic performances and iconic songs.
              However, as an AI text-based model, I don&apos;t have the ability to listen to the music directly.
            </p>
          </div>
        </div>
      </div>
      <div className={style.faqContainer}>
        <h1 className={style.title}>Frequently Asked Questions</h1>
        <Collapse
          items={[{
            key: '1', label: '1. Why I take your Service?', children: <p>
              We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film,
              video game, advertisement, or podcast]. We require unique and captivating music
              that enhances the overall experience and complements the project&apos;s theme and mood.</p>
          }]}
        />
        <Collapse
          items={[{
            key: '1', label: '2. What kind of instuments you gonna use?', children: <p>
              We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film,
              video game, advertisement, or podcast]. We require unique and captivating music
              that enhances the overall experience and complements the project&apos;s theme and mood.</p>
          }]}
        />
        <Collapse
          items={[{
            key: '1', label: '3. What will be the final output of the project?', children: <p>
              We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film,
              video game, advertisement, or podcast]. We require unique and captivating music
              that enhances the overall experience and complements the project&apos;s theme and mood.</p>
          }]}
        />
        <Collapse
          items={[{
            key: '1', label: '4. Can I use the song in Commercial use?', children: <p>
              We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film,
              video game, advertisement, or podcast]. We require unique and captivating music
              that enhances the overall experience and complements the project&apos;s theme and mood.</p>
          }]}
        />
        <Collapse
          items={[{
            key: '1', label: '5. Can I use the song in Commercial use?', children: <p>
              We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film,
              video game, advertisement, or podcast]. We require unique and captivating music
              that enhances the overall experience and complements the project&apos;s theme and mood.</p>
          }]}
        />
        <Collapse
          items={[{
            key: '1', label: '6. Can I use the song in Commercial use?', children: <p>
              We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film,
              video game, advertisement, or podcast]. We require unique and captivating music
              that enhances the overall experience and complements the project&apos;s theme and mood.</p>
          }]}
        />
        <Collapse
          items={[{
            key: '1', label: '7. Can I use the song in Commercial use?', children: <p>
              We are seeking a skilled music composer to create original compositions for [Project Name].
              The project is a [brief description of the project, such as a short film,
              video game, advertisement, or podcast]. We require unique and captivating music
              that enhances the overall experience and complements the project&apos;s theme and mood.</p>
          }]}
        />
      </div>
      <div className={style.sellerContainer}>
        <h1 className={style.title}>Seller Previous Works</h1>
        <Row gutter={20}>
          <Col span={24} xl={8} lg={12} md={24}>
            <div>
              <Image src={Sellerimg} alt='sellerimg' className='img-fluid' sizes='100%' />
              <p className={style.sellerDes}>Expert in Data Entry | Lead Generation | WordPress | Shopify | Wix</p>
            </div>
          </Col>
          <Col span={24} xl={8} lg={12} md={24}>
            <div>
              <Image src={Sellerimg1} alt='sellerimg' className='img-fluid' sizes='100%' />
              <p className={style.sellerDes}>Expert in Data Entry | Lead Generation | WordPress | Shopify | Wix</p>
            </div>
          </Col>
          <Col span={24} xl={8} lg={12} md={24}>
            <div>
              <Image src={Sellerimg2} alt='sellerimg' className='img-fluid' sizes='100%' />
              <p className={style.sellerDes}>Expert in Data Entry | Lead Generation | WordPress | Shopify | Wix</p>
            </div>
          </Col>
          <Col span={24} xl={24} className='text-end'>
            <Button className={style.viewBtn}>View All Works</Button>
          </Col>
        </Row>
      </div>
      <div className={style.suggestedGigContainer}>
        <div className='d-flex justify-content-between'>
          <Image src={LeftArrow} alt='leftArrow' />
          <h1 className={style.title}>Suggested GIG</h1>
        </div>
        <Row gutter={20}>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig2} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig3} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig1} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig2} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig3} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
          <Col span={24} xl={6} lg={12} md={24} className='mb-5'>
            <div>
              <Image src={SuggestedGig1} alt='suggestedgig' className="img-fluid" />
              <div className={style.detailContainer}>
                <div className='d-flex justify-content-between'>
                  <div className={style.ratingStar}>
                    <Rate disabled defaultValue={1} count={1} />
                    <h1 className={style.rating}>4.5</h1>
                    <h1 className={style.ratingValue}>(10)</h1>
                  </div>
                  <div className='d-flex'>
                    <div className='me-3'>
                      <h1 className={style.sellerName}>Rahim Alie</h1>
                      <h1 className={style.sellerValue}> Top Rated Seller</h1>
                    </div>
                    <Image src={Avatar3} alt='avatar' />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className={style.likeImgContainer}>
                    <Image src={LikeIcon} alt='likeIcon' />
                  </div>
                  <div className='d-flex align-items-center'>
                    <h1 className={style.priceLabelStyle}>Starting Price</h1>
                    <h1 className={style.priceStyle}>$350</h1>
                  </div>
                </div>
                <p className={style.detailDes}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div >
  )
}

export default OverView
