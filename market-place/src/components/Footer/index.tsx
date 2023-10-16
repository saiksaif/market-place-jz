import React from 'react'
import { Menu, Row, Col } from 'antd'
import style from './style.module.scss'
import Image from 'next/image'
import seeIcon from '../../assets/images/see.png'
import instagram from '../../assets/images/Instagram.png'
import facebook from '../../assets/images/Facbook.png'
import twitter from '../../assets/images/Twitter.png'
import linkedin from '../../assets/images/Linkedin.png'
import youtube from '../../assets/images/Youtube.png'



const FooterSection = () => {
    const menu1 = [
        {
            'title': 'Technology & Gaming'
        },
        {
            'title': 'Graphics Design'
        },
        {
            'title': 'Digital Marketing'
        },
        {
            'title': 'Writing & Translation'
        },
        {
            'title': 'Music & Audio'
        },
        {
            'title': 'Video & Photo '
        },
        {
            'title': 'AI Services'
        },
        {
            'title': 'Business'
        },


    ]
    const menu2 = [
        {
            'title': 'Career'
        },
        {
            'title': 'About Buyer'
        },
        {
            'title': 'About Seller'
        },
        {
            'title': 'Partnership'
        },
        {
            'title': 'Privacy Policy'
        },
        {
            'title': 'Terms & Conditions'
        },
    ]
    const menu3 = [
        {
            'title': 'Our Courses'
        },
        {
            'title': 'Course Mentors'
        },
        {
            'title': 'About Level & Batch'
        },
        {
            'title': 'Pro Seller'
        },
        {
            'title': 'Selection'
        },
        {
            'title': 'Our Workspce '
        },
    ]
    const menu4 = [
        {
            'title': 'Billing Information'
        },
        {
            'title': 'Checkout Conditons'
        },
        {
            'title': 'Terms of Payments'
        },
        {
            'title': 'Moneyback Conditons'
        },
        {
            'title': 'Community'
        },
        {
            'title': 'Our Blog '
        },
    ]
    return (

        <>
            <div className={`${style.mainFooter} mt-5 `}>
                <div className={style.topFooter}>
                    <Row>
                        <Col span={24} lg={6} md={12}>
                            <div className={style.footerMenu}>
                                <h2 className={style.title}>Categories</h2>
                                <Menu
                                    mode="inline"
                                    items={menu1.map((item, index) => {
                                        return {
                                            key: index,
                                            label: `${item.title}`,
                                        };
                                    })}

                                />
                            </div>
                        </Col>
                        <Col span={24} lg={6} md={12}>
                            <div className={style.footerMenu}>
                                <h2 className={style.title}>About Us</h2>
                                <Menu
                                    mode="inline"
                                    items={menu2.map((item, index) => {
                                        return {
                                            key: index,
                                            label: `${item.title}`,
                                        };
                                    })}

                                />
                            </div>
                        </Col>
                        <Col span={24} lg={6} md={12}>
                            <div className={style.footerMenu}>
                                <h2 className={style.title}>From Marketplace</h2>
                                <Menu
                                    mode="inline"
                                    items={menu3.map((item, index) => {
                                        return {
                                            key: index,
                                            label: `${item.title}`,
                                        };
                                    })}

                                />
                            </div>
                        </Col>
                        <Col span={24} lg={6} md={12}>
                            <div className={style.footerMenu}>
                                <h2 className={style.title}>Others</h2>
                                <Menu
                                    mode="inline"
                                    items={menu4.map((item, index) => {
                                        return {
                                            key: index,
                                            label: `${item.title}`,
                                        };
                                    })}

                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={style.bottomFooter}>
                    <Row>
                        <Col span={24} xl={12} className='mb-3'>
                            <div className='d-lg-flex gap-4'>
                                <h2>SiteLogo</h2>
                                <div className='d-flex align-items-center gap-2'>
                                    <Image
                                        src={seeIcon}
                                        alt="see"
                                        className='img-fluid'
                                    />
                                    <p className='m-0'>Marketplace 2023. All Rights Reserved</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} xl={12} className='mb-3'>
                            <div className='d-md-flex gap-4 justify-content-end align-items-center'>
                                <h4>Social Links</h4>
                                <ul className='d-flex flex-wrap gap-3'>
                                    <li>
                                        <Image
                                            src={instagram}
                                            alt="instagram"
                                            className='img-fluid'
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={facebook}
                                            alt="facebook"
                                            className='img-fluid'
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={twitter}
                                            alt="twitter"
                                            className='img-fluid'
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={linkedin}
                                            alt="linkedin"
                                            className='img-fluid'
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            src={youtube}
                                            alt="youtube"
                                            className='img-fluid'
                                        />
                                    </li>
                                </ul>
                            </div>

                        </Col>
                    </Row>


                </div>
            </div>
        </>
    )
}
export default FooterSection
