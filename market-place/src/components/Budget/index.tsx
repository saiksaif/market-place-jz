import React from 'react'
import style from './style.module.scss'
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select
} from 'antd'

const Budget = () => {
    return (
        <div className={style.budgetContainer}>
            <div className={style.budgetInnerContainer}>
                <h1 className={style.title}>Select Your Budget</h1>
                <p className={style.description}>You’ll get the best ad results with a daily budger of at least <span> USD $5.</span></p>
                <h2 className={style.subTitle}>Boost Your Gig</h2>

                <div className={style.formBlock}>
                    <Form
                        name="Gig Title & KeyWord"
                        autoComplete="off"
                        layout="vertical"

                    >
                        <Row gutter={20} className='flex-row-reverse'>
                            <Col span={24} xl={24} lg={24} md={12} className='mb-4'>
                                <Form.Item
                                    label="Choose Your Gig"
                                    name="gig"
                                    rules={[{ required: true, message: 'Required Field!' }]}

                                >
                                    <Select
                                        labelInValue
                                        placeholder="Website design"
                                        options={[
                                            {
                                                value: 'Value1',
                                                label: 'Value1',
                                            },
                                            {
                                                value: 'Value2',
                                                label: 'Value2',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={24} lg={24} md={12} className='mb-4'>
                                <Form.Item
                                    label="Number of Days for Boost"
                                    name="budgetTitle"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='00' />
                                    <p className={style.costStyle}>The Minimum Cost is $5.00 for 3 Days</p>

                                </Form.Item>
                            </Col>
                            <Col span={24} className='text-end'>
                                <Form.Item wrapperCol={{ span: 24 }}>
                                    <Button htmlType="submit">
                                        Boost Gig
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Budget
