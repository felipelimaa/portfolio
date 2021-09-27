import type { NextPage } from 'next'

import { 
  Typography, 
  Layout, 
  Menu,
  Timeline,
  PageHeader,
  BackTop,
  Button
} from 'antd'

import { 
  LinkedinFilled, 
  GithubFilled, 
  InstagramFilled, 
  MailFilled, 
  ClockCircleOutlined,
  VerticalAlignTopOutlined
} from '@ant-design/icons'

const { Header, Content } = Layout
const { Title } = Typography

import BackToTop from './components/BackTop'
import HeaderBar from './components/Header'

import styles from '../styles/Header.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Layout className={styles.layout}>
        <HeaderBar />

        <Content style={{ padding: '0 50px', marginTop: 80 }}>
          <div className={styles.siteLayoutContent}>
            <PageHeader
              title="Felipe Lima"
              className="site-page-header"
              avatar={{ src: 'https://avatars.githubusercontent.com/u/17260306?v=4' }}
            >
            </PageHeader>
            <Timeline mode="alternate">
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Timeline.Item>
              <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Technical testing 2015-09-01
              </Timeline.Item>
            </Timeline>
          </div>

          <div className={styles.siteLayoutContent2}>
            <PageHeader
              title="Felipe Lima"
              className="site-page-header"
              avatar={{ src: 'https://avatars.githubusercontent.com/u/17260306?v=4' }}
            >
            </PageHeader>
            <Timeline mode="alternate">
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Timeline.Item>
              <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Technical testing 2015-09-01
              </Timeline.Item>
            </Timeline>
          </div>


          <div className={styles.siteLayoutContent}>
            <PageHeader
              title="Felipe Lima"
              className="site-page-header"
              avatar={{ src: 'https://avatars.githubusercontent.com/u/17260306?v=4' }}
            >
            </PageHeader>
            <Timeline mode="alternate">
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Timeline.Item>
              <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Technical testing 2015-09-01
              </Timeline.Item>
            </Timeline>
          </div>
        </Content>

        <BackToTop />

      </Layout>
    </>
  )
}

export default Home
