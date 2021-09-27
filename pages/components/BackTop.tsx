import {
  BackTop,
  Button
} from 'antd'

import {
  VerticalAlignTopOutlined
} from '@ant-design/icons'


const BackToTop = () => {
  return(
    <div style={{ height: '600vh', padding: 8 }}>
      <BackTop>
      <Button
        type="primary"
        shape="circle"
        icon={<VerticalAlignTopOutlined />}
        size="large"
      />
      </BackTop>
    </div>
  )
}

export default BackToTop