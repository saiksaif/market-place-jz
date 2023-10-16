import React, { useState } from 'react'
import style from './style.module.scss'
import { Step, Stepper } from 'react-form-stepper'
import { Button, Col, Form, Input, Row } from 'antd'
import checkoutImg from '../../assets/images/checkoutImg.png'
import AtmIcon from '../../assets/images/atmIcon.png'
import AtmIcon1 from '../../assets/images/atmIcon1.png'
import AtmIcon2 from '../../assets/images/atmIcon2.png'
import Image from 'next/image'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const Checkout = () => {
    const [activeOption, setActiveOption] = useState('accountFunds'); // Set the default active option

    const handleOptionChange = (option:string) => {
      setActiveOption(option);
    };
  
    const paymentOptions = [
      { id: 'accountFunds', label: 'Pay with account funds', icon:AtmIcon },
      { id: 'debitCreditCard', label: 'Debit Card / Credit Card', icon: AtmIcon1 },
      { id: 'payWithPayPal', label: 'Pay with PayPal', icon: AtmIcon2 },
      // Add more payment options as needed
    ];
    return (
        <div className={style.checkoutMainContainer}>
            <Stepper activeStep={1} dir='rtl'>
                <Step label="Success" />
                <Step label="Payment" />
                <Step label="Checkout" />
            </Stepper>
            <div className={style.checkoutContainer}>
                <h1 className={style.title}>Confirm Checkout</h1>
                <div className={style.editContainer}>
                    <Row>
                        <Col span={24} xl={12} lg={12} md={24}>
                            <div className='d-flex align-items-center'>
                                <Image src={checkoutImg} alt='checkoutImg' className='img-fluid' />
                                <div>
                                    <h1 className={style.editDes}>I will organize your vocal music with best
                                        background music & optimizer
                                    </h1>
                                    <h1 className={style.pkgStyle}>Basic Package <span>$500</span></h1>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} xl={12} lg={12} md={24} className='text-end'>
                            <Button className={style.pkgBtn}> <EditOutlined /> Edit Package</Button><br />
                            <Button className={style.deleteBtn}> <DeleteOutlined /> Delete</Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={style.paymentFormContainer}>
                <Row gutter={30}>
                    <Col span={24} xl={15} lg={24}>
                        <div className={style.paymentContainer}>
                            <h1 className={style.title}>Payment Method</h1>
                            <div className='d-flex justify-content-between'>
                            {paymentOptions.map((option) => (
        <label key={option.id} className={`${style.paymentStyle}`}>
          <input
            type="radio"
            name="paymentOption"
            value={option.id}
            checked={activeOption === option.id}
            onChange={() => handleOptionChange(option?.id)}
          />
          <div className={`${style.title}`}>
            {option.label}
            <Image src={option.icon} alt='atm'  />
          </div>
        </label>
      ))}
    </div>
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
                                            label="Card Number"
                                            name="cardNumber"
                                            rules={[{ required: true, message: 'Required Field!' }]}
                                        >
                                            <Input placeholder='1234  5678  954  65' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} xl={12} lg={24} md={12} className='mb-4'>
                                        <Form.Item
                                            label="CVV"
                                            name="cvv"
                                            rules={[{ required: true, message: 'Required Field!' }]}
                                        >
                                            <Input placeholder='*********' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} xl={12} lg={24} md={12} className='mb-4'>
                                        <Form.Item
                                            label="Expiry Date"
                                            name="expiryDate"
                                            rules={[{ required: true, message: 'Required Field!' }]}
                                        >
                                            <Input placeholder='10/2023' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} xl={24} lg={24} md={12} className='mb-4'>
                                        <Form.Item
                                            label="Card Holder Name"
                                            name="cardHolderName"
                                            rules={[{ required: true, message: 'Required Field!' }]}
                                        >
                                            <Input placeholder='Johson Watson' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col span={24} xl={9} lg={24}>
                        <div className={style.orderDetailContainer}>
                            <h1 className={style.title}>Order Detail</h1>
                            <div className={style.detailBoxContainer}>
                                <div className='d-flex justify-content-between'>
                                    <h1 className={style.commonLabel}>$500.00</h1>
                                    <h1 className={style.commonValue}>Gig Price</h1>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h1 className={style.commonLabel}>$10.00</h1>
                                    <h1 className={style.commonValue}>Service Charge</h1>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h1 className={style.commonLabel}>$10.00</h1>
                                    <h1 className={style.commonValue}>Tax & Vat </h1>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <h1 className={style.totalLabel}>$520.00</h1>
                                    <h1 className={style.commonValue}>Total </h1>
                                </div>
                                <Button className={style.continueBtn}>Continue to Checkout</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Checkout
