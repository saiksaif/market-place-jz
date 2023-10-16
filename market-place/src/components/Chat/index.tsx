import React, { useState } from 'react'
import style from './style.module.scss'
import { Col, Input, Rate, Row } from 'antd'
import ChatProfile from '../../assets/images/chatProfile.png'
import ProfileStatus from '../../assets/images/profileStatus.png'
import Avatar from '../../assets/images/avatar.png'
import Avatar1 from '../../assets/images/avatar1.png'
import Avatar2 from '../../assets/images/avatar2.png'
import Avatar3 from '../../assets/images/avatar3.png'
import Avatar4 from '../../assets/images/avatar4.png'
import Avatar5 from '../../assets/images/cAvatar10.png'
import Avatar6 from '../../assets/images/cAvatar6.png'
import Avatar7 from '../../assets/images/cAvatar7.png'
import Avatar8 from '../../assets/images/cAvatar8.png'
import Avatar9 from '../../assets/images/cAvatar9.png'
import Smily from '../../assets/images/Smiley.png'
import LinkIcon from '../../assets/images/LinkSimple.png'
import PlanIcon from '../../assets/images/PlaneIcon.png'
import {
    CaretDownFilled,
    CaretUpFilled,
    MoreOutlined
} from '@ant-design/icons'
import Image from 'next/image'

const Chat = () => {

    const [visible, setVisible] = useState(true)

    const Conversations = [
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar1
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar2
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar3
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar4
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar5
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar6
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar7
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar8
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar9
        },
        {
            name: "moulud1997",
            des: "I will create ac...",
            time: "3m",
            icon: Avatar7
        },
    ]

    const ChatData = [
        {
            name: "muhammad_jabed_",
            message: "So you have more chances to get sell",
            icon: Avatar,
            type: "receive",
            time: "Sep 08, 4.40pm"
        },
        {
            name: "Me",
            message: "So you have more chances to get sell",
            icon: "",
            type: "send",
            time: ""
        },
        {
            name: "muhammad_jabed_",
            message: "So you have more chances to get sell",
            icon: Avatar,
            type: "receive",
            time: "Sep 08, 4.40pm"
        },
        {
            name: "Me",
            message: "So you have more chances to get sell",
            icon: "",
            type: "send",
            time: ""
        },
        {
            name: "muhammad_jabed_",
            message: "So you have more chances to get sell",
            icon: Avatar,
            type: "receive",
            time: "Sep 08, 4.40pm"
        },
    ]

    return (
        <div className={style.chatContainer}>
            <Row gutter={20}>
                <Col span={24} xl={6} lg={12} md={24}>
                    <div className={style.profileOverViewContainer}>
                        <Image src={ChatProfile} alt='chat profile' className={style.profilePic} />
                        <h1 className={style.profileName}>muhammad_jabed_</h1>
                        <h1 className={style.profileRole}>New Seller</h1>
                        <h1 className={style.profileOrder}>Order <span>(Active)</span></h1>
                        <div className={style.profileStatusContainer}>
                            <Image src={ProfileStatus} alt='profile status' className='img-fluid' />
                            <div>
                                <h1 className={style.statusTitle}>In Progress</h1>
                                <h1 className={style.statusDate}>Due on: 18 Jan</h1>
                            </div>
                        </div>
                        <h1 className={style.profileAbout}>About</h1>
                        <div className='d-flex justify-content-between'>
                            <h1 className={style.profileRole}>Review:</h1>
                            <h1 className={style.profileRate}>
                                <Rate disabled defaultValue={1} count={1} /> 5.0
                                <span> (4) </span>
                            </h1>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h1 className={style.profileRole}>Average Respose Time :</h1>
                            <h1 className={style.profileRate}>1h.</h1>
                        </div>
                    </div>
                </Col>
                <Col span={24} xl={12} lg={24} md={24}>
                    <div className={style.chatHeaderContainer}>
                        <MoreOutlined color='white' />
                        <div>
                            <h1 className={style.profileName}>muhammad_jabed_</h1>
                            <h1 className={style.profileRole}>Local time sep 15, 4:04 Am | Last seen 39m ago</h1>
                        </div>
                    </div>
                    <div className={style.chatContainer}>
                        {ChatData?.map((item, index) => {
                            const isSend = item?.type == "send" ? true : false
                            return (
                                <div
                                    className={style.chatStyleContainer}
                                    key={index}
                                    style={{ justifyContent: isSend ? "flex-end" : "flex-start" }}
                                >
                                    <div className={style.chatInnerContainer}>
                                        <div className={style.chatStyle}>
                                            {item?.icon &&
                                                <Image src={item?.icon} alt='avatar' height={54} width={54} />
                                            }
                                            <div className={`${style.chatBox} ${isSend && style.sendBox}`}>
                                                <h1 className={style.chatName}>{item?.name || "---"}</h1>
                                                <p className={style.chatMessage}>{item?.message || "--"}</p>
                                            </div>
                                        </div>
                                        {item?.time && <p className={style.timeStyle}>{item?.time}</p>}
                                    </div>
                                </div>
                            )
                        })}
                        <div className={style.chatInputContainer}>
                            <Image src={Smily} alt='smily' />
                            <h1 className={style.slash}>|</h1>
                            <Image src={LinkIcon} alt='link' />
                            <Input placeholder='00' />
                            <Image src={PlanIcon} alt='plan' />
                        </div>
                    </div>
                </Col>
                <Col span={24} xl={6} lg={12} md={24}>
                    <div className={style.AllConversationContainer}>
                        <h1 className={style.conversationStyle} onClick={() => setVisible(!visible)}>
                            All Conversations
                            <span> (25)</span>
                            {visible ? <CaretDownFilled /> : <CaretUpFilled />}
                        </h1>
                    </div>
                    {Conversations?.map((item, index) => {
                        return (
                            <div
                                className={style.conversationContainer}
                                key={index}
                                style={{ visibility: visible ? "visible" : "hidden" }}
                            >
                                <h1 className={style.timeStyle}>{item?.time || "--"}</h1>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <h1 className={style.nameStyle}>{item?.name || '---'}</h1>
                                        <h1 className={style.desStyle}>{item?.des || "--"}</h1>
                                    </div>
                                    <Image
                                        src={item?.icon}
                                        alt='conversation icon'
                                        height={50}
                                        width={50}
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default Chat
