import React from 'react'
import style from './style.module.scss'
import { Button, Col, Row } from 'antd'
import CommunityPic from '../../assets/images/community.png'
import Image from 'next/image'
import Avatar from '../../assets/images/avatar.png'
import { ClockCircleOutlined } from '@ant-design/icons'
import { CommunityData } from './dammyData'

const Community = () => {
  return (
    <div>
      <div className={style.communityContainer}>
        <h1 className={style.title}>Community</h1>
        <div className='d-flex align-items-cener'>
          <Button className={style.registerBtn}>Register</Button>
          <Button className={`${style.registerBtn} ${style.signInBtn}`}>Sign In</Button>
        </div>
      </div>
      <div>
        <Image src={CommunityPic} alt='communityPic' className='img-fluid' />
      </div>
      <div className={style.communityMenu}>
        <Button className={style.emmptyBtn}> Post</Button>
        <h1>Gig Request</h1>
        <h1>General Topics</h1>
        <h1>Admin Notifications</h1>
        <h1>User Stories</h1>
      </div>
      <div className={style.communityListContainer}>
        {CommunityData?.map((item, index) => {
          return (
            <Row className={style.communityListInnerContainer} key={index}>
              <Col span={24} xl={12} lg={12} md={24} className='d-flex'>
                <Image src={item?.SPic} alt="avatr" />
                <div className='ms-3'>
                  <h1 className={style.nameStyle}>{item?.SName || "---"}</h1>
                  <p className={style.timeStyle}> <ClockCircleOutlined /> {item?.STime || "---"}</p>
                </div>
              </Col>
              <Col span={24} xl={12} lg={12} md={24} className='d-flex justify-content-end'>
                <div className='me-3 '>
                  <h1 className={`text-end ${style.nameStyle}`}>{item?.EName || "---"}</h1>
                  <p className={`text-end ${style.timeStyle}`}> <ClockCircleOutlined /> {item?.ETime || "---"}</p>
                </div>
                <Image src={item?.EPic} alt="avatr" />
              </Col>
              <Col span={24} xl={24} className={style.communityDesStyle}>
                {item?.description || "---"}
              </Col>
            </Row>
          )
        })}
      </div>
    </div>
  )
}

export default Community
