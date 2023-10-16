import React from 'react';
import style from './style.module.scss';
import { Col, Input, Row, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {Table} from 'antd';
import { columns, data } from './dammyTableData';

const Orders = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className={style.ordersMainContainer}>
            <Row>
                <Col span={24} xl={15} lg={24} md={24} className={style.dropDownContainer}>
                    <Select
                        defaultValue="Buyer"
                        onChange={handleChange}
                        options={[
                            { value: 'admin', label: 'Admin' },
                            { value: 'supplier', label: 'Supplier' },
                            { value: 'buuyer', label: 'Buyer' },
                        ]}
                    />
                    <Select
                        defaultValue="Priority"
                        onChange={handleChange}
                        options={[
                            { value: 'priority', label: 'Priority' },
                            { value: 'priority', label: 'Priority' },
                        ]}
                    />
                    <Input prefix={<SearchOutlined />} placeholder='Search' />

                </Col>
                <Col span={24} xl={9} lg={24} md={24}>
                    <h1 className={style.title}>Manage Your Orders</h1>
                </Col>
            </Row>
            <div className={style.orderTableContainer}>
                <h1 className={style.orderTitle}>Priority Orders for Buyer</h1>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default Orders
