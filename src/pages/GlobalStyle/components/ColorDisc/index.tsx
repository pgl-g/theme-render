/**
 * 色盘
 */
import React, { useState } from 'react';


import { colorDiscList, COLOR_KEY, COLOR_VAL } from './container';

import './index.less'




const ColorDisc: React.FC = () => {
  const [colorChooseIndex, setColoChooseIndex] = useState(COLOR_KEY.PARAMS);

  return (
    <div className='colorDisc'>
      <div className='colorDisc_center'>
        {
          colorDiscList.map((listCol, i) => (
            <div className='main_1_item' key={i}>
              <span className='item_title'>{listCol.key}</span>
              <div>
                {
                  listCol.child.map((childCol, iChild) => (
                    <div
                      className={`item_list ${colorChooseIndex === childCol.key && 'active'}`}
                      key={iChild}
                      onClick={() => setColoChooseIndex(childCol.key)}
                    >
                      <div className={`item_list_color ${childCol.key}`}></div>
                      <div className='item_list_label'>{childCol.value}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className='colorDisc_right'>
        <div className='show_color'>
          <span>{COLOR_VAL[colorChooseIndex]}</span>
          <input type="text" disabled value={"主要颜色"} placeholder='暂无描述' />
        </div>
      </div>
    </div>
  )
}

export default ColorDisc;