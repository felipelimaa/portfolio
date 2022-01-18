
import {
  Menu,
  Layout,
  Typography,
  Avatar
} from 'antd'

import {
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
  MailFilled
} from '@ant-design/icons'

const { Text } = Typography

const { Header } = Layout

//import './styles.css'
import styles from './Header.module.css'

const HeaderBar = () => {

  return (
    <>
      <Header className={styles.portfolioNavHeader}>
        <div className={styles.logo}>
          <Avatar className={styles.avatar} size={36} src="https://avatars.githubusercontent.com/u/17260306?v=4" />
          <Text>Felipe Lima</Text>
        </div>
        <Menu className={styles.portfolioNavMenu} theme="dark" inlineCollapsed={false} mode="horizontal">
          <Menu.Item className={styles.portfolioNavMenuItem} key={1}><LinkedinFilled className={styles.icon} /></Menu.Item>
          <Menu.Item className={styles.portfolioNavMenuItem} key={2}><GithubFilled /></Menu.Item>
          <Menu.Item className={styles.portfolioNavMenuItem} key={3}><InstagramFilled /></Menu.Item>
          <Menu.Item className={styles.portfolioNavMenuItem} key={4}><MailFilled /></Menu.Item>
        </Menu>
      </Header>
    </>
  )
}

export default HeaderBar