/**
 * 阴影
 */
import React, { useMemo, useState } from 'react';
import { InputNumber, Typography } from '@xlion/component';

import { shadowList, SHADOWNAME } from './container';

import './index.less'





const Shadow: React.FC = () => {
  // 下标
  const [shadowIndex, setshadowIndex] = useState(SHADOWNAME.shadow0)

  // list
  const [shadowRenderList, setshadowRenderList] = useState(shadowList);
  // X轴
  const [shadowNumberX, setShadowNumberX] = useState(0);

  // Y轴
  const [shadowNumberY, setShadowNumberY] = useState(0)

  // obscure
  const [shadowNumberObscure, setShadowNumberObscure] = useState(0)

  // diffusion
  const [shadowNumberDiffusion, setShadowNumberDiffusion] = useState(0)


  const handleShadowIndex = (item) => {
    setshadowIndex(item.key)
    console.log(item, "item");
  }


  useMemo(() => {
    const copyRoundedCircleList = shadowRenderList.slice();
    const resultList = copyRoundedCircleList.map(item => {
      if (item.key === shadowIndex) {
        item.px = `${shadowNumberX}px, ${shadowNumberY}px, ${shadowNumberObscure}px, ${shadowNumberDiffusion}px`;
      }
      return item
    })
    setshadowRenderList(resultList);
  }, [shadowNumberX, shadowNumberY, shadowNumberObscure, shadowNumberDiffusion])




  return (
    <div className='shadow'>
      <div className='shadow_center'>
        <div className='center_warper_item'>
          <span className='item_title'>阴影</span>
          <div>
            {
              shadowRenderList.map(item => (
                <div className={`item_list ${shadowIndex === item.key && 'active'}`} key={item.key} onClick={() => handleShadowIndex(item)}>
                  <div className='text'>
                    <div className='borderShow_px'>
                      <div className='borderRec' style={{ boxShadow: item.px }}></div>
                    </div>
                  </div>
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
          <span className='label'>shadow-{shadowIndex}</span>
          <div className='borderBig'>
            <div className='borderRec' style={{ boxShadow: shadowRenderList.find(item => item.key === shadowIndex)?.px }}></div>
          </div>
        </div>

        <div className='show_content_item'>
          <span className='label'>阴影</span>
          <div>
            <InputNumber addonBefore="X轴" min={0} className='shadowNumber' value={shadowNumberX} addonAfter="px" onChange={(val) => setShadowNumberX(val)} />
            <InputNumber addonBefore="Y轴" min={0} className='shadowNumber' value={shadowNumberY} addonAfter="px" onChange={(val) => setShadowNumberY(val)} />
            <InputNumber addonBefore="模糊" min={0} className='shadowNumber' value={shadowNumberObscure} addonAfter="px" onChange={(val) => setShadowNumberObscure(val)} />
            <InputNumber addonBefore="扩散" min={0} className='shadowNumber' value={shadowNumberDiffusion} addonAfter="px" onChange={(val) => setShadowNumberDiffusion(val)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shadow;