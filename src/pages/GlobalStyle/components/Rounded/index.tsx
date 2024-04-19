/**
 * 圆角
 */
import React, { useState } from 'react';


import { roundedList, ROUNDEDNAME } from './container';

import './index.less'




const Rounded: React.FC = () => {
  const [roundedIndex, setRoundedIndex] = useState(ROUNDEDNAME.FULL)

  return (
    <div className='rounded'>
      <div className='rounded_center'>
        <div className='center_warper_item'>
          <span className='item_title'>圆角</span>
          <div>
            {
              roundedList.map(item => (
                <div className={`item_list ${roundedIndex === item.key && 'active'}`} key={item.key} onClick={() => setRoundedIndex(item.key)}>
                  <div className='text'>A</div>
                  <div className={`flex_1`}>{item.name}</div>
                  <div className='px'>{item.px}</div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className='rounded_right'>
        <div className='show_content_item'>
          <span>xxxxx</span>
          <input type="text" disabled value={"主要颜色"} placeholder='暂无描述' />
        </div>
      </div>
    </div>
  )
}

export default Rounded;