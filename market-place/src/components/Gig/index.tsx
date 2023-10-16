import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import GigExport from '../../assets/images/gigExportIcon.png'
import GigHeart from '../../assets/images/gigHeartIcon.png'
import TopUser from '../../assets/images/topUser.png'
import UserProject from '../../assets/images/userProject.png'
import UserServices from '../../assets/images/userServices.png'
import UserRating from '../../assets/images/userRating.png'
import GigImage from '../../assets/images/gigPic.png'
import Avatar from '../../assets/images/avatar2.png'
import Avatar1 from '../../assets/images/avatar4.png'
import Avatar2 from '../../assets/images/avatar1.png'
import { Button, Col, Input, Pagination, Rate, Row } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const Gig = () => {
const router = useRouter();
    const { TextArea } = Input;

    return (
        <div className={style.gigMainContainer}>
            <div className={style.gigHeadContainer}>
                <div className='d-flex align-items-center'>
                    <h1 className={style.title}>Save</h1>
                    <Image src={GigExport} alt="gigExport" />
                </div>
                <div className='d-flex align-items-center'>
                    <h1 className={style.title}>Share</h1>
                    <Image src={GigHeart} alt="gigExport" />
                </div>
            </div>
            <Row gutter={20} className={style.ratingContainer}>
                <Col span={24} xl={15} lg={15} md={24}>
                    <div className={style.topRatingContainer}>
                        <div className={style.btnContainer}>
                            <Button>Top Rated</Button>
                        </div>
                    </div>
                    <div className={style.topRatedUserContainer}>
                        <div className={style.topRatedUser}>
                            <h1 className={style.userName}>Rahim Alie</h1>
                            <h1 className={style.userSkill}>UI/UX Designer | Graphic Designer</h1>
                            <h1 className={style.userMail}>freelancer12@gmail.com <span> <MailOutlined /></span></h1>
                            <div className='d-flex justify-content-end'>
                                <Button className={style.userBtn}>Contact</Button>
                                <Button className={style.userBtn}>Follow</Button>
                            </div>
                        </div>
                        <div>
                            <Image src={TopUser} alt="topUser" />
                        </div>
                    </div>
                    <div className={style.userReportContainer}>
                        <div className='d-flex'>
                            <div className='me-3'>
                                <h1 className={style.reportTitle}>Project Success</h1>
                                <h1 className={style.reportValue}>05</h1>
                            </div>
                            <Image
                                src={UserProject}
                                alt="userProject"
                                style={{ height: "60px", width: "60px" }}
                            />
                        </div>
                        <div className='d-flex'>
                            <div className='me-3'>
                                <h1 className={style.reportTitle}>Total Services</h1>
                                <h1 className={style.reportValue}>05</h1>
                            </div>
                            <Image
                                src={UserServices}
                                alt="userProject"
                                style={{ height: "60px", width: "60px" }}
                            />
                        </div>
                        <div className='d-flex'>
                            <div className='me-3'>
                                <h1 className={style.reportTitle}>Completed Services</h1>
                                <h1 className={style.reportValue}>05</h1>
                            </div>
                            <Image
                                src={UserRating}
                                alt="userProject"
                                style={{ height: "60px", width: "60px" }}
                            />
                        </div>
                    </div>
                </Col>
                <Col span={24} xl={9} lg={9} md={24}>
                    <div className={style.userDetailContainer}>
                        <Row>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userData}>Bangladesh</h1>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userLabel}>From</h1>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userData}>November 22</h1>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userLabel}>Member Since</h1>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userData}>18 hours ago</h1>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userLabel}>Last Delivery</h1>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userData}>1 hours</h1>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={24}>
                                <h1 className={style.userLabel}>Response Time</h1>
                            </Col>
                            <Col span={24} xl={24} lg={24} md={24}>
                                <h1 className={`text-end mt-5 ${style.userData}`}>About</h1>
                                <h1 className={`mb-5 ${style.userLabel}`}>
                                    Lorem ipsum dolor ut labore sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    eiusmod tempor incididuntut labore
                                </h1>

                            </Col>
                            <Col span={24} xl={24} lg={24} md={24}>
                                <h1 className={`text-end mt-5 ${style.userData}`}>Rating</h1>
                                <div className={style.ratingStar}>
                                    <h1 className={style.ratingValue}>(10)</h1>
                                    <h1 className={style.rating}>4.9</h1>
                                    <Rate disabled defaultValue={1} count={1} />
                                    <Rate disabled defaultValue={1} count={1} />
                                    <Rate disabled defaultValue={1} count={1} />
                                    <Rate disabled defaultValue={1} count={1} />
                                    <Rate disabled defaultValue={1} count={1} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div className={style.gigsContainer}>
                <h1 className={style.title}>My Gigs</h1>
                <Row gutter={20}>
                    {[1, 2, 3, 4, 4, 4]?.map((idx) => {
                        return (
                            <Col key={idx} span={24} xl={8} lg={12} md={24} onClick={()=>{router.push('/gig-overview')}}>
                                <div style={{ marginTop: "40px" }}>
                                    <Image src={GigImage} alt='GigImage' className='img-fluid' />
                                    <h1 className={style.gigDes}>Web design/Landing page. Fitter life from Vitalix Fitness</h1>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <div className={style.gigCardpagination}>
                    <Pagination defaultCurrent={1} total={1200} />
                </div>
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
                            <h1 className={style.userName}>Rahim Alie</h1>
                            <h1 className={style.userCity}>Seller</h1>
                        </div>
                        <Image src={Avatar1} alt='Avatar' />
                    </div>
                    <div className={style.reviewRating}>
                        <p className={style.reviewDescription}>
                            Thanks a lot for your honest Feedback! It&apos;s been always pleasure to working with you.
                            It was a great experience. If you have more project don&apos;t forget to contact me. Have a great day.
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
                <div className='text-end'>
                    <h1 className={style.commitTitle}>Your Comment</h1>
                    <TextArea
                        className={style.textAreaStyle}
                        rows={4}
                        placeholder='Write a comment'
                        dir='rtl'
                    />
                    <Button className={style.submitBtn}>Submit Review</Button>
                </div>
            </div>
        </div>
    )
}

export default Gig
