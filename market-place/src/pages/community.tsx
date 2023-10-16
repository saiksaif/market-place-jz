import style from '../styles/style.module.scss'
import { Layout, Spin } from "antd";
import HeaderSection from "@/components/Header";
import FooterSection from "@/components/Footer";
import SideBar from "@/components/Sider";
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from '@/components/Budget';
import { useEffect, useState } from 'react';
import Community from '@/components/Community';

export default function BoostGigPage() {
  const { Header, Footer, Sider, Content } = Layout;


  return (
      <>
      <div className={style.home}>
<Layout id="home">
          <Layout>
      
            <Content>
              <Community />
            </Content>
            <Footer> <FooterSection /> </Footer>
          </Layout>
          <Sider className={style.CustomSider} ><SideBar /></Sider>
        </Layout>
      </div >
    </>)
  }