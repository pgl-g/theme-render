


import { useState } from 'react'
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

const warpColor = [
  {
    key: 'params',
    child: [
      {
        key: 'default',
        label: '--semi-color-primary'
      },
      {
        key: 'activeCol',
        label: '--semi-color-primary-active'
      },
      {
        key: 'disableCol',
        label: '--semi-color-primary-disable'
      },
      {
        key: 'hoverCol',
        label: '--semi-color-primary-hover'
      },
    ]
  }
]

function GlobalStyle() {
  // 色盘
  const [currentIndex, setCurrentIndex] = useState(1);
  const [colorChanleIndex, setColorChanleIndex] = useState(0);

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
          <div className='main'>
            <div className='main_1'>
              {/* list color */}
              {
                warpColor.map((listCol, i) => (
                  <div className='main_1_item' key={i}>
                    <span className='item_title'>{listCol.key}</span>
                    <div>
                      {
                        listCol.child.map((childCol, iChild) => (
                          <div className={`item_list ${colorChanleIndex === iChild && 'active'}`} key={iChild} onClick={() => setColorChanleIndex(iChild)}>
                            <div className={`item_list_color ${childCol.key}`}></div>
                            <div className='item_list_label'>{childCol.label}</div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='main_2'>
              <div className='show_color'>
                <span>--semi-color-primary</span>
                <input type="text" disabled value={"主要颜色"} placeholder='暂无描述' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalStyle
