
export enum PX {
  TEXT_32 = '32px',
  TEXT_28 = '28px',
  TEXT_24 = '24px',
  TEXT_20 = '20px',
  TEXT_18 = '18px',
  TEXT_16 = '16px',
}


// 标题
export const headerList = [
  {
    name: 'Header-1',
    px: PX.TEXT_32
  },
  {
    name: 'Header-2',
    px: PX.TEXT_28
  },
  {
    name: 'Header-3',
    px: PX.TEXT_24
  },
  {
    name: 'Header-4',
    px: PX.TEXT_20
  },
  {
    name: 'Header-5',
    px: PX.TEXT_18
  },
  {
    name: 'Header-6',
    px: PX.TEXT_16
  },
]



export enum paragraphSize {
  SIZE_12 = '12px',
  SIZE_14 = '14px',
}
// 段落
export const paragraphList = [
  {
    name: 'small',
    size: paragraphSize.SIZE_12
  },
  {
    name: 'small',
    size: paragraphSize.SIZE_14
  }
]


// 字号倍数
export const fontSizeMultipleOptions = [
  {
    value: '1',
    label: 'Semi默认排版设置',
  },
  {
    value: '2',
    label: '1.618 - Golden Ratio',
  },
  {
    value: '3',
    label: '1.500 - Perfect Fifth',
  },
  {
    value: '4',
    label: '1.414 - Augmented Fourth',
  },
  {
    value: '5',
    label: '1.333 - Perfect Fifth',
  },
  {
    value: '6',
    label: '1.250 - Major Second',
  },
  {
    value: '7',
    label: '1.200 - Major Second',
  },
  {
    value: '8',
    label: '1.125 - Major Second',
  },
];