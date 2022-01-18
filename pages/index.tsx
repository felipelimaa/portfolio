import type { NextPage } from 'next'

import {
  Layout,
  Image,
  PageHeader,
  Button
} from 'antd'

import {
  PhoneOutlined
} from '@ant-design/icons';

const { Content } = Layout

import BackToTop from './components/BackTop'
import HeaderBar from './components/Header/Header'

import styles from '../styles/Header.module.css'
import Banner from './components/Banner/Banner';

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <Banner />

  
      <Layout>
        <Content style={{ padding: '0 50px', marginTop: 80 }}>
          <div className={styles.siteLayoutContent}>
            <PageHeader
              title="Felipe Lima"
              className="site-page-header"
              avatar={{ src: 'https://avatars.githubusercontent.com/u/17260306?v=4' }}
            >
            </PageHeader>
          </div>
        </Content>

        <BackToTop />

      </Layout>
    </>
  )
}

export default Home
