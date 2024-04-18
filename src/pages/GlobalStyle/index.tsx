


import { useState } from 'react'
import ColorDisc from './components/ColorDisc'
import Typography from './components/Typography'
import Rounded from './components/Rounded'
import Shadow from './components/Shadow'

import './index.less'


const tabList = [
  {
    key: 1,
    value: '色盘'
  },
  {
    key: 2,
    value: '字体排版'
  },
  {
    key: 3,
    value: '圆角'
  },
  {
    key: 4,
    value: '阴影'
  },

]

function GlobalStyle() {
  // 色盘
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className='container'>
      <div className='container_main'>
        {/* tab动态切换 */}
        <div className='left_silder'>
          {
            tabList.map(item => (
              <div
                key={item.key}
                className={`tab_l ${currentIndex === item.key && 'active'}`}
                onClick={() => setCurrentIndex(item.key)}>
                {item.value}
              </div>
            ))
          }
        </div>
        <div className='right_wrapper'>
          {/* 色盘 */}
          {1 === currentIndex && <ColorDisc />}
          {/* 字体排版 */}
          {2 === currentIndex && <Typography />}
          {/* 圆角 */}
          {3 === currentIndex && <Rounded />}
          {/* 阴影 */}
          {4 === currentIndex && <Shadow />}
        </div>
      </div>
    </div>
  )
}

export default GlobalStyle
