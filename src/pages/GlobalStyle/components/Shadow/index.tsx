/**
 * 阴影
 */
import React, { useState } from 'react';
import { Typography } from '@xlion/component';

import { shadowList, SHADOWNAME } from './container';

import './index.less'





const Shadow: React.FC = () => {
  const [roundedIndex, setRoundedIndex] = useState(SHADOWNAME.shadow0)

  return (
    <div className='shadow'>
      <div className='shadow_center'>
        <div className='center_warper_item'>
          <span className='item_title'>阴影</span>
          <div>
            {
              shadowList.map(item => (
                <div className={`item_list ${roundedIndex === item.key && 'active'}`} key={item.key} onClick={() => setRoundedIndex(item.key)}>
                  <div className='text'>A</div>
                  <div className={`flex_1`}>{item.name}</div>
                  <Typography.Text
                    style={{ width: 120, textAlign: 'right' }}
                    ellipsis={{
                      tooltip: item.px,
                    }}
                  >
                    {item.px}
                  </Typography.Text>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className='shadow_right'>
        <div className='show_content_item'>
          <span>xxxxx</span>
          <input type="text" disabled value={"主要颜色"} placeholder='暂无描述' />
        </div>
      </div>
    </div>
  )
}

export default Shadow;