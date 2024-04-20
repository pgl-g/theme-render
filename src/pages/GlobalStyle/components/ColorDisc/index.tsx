/**
 * 色盘
 */
import React, { useState } from 'react';


import { colorDiscList, COLOR_KEY, COLOR_VAL, COLOR_NAME } from './container';

import ColorPicker from '@xc/color-picker';

import './index.less'




const ColorDisc: React.FC = () => {
  // 选中下标
  const [colorChooseIndex, setColoChooseIndex] = useState(COLOR_KEY.PARAMS);

  const [visible, setVisible] = useState<boolean>(false)



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
          <span className='label'>{COLOR_VAL[colorChooseIndex]}</span>
          <input className='input' type="text" disabled value={COLOR_NAME[colorChooseIndex]} placeholder='暂无描述' />
        </div>

        <div className='show_color'>
          <span className='label'>基础色阶引用关系</span>
          <div className='colorPickerBox' onClick={() => setVisible(!visible)}>
            <div className={`item_list_color`}></div>
            <div className='item_list_label'>30,56,69</div>
          </div>
          {
            visible && <ColorPicker />
          }
        </div>
      </div>
    </div>
  )
}

export default ColorDisc;