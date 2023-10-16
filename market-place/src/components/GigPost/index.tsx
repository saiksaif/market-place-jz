import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Modal, Upload, Radio, Rate } from 'antd'
import style from './style.module.scss'
import { EditOutlined, UploadOutlined } from '@ant-design/icons'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import Image from 'next/image'
import uploadIcon from '../../assets/images/imageUpload.png'
import uploadVideoIcon from '../../assets/images/videoUpload.png'
import Profile from '../../assets/images/profileimg.png'
import thumbnill from '../../assets/images/thumbnill.png'
import Like from '../../assets/images/like.png'
import { Step, Stepper } from 'react-form-stepper'

const { TextArea } = Input;
const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
const GigPost = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([

    ]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadImageButton = (
        <div className={style.uploadBtn}>
            <Image
                src={uploadIcon}
                alt="Video"
                className='img-fluid'
            />
            <div className={style.uploadText}>  <UploadOutlined /> Drop & Drag to Upload Photo</div>
            <div className={style.browseText}>Browse Photo</div>
        </div>
    );

    const uploadVideoButton = (
        <div className={style.uploadBtn}>
            <Image
                src={uploadVideoIcon}
                alt="Image"
                className='img-fluid'
            />
            <div className={style.uploadText}>  <UploadOutlined /> Drop & Drag to Upload Video</div>
            <div className={style.browseText}>Browse Video</div>
        </div>
    );




    return (
        <>
            <div className={style.gigPostpage}>
                
                <Stepper activeStep={1} dir='rtl'>
                    <Step label="Publish Gig" />
                    <Step label="Upload Image" />
                    <Step label="Pricing" />
                    <Step label="Description" />
                    <Step label="Gig Title & Keyword" />
                </Stepper>

                {/* title and keyword  */}
                <div className={style.formBlock}>
                    <h2 className={style.sectionTitle}>Gig Title & Keyword </h2>
                    <Form
                        name="Gig Title & KeyWord"
                        autoComplete="off"
                        layout="vertical"

                    >
                        <Row gutter={20} className='flex-row-reverse'>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Enter Your Gig Title"
                                    name="gigTitle"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='Ex- I will Design your Website in modern way.' />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Select your Gig Category"
                                    name="category"
                                    rules={[{ required: true, message: 'Required Field!' }]}

                                >
                                    <Select
                                        labelInValue
                                        placeholder="Select Gig Categories"
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
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Enter Related Keword"
                                    name="relatedgig"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='Ex- Web Design; UI UX Design: Mobile App UI' />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <div className={style.suggested}>
                                    <h4>Suggested Categories</h4>
                                    <ul>
                                        <li>{'Graphics & Design > Website UI UX Design'}</li>
                                        <li>{'Graphics & Design > Landing Page Design'}</li>
                                        <li>{'Graphics & Design >  Custome Website Design'}</li>

                                    </ul>
                                </div>
                            </Col>
                            <Col span={24} className='text-end'>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button htmlType="submit">
                                        Save & Continue Gig Post
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </div>
                {/* gig description  */}
                <div className={style.formBlock}>
                    <h2 className={style.sectionTitle}> Gig Description</h2>
                    <Form
                        name="Gig Title & KeyWord"
                        autoComplete="off"
                        layout="vertical"

                    >
                        <Row gutter={20} className='flex-row-reverse'>
                            <Col span={24} className='mb-4'>
                                <Form.Item
                                    label="Enter a Honest Gig Description"
                                    name="gigDescription"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <TextArea rows={4} placeholder='EX- Write your Gig Description Here......' />

                                </Form.Item>
                            </Col>
                            <Col span={24} className='text-end'>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button htmlType="submit">
                                        Save & Continue Gig Post
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </div>
                {/* upload iamge and video  */}
                <div className={style.formBlock}>
                    <h2 className={style.sectionTitle}> Upload Gig  Image</h2>
                    <Form
                        name="Gig Title & KeyWord"
                        autoComplete="off"
                        layout="vertical"

                    >
                        <Row gutter={20} className='flex-row-reverse'>
                            <Col span={24} className='mb-5'>
                                <Form.Item
                                // label="Enter a Honest Gig Description"
                                // name="gigDescription"
                                // rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Upload
                                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                    >
                                        {fileList.length >= 8 ? null : uploadImageButton}
                                    </Upload>
                                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>

                                </Form.Item>
                            </Col>
                            <Col span={24}  > <h2 className={style.sectionTitle}> Upload Gig  Video</h2></Col>
                            <Col span={24} className='my-4'>
                                <Form.Item
                                // label="Enter a Honest Gig Description"
                                // name="gigDescription"
                                // rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Upload
                                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                    >
                                        {fileList.length >= 8 ? null : uploadVideoButton}
                                    </Upload>
                                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>

                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </div>
                {/* Gig pricing  */}
                <div className={style.formBlock}>
                    <h2 className={style.sectionTitle}> Gig Pricing</h2>
                    <Form
                        name="Gig Pricing"
                        autoComplete="off"
                        layout="vertical"

                    >
                        <Row gutter={20} className='flex-row-reverse'>
                            <Col span={24} className='mb-4'>
                                <Form.Item
                                // name="radio-button"
                                // label="Radio.Button"
                                // rules={[{ required: true, message: 'Please pick an item!' }]}
                                >
                                    <Radio.Group>
                                        <Radio.Button value="a">Basic Gig Package</Radio.Button>
                                        <Radio.Button value="b">Standard Gig Package</Radio.Button>
                                        <Radio.Button value="c">Premium Gig Package</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>

                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Word Delivery Time"
                                    name="delivery time"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='Ex- 3-5 Days' />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Enter Pricing Name"
                                    name="pricing name"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='Ex-Generel; Silver ' />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Gig Price Amount"
                                    name="priceamount"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='Ex- 3-5 Days' />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Offer work Quantity"
                                    name="work quantity"
                                    rules={[{ required: true, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='Ex - 1 Homepage Design' />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="What you Offer"
                                    name="What you Offer"
                                    rules={[{ required: false, message: 'Optional' }]}
                                >
                                    <Input placeholder='Ex - Prototype, Animation, Free Image & vactors' />
                                </Form.Item>
                            </Col>
                            <Col span={24} xl={12} lg={12} md={12} className='mb-4'>
                                <Form.Item
                                    label="Extra Fast Delivery Charge"
                                    name="delivery charges"
                                    rules={[{ required: false, message: 'Required Field!' }]}
                                >
                                    <Input placeholder='Ex- 3-5 Days ' />
                                </Form.Item>
                            </Col>
                            <Col span={24} className='mb-4'>
                                <Form.Item
                                    label="Pricing Description"
                                    name="gigDescription"
                                    rules={[{ required: false, message: 'Required Field!' }]}
                                >
                                    <TextArea rows={4} placeholder='Ex - Prototype, Animation, Free Image & vactors' />

                                </Form.Item>
                            </Col>
                            <Col span={24} className='text-end'>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button htmlType="submit">
                                        Save & Continue Gig Post
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </div>
                {/* Faq Block  */}
                <div className={style.faqsBlock}>
                    <h2 className={style.sectionTitle}>Add Frequently Asked Questions </h2>
                </div>
                {/* Publish Gig  */}
                <div className={style.formBlock}>
                    <h2 className={style.sectionTitle}> Publish Gig</h2>
                    <div className={style.publishGig}>
                        <div className={`${style.pubishGigCard} d-flex flex-column`}>
                            <div className={style.thumbnilicon}>
                                <Image
                                    src={thumbnill}
                                    alt="thumbnill"
                                    className='img-fluid'
                                />
                            </div>
                            <div className={`${style.content} d-flex flex-column`}>
                                <div className={`${style.top} d-flex justify-content-between gap-1`}>

                                    <div className={`${style.profile} d-flex gap-2 align-items-center`}>
                                        <div className={style.profileImage}>
                                            <Image
                                                src={Profile}
                                                alt="Profile"
                                                className='img-fluid'
                                            />
                                        </div>
                                        <div>
                                            <p className={style.name}>
                                                Rahim Alie
                                            </p>
                                            <p className={style.tagline}>Top Rated Seller</p>
                                        </div>

                                    </div>
                                    <div className={`${style.rating} d-flex align-items-end gap-1`}>
                                        <Rate disabled defaultValue={1} count={1} />
                                        <p>4.5 <span>(10)</span></p>
                                    </div>
                                </div>
                                <div className={`${style.bottom} d-flex flex-column`}>
                                    <div className={`${style.startPrice} d-flex justify-content-between gap-3`}>
                                        <p>$350 <span>Starting Price</span></p>
                                        <div className={style.likeIcon}>
                                            <Image
                                                src={Like}
                                                alt="Like"
                                                className='img-fluid'
                                            />
                                        </div>
                                    </div>
                                    <p className={style.descripton}>I will Convert Psd to HTML, CSS 3, Basic Javascript & Bootstrap Design</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.btnsdiv}>
                            <Button htmlType="submit" className={style.btns}>
                                <EditOutlined /> Edit Gig
                            </Button>
                            <Button htmlType="submit" className={`${style.btns} ${style.btnsPublish}`}>
                                <UploadOutlined />  Publish Gig
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GigPost