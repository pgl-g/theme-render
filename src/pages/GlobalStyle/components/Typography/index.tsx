/**
 * 字体排版
 */

import React, { useState } from 'react';
import { InputNumber, Select } from '@xlion/component';
import { headerList, HEADER_TITLE, paragraphList, fontSizeMultipleOptions } from './container';
import './index.less'


const Typography: React.FC = () => {
  // 基准字号
  // const [baseFontSize, setBaseFontSize] = useState(12);
  // 行高倍数
  // const [lineHeightMultiple, setLineHeightMultiple] = useState(1.4);
  // 字号倍数
  // const [fontSizeMultiple, setFontSizeMultiple] = useState('1');
  // 标题
  const [typographyIndex, setTypographyIndex] = useState(HEADER_TITLE.HEADER_1);
  // 标题字号
  const [typographyIndexPx, setTypographyIndexPx] = useState(32);
  // 标题行高
  const [typographyLineHeight, setTypographyLineHeight] = useState(44);




  // handle标题/段落
  const handleTitle = (r) => {
    setTypographyIndex(r.name);
    setTypographyIndexPx(r.px);
    setTypographyLineHeight(r.lineHeight)
  }

  // handle size
  const handleFontSize = (val) => {
    setTypographyIndexPx(val);
  }

  const handleLineHeight = (val) => {
    setTypographyLineHeight(val);
  }


  return (
    <div className='typography'>
      <div className='typography_center'>

        {/* 基准字号 */}
        {/* <div className='center_warper_item'>
          <span className='item_title'>基准字号</span>
          <InputNumber min={0} className='baseInputNumber' value={baseFontSize} addonAfter="px" onChange={(val) => setBaseFontSize(val)} />
        </div> */}

        {/* 行高倍数 */}
        {/* <div className='center_warper_item'>
          <span className='item_title'>行高倍数</span>
          <InputNumber min={0} step={0.1} className='baseInputNumber' value={lineHeightMultiple} addonAfter="px" onChange={(val) => setLineHeightMultiple(val)} />
        </div> */}

        {/* 字号倍数 */}
        {/* <div className='center_warper_item'>
          <span className='item_title'>字号倍数</span>
          <Select className='fontSizeMultiple' options={fontSizeMultipleOptions} value={fontSizeMultiple} onChange={(val) => setFontSizeMultiple(val)} />
        </div> */}


        {/* 标题 */}
        <div className='center_warper_item'>
          <span className='item_title'>标题</span>
          <div>
            {
              headerList.map(item => (
                <div
                  key={item.name}
                  className={`item_list ${typographyIndex === item.name && 'active'}`}
                  onClick={() => handleTitle(item)}
                >
                  <div className='text'>A</div>
                  <div className={`flex_1 f_${item.px}`}>{item.name}</div>
                  <div className='px'>{item.px}px</div>
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
                <div
                  key={item.name}
                  className={`item_list ${typographyIndex === item.name && 'active'}`}
                  onClick={() => handleTitle(item)}
                >
                  <div className='text'>A</div>
                  <div className={`flex_1 f_${item.px}`}>{item.name}</div>
                  <div className='px'>{item.px}px</div>
                </div>
              ))
            }
          </div>
        </div>


      </div>
      <div className='typography_right'>
        <div className='show_content_item'>
          <span className='label'>{typographyIndex}</span>
          <div className='showBigClient' style={{ fontSize: `${typographyIndexPx}px`, lineHeight: `${typographyLineHeight}px` }}>XDesign</div>
        </div>


        <div className='show_content_item'>
          <span className='label'>字号</span>
          <InputNumber min={12} className='fontNumber' value={typographyIndexPx} addonAfter="px" onChange={handleFontSize} />
        </div>

        <div className='show_content_item'>
          <span className='label'>行高</span>
          <InputNumber min={0} className='fontNumber' value={typographyLineHeight} addonAfter="px" onChange={handleLineHeight} />
        </div>
      </div>
    </div>
  )
}


export default Typography;