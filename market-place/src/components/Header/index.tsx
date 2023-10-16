import React from 'react'
import { Menu, Input } from 'antd'
import style from './style.module.scss'
import { BellOutlined, HeartOutlined } from '@ant-design/icons'
import envelopeicon from '../../assets/images/Letter.png'
import profile from '../../assets/images/profileimg.png'
import Image from 'next/image'

const HeaderSection = () => {

    const menuitems = [
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
    return (

        <>
            <div className={style.mainHeader}>
                <div className={style.topHeader}>
                    <div className={style.icons}>
                        <Image
                            src={profile}
                            alt="Picture of the author"
                            className={style.profile}

                        />
                        <ul>
                            <li className={style.prfilecircle}>
                                <BellOutlined />
                                <span></span>
                            </li>
                            <li>
                                <Image
                                    src={envelopeicon}
                                    alt=""

                                />
                            </li>
                            <li><HeartOutlined /></li>

                        </ul>
                    </div>
                    <div className={style.search}>
                        <Input
                            placeholder='Search'
                            type='search'
                            allowClear
                        />
                    </div>
                </div>
                <div className={style.menuHeader}>
                    <Menu
                        mode="horizontal"
                        items={menuitems.map((item, index) => {
                            return {
                                key: index,
                                label: `${item.title}`,
                            };
                        })}

                    />
                </div>
            </div>
        </>
    )
}
export default HeaderSection
