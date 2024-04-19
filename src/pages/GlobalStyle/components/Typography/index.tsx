/**
 * 字体排版
 */

import React, { useState } from 'react';

import { InputNumber, Select } from '@xlion/component';
import { COLOR_KEY, COLOR_VAL } from '../ColorDisc/container';
import { headerList, PX, paragraphList, fontSizeMultipleOptions } from './container';

import './index.less'




const Typography: React.FC = () => {
  const [colorChooseIndex, setColoChooseIndex] = useState(COLOR_KEY.PARAMS);
  // 基准字号
  const [baseFontSize, setBaseFontSize] = useState(12);
  // 行高倍数
  const [lineHeightMultiple, setLineHeightMultiple] = useState(1.4);
  // 字号倍数
  const [fontSizeMultiple, setFontSizeMultiple] = useState('1');
  // 标题
  const [typographyIndex, setTypographyIndex] = useState(PX.TEXT_32);
  // 段落
  const [paragraphIndex, setParagraphIndex] = useState();

  return (
    <div className='typography'>
      <div className='typography_center'>

        {/* 基准字号 */}
        <div className='center_warper_item'>
          <span className='item_title'>基准字号</span>
          <InputNumber min={0} className='baseInputNumber' value={baseFontSize} addonAfter="px" onChange={(val) => setBaseFontSize(val)} />
        </div>

        {/* 行高倍数 */}
        <div className='center_warper_item'>
          <span className='item_title'>行高倍数</span>
          <InputNumber min={0} step={0.1} className='baseInputNumber' value={lineHeightMultiple} addonAfter="px" onChange={(val) => setLineHeightMultiple(val)} />
        </div>

        {/* 字号倍数 */}
        <div className='center_warper_item'>
          <span className='item_title'>字号倍数</span>
          <Select className='fontSizeMultiple' options={fontSizeMultipleOptions} value={fontSizeMultiple} onChange={(val) => setFontSizeMultiple(val)} />
        </div>


        {/* 标题 */}
        <div className='center_warper_item'>
          <span className='item_title'>标题</span>
          <div>
            {
              headerList.map(item => (
                <div key={item.px} className={`item_list ${typographyIndex === item.px && 'active'}`} onClick={() => setTypographyIndex(item.px)}>
                  <div className='text'>A</div>
                  <div className={`flex_1 f_${item.px}`}>{item.name}</div>
                  <div className='px'>{item.px}</div>
                </div>
              ))
            }
          </div>
        </div>

        {/* 段落 */}
        <div className='center_warper_item'>
          <span className='item_title'>段落</span>
          <div>
            {
              paragraphList.map(item => (
                <div key={item.size} className={`item_list ${paragraphIndex === item.size && 'active'}`} onClick={() => setParagraphIndex(item.size)}>
                  <div className='text'>A</div>
                  <div className={`flex_1 f_${item.size}`}>{item.name}</div>
                  <div className='px'>{item.size}</div>
                </div>
              ))
            }
          </div>
        </div>


      </div>
      <div className='typography_right'>
        <div className='show_content_item'>
          <span>Header-2</span>
          <input className='' type="text" disabled value={"XDesign 设计系统"} placeholder='暂无描述' />
        </div>
      </div>
    </div>
  )
}


export default Typography;