


import { useState } from 'react'
import ColorDisc from './components/ColorDisc'

import './index.less'


const tabList = [
  {
    key: 1,
    value: '基础色盘'
  },
  {
    key: 2,
    value: '色盘'
  },
  {
    key: 3,
    value: '字体排版'
  },
  {
    key: 4,
    value: '圆角'
  },
  {
    key: 5,
    value: '间距'
  },
  {
    key: 6,
    value: '阴影'
  },
  {
    key: 7,
    value: '动效属性'
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
          <ColorDisc />
        </div>
      </div>
    </div>
  )
}

export default GlobalStyle
