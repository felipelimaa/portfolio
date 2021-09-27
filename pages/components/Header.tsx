
import { 
  Menu,
  Layout
} from 'antd'

import { 
  LinkedinFilled, 
  GithubFilled, 
  InstagramFilled, 
  MailFilled
} from '@ant-design/icons'

const { Header } = Layout

const HeaderBar = () => {
  return (
    <>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" style={{ justifyContent: 'flex-end'}}>
          <Menu.Item key={1}><LinkedinFilled style={{fontSize: '20px'}} /></Menu.Item>
          <Menu.Item key={2}><GithubFilled style={{fontSize: '20px'}} /></Menu.Item>
          <Menu.Item key={3}><InstagramFilled style={{fontSize: '20px'}} /></Menu.Item>
          <Menu.Item key={4}><MailFilled style={{fontSize: '20px'}} /></Menu.Item>
        </Menu>
      </Header>
    </>
  )
}

export default HeaderBar