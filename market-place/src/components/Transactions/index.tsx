import React from 'react'
import style from './style.module.scss'
import { CheckCircleOutlined } from '@ant-design/icons'
import Image from 'next/image'
import avatar from '../../assets/images/avatar.png'
import HightIcon from '../../assets/images/highIcon.png'
import LowIcon from '../../assets/images/lowIcon.png'
import MoneyIcon from '../../assets/images/money.png'
import DallorIcon from '../../assets/images/dallorIcon.png'
import PlusIcon from '../../assets/images/PlusCircle.png'
import Avatar1 from '../../assets/images/avatar1.png'
import Avatar2 from '../../assets/images/avatar2.png'
import Avatar3 from '../../assets/images/avatar3.png'
import Avatar4 from '../../assets/images/avatar4.png'
import Avatar5 from '../../assets/images/avatar5.png'
import Arrowleft from '../../assets/images/arrowLeft.png'
import AddIcon from '../../assets/images/add.png'
import CopyIcon from '../../assets/images/copyIcon.png'
import ATM from '../../assets/images/atmCard.png'
import ATM1 from '../../assets/images/atmCard1.png'
import ATM2 from '../../assets/images/atmCard2.png'
import ATM3 from '../../assets/images/atmCard3.png'
import ATM4 from '../../assets/images/atmCard4.png'
import ATM5 from '../../assets/images/atmCard5.png'
import ATM6 from '../../assets/images/atmCard6.png'
import ATM7 from '../../assets/images/atmCard7.png'
import ATM8 from '../../assets/images/atmCard8.png'
import ATM9 from '../../assets/images/atmCard9.png'
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Tabs,
  TabsProps
} from 'antd'
import { transactionHistoryData } from './dammayData'

const Transactions = () => {

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Withdraw',
      children: '',
    },
    {
      key: '2',
      label: 'Add Money',
      children: '',
    },
    {
      key: '3',
      label: 'Pay Now',
      children: '',
    },
  ];

  return (
    <div className={style.transactionsContainer}>
      <Row gutter={20}>
        <Col span={24} xl={11} lg={24} md={24}>
          <div className={style.balanceContainer}>
            <div className={style.balanceStyle}>
              <h1 className={style.title}>Available Balance</h1>
              <h1 className={style.totalAmount}>$56,489.00</h1>
              <div className={style.amountContainer}>
                <h1 className={style.amount}>
                  <Image src={LowIcon} alt='lowIcon' style={{ marginRight: '16px' }} />
                  +5,265.00
                </h1>
                <h1 className={style.amount}>
                  <Image src={HightIcon} alt='highIcon' style={{ marginRight: '16px' }} />
                  -1,546.00
                </h1>
              </div>
            </div>
            <Row gutter={20} className={style.IconsContainer}>
              <Col span={24} xl={8} lg={12} md={24}>
                <div className={style.iconCard}>
                  <Image src={MoneyIcon} alt='moneyIcon' />
                  <h1 className={style.title}>Withdraw</h1>
                </div>
              </Col>
              <Col span={24} xl={8} lg={12} md={24}>
                <div className={style.iconCard}>
                  <Image src={PlusIcon} alt='plusIcon' />
                  <h1 className={style.title}>Add Money</h1>
                </div>
              </Col>
              <Col span={24} xl={8} lg={12} md={24}>
                <div className={style.iconCard}>
                  <Image src={DallorIcon} alt='dalklorIcon' />
                  <h1 className={style.title}>Pay Now</h1>
                </div>
              </Col>
            </Row>
            <div className={style.balanceTransferContainer}>
              <Image src={AddIcon} alt='addICon' />
              <div>
                <h1>Quick Balance Transfer</h1>
                <h2>Connect With all your Card</h2>
              </div>
            </div>
            <div className={style.avatarContainer}>
              <Image src={Arrowleft} alt='arrowLeft' />
              <Image src={Avatar5} alt='avatar5' />
              <Image src={Avatar4} alt='avatar4' />
              <Image src={Avatar3} alt='avatar3' />
              <Image src={Avatar2} alt='avatar2' />
              <Image src={Avatar1} alt='avatar1' />
            </div>
            <div className={style.bankContainer}>
              <h1>Bank Account Number</h1>
              <div className={style.bankNumer}>
                <Image src={CopyIcon} alt='copyICon' />
                <h1 className={style.numberStyle}>009 12345 6789 56</h1>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24} xl={13} lg={24} md={24}>
          <div className={style.withdrawContainer}>
            <div className={style.tabContainter}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
            <div className={style.formBlock}>
              <Form
                name="Gig Title & KeyWord"
                autoComplete="off"
                layout="vertical"

              >
                <Row gutter={20} className='flex-row-reverse'>
                  <Col span={24} xl={24} lg={24} md={12} className='mb-4'>
                    <Form.Item
                      label="Withdraw to"
                      name="number"
                    // rules={[{ required: true, message: 'Required Field!' }]}
                    >
                      <Input placeholder='009 12345 6789 56' />
                      <p className={style.inpputTitle}>Please enter Bank account number</p>
                    </Form.Item>
                  </Col>
                  <Col span={24} xl={24} lg={24} md={12}>
                    <div className={style.dividerStyle}>
                      <h1>Or</h1>
                    </div>
                  </Col>
                  <Col span={24} xl={24} lg={24} md={12}>
                    <div className={style.atmContainer}>
                      <Image src={ATM4} alt='atm4' />
                      <Image src={ATM5} alt='atm5' />
                      <Image src={ATM6} alt='atm6' />
                      <Image src={ATM7} alt='atm7' />
                      <Image src={ATM8} alt='atm8' />
                      <Image src={ATM9} alt='atm9' />
                      <Image src={ATM} alt='atm' />
                      <Image src={ATM1} alt='atm1' />
                      <Image src={ATM2} alt='atm2' />
                      <Image src={ATM3} alt='atm3' />
                    </div>
                  </Col>
                  <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                    <Form.Item
                      label="Subject"
                      name="Subject"
                    // rules={[{ required: true, message: 'Required Field!' }]}
                    >
                      <Input placeholder='Web Design Income' />
                      <p className={style.inpputTitle}>Optional</p>
                    </Form.Item>
                  </Col>
                  <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                    <Form.Item
                      label="Enter Amount"
                      name="budgetTitle"
                    // rules={[{ required: true, message: 'Required Field!' }]}
                    >
                      <Input placeholder='$500' />
                      <p className={style.inpputTitle}>Minimum $50 Required</p>
                    </Form.Item>
                  </Col>
                  <Col span={24} xl={24} lg={24} md={24}>
                    <div className={style.totalAmountContainer}>
                      <h1 className={style.amountStyle}>Subtotal Amount - <span>$550</span></h1>
                      <h1 className={style.amountStyle}>Commission <span>$50</span></h1>
                    </div>
                  </Col>
                  <Col span={24} className='text-end'>
                    <Form.Item wrapperCol={{ span: 24 }}>
                      <Button htmlType="submit">
                        withDraw
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      <div className={style.transactionsHistoryContainer}>
        <h1 className={style.title}>Transactions History</h1>
        <p className={style.descStyle}>Current Transfers</p>
        <div className={style.historyTable}>
          {transactionHistoryData?.map((item, index) => {
            return (
              <div className={style.historyStyle} key={index}>
                <h1 className={style.commonItemStyle}>{item?.amount || "--"}</h1>
                <div className='d-flex'>
                  <CheckCircleOutlined
                    style={{ color: item?.status == "Complete" ? "#069425" : "#FF0000" }}
                  />
                  <h1 className={style.commonItemStyle}>{item?.status || "--"}</h1>
                </div>
                <h1 className={style.commonItemStyle}>{item?.time || "--"}</h1>
                <h1 className={style.commonItemStyle}>{item?.email || "--"}</h1>
                <div className='d-flex align-items-center justify-content-start' style={{ minWidth: '150px' }}>
                  <Image
                    src={avatar}
                    alt="avatar"
                    className='img-fluid'
                  />
                  <h1 className={style.commonItemStyle}>{item?.name || "---"}</h1>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Transactions
