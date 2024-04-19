/**
 * 圆角
 */
import React, { useState } from 'react';


import { roundedList, ROUNDEDNAME } from './container';

import './index.less'
import { InputNumber } from '@xlion/component';




const Rounded: React.FC = () => {
  const [roundedIndex, setRoundedIndex] = useState(ROUNDEDNAME.FULL)

  const [roundedPx, setRoundedPx] = useState(9999);

  const [roundedCircleList, setRoundedCircleList] = useState(roundedList)




  // 盒子点击
  const handleActive = (item) => {
    setRoundedIndex(item.key)
    setRoundedPx(item.px)
  }


  // 圆角
  const handleRoundedNumber = (val) => {
    setRoundedPx(val)
    const copyRoundedCircleList = roundedList.slice();
    const resultList = copyRoundedCircleList.map(item => {
      if (item.key === roundedIndex) {
        item.px = val;
      }
      return item
    })
    setRoundedCircleList(resultList);
  }

  return (
    <div className='rounded'>
      <div className='rounded_center'>
        <div className='center_warper_item'>
          <span className='item_title'>圆角</span>
          <div>
            {
              roundedCircleList.map(item => (
                <div
                  className={`item_list ${roundedIndex === item.key && 'active'}`}
                  key={item.key}
                  onClick={() => handleActive(item)}
                >
                  <div className='text'>
                    <div className='borderShow_px'>
                      <div className='borderRec' style={{ borderRadius: `${item.px}px` }}></div>
                    </div>
                  </div>
                  <div className={`flex_1`}>{item.name}</div>
                  <div className='px'>{item.px}px</div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className='rounded_right'>
        <div className='show_content_item'>
          <span className='label'>--semi-border-radius-{roundedIndex}</span>
          <div className='borderBig'>
            <div className='borderRec' style={{ borderRadius: `${roundedCircleList.find(item => item.key === roundedIndex)?.px}px` }}></div>
          </div>
        </div>

        <div className='show_content_item'>
          <span className='label'>圆角</span>
          <InputNumber min={0} className='roundedNumber' value={roundedPx} addonAfter="px" onChange={handleRoundedNumber} />
        </div>
      </div>
    </div>
  )
}

export default Rounded;