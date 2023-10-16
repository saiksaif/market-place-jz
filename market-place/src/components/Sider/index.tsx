import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import Logo from '../../assets/images/LOGO-HERE.png'
import homeIcon from '../../assets/images/home.png'
import categoryIcon from '../../assets/images/category.png'
import profileIcon from '../../assets/images/profile.png'
import checkoutIcon from '../../assets/images/checkout.png'
import settingIcon from '../../assets/images/setting.png'
import supportIcon from '../../assets/images/support.png'
import personIcon from '../../assets/images/profileimg.png'
import { Row, Col } from 'antd';
import { useRouter } from 'next/router'


const SideBar = () => {
    const router =useRouter();
    const location = typeof window !== 'undefined' ? window.location.pathname :  '/home';
    const menuItems = [
        {
          title: 'Home',
          icon: homeIcon,
          path:'/'
        },
        {
          title: 'Orders',
          icon: categoryIcon,
          path:'/orders'
        },
        {
          title: 'Profile',
          icon: profileIcon,
          path:'/gig'
        },
        {
          title: 'Wallet',
          icon: checkoutIcon,
          path:'/wallet'
        },
        {
          title: 'Boost',
          icon: settingIcon,
          path:'/boost-gig'
        },
        {
          title: 'Community',
          icon: supportIcon,
          path:'/community'
        },
      ];
    return (
        <>
            <div className={style.sidebar}>
                <div className={style.logo}>
                    <Image
                        src={Logo}
                        alt="Logo"
                        className='img-fluid'
                    />
                </div>
                <Row className='mt-4' gutter={20}>
                {menuItems.map((menuItem, idx) => (
        <Col key={idx} span={12} className='mb-2'  >
          <div
          onClick={()=>{router.push(menuItem?.path)}}
            className={`card ${style.cards} ${location == menuItem?.path?.toLowerCase()  ? style.active : ''}`}
          >
            <div className={style.imageblock}>
              <Image
                src={menuItem.icon}
                alt={menuItem.title}
                className='img-fluid'
              />
            </div>
            <h3>{menuItem.title}</h3>
          </div>
        </Col>
      ))}                    <Col span={24} className='mb-2'>
                        <h2>Active People</h2>
                    </Col>
                    <Col span={24} className='mb-2'>
                        <ul className={style.activeList}>
                            {[1, 2, 3].map((item,idx) => (
                                <li key={idx} className='mb-2'><h4 className={style.title}>Nadia Alie_09</h4>
                                    <span>
                                        <Image
                                            src={personIcon}
                                            alt="Profile"
                                            className='img-fluid'
                                        />
                                    </span>
                                </li>
                            ))}

                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SideBar