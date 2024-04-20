
export enum HEADER_TITLE {
  HEADER_1 = 'Header-1',
  HEADER_2 = 'Header-2',
  HEADER_3 = 'Header-3',
  HEADER_4 = 'Header-4',
  HEADER_5 = 'Header-5',
  HEADER_6 = 'Header-6',
  HEADER_7 = 'small',
  HEADER_8 = 'regular'
}


// 标题
export const headerList = [
  {
    name: HEADER_TITLE.HEADER_1,
    px: '32',
    lineHeight: '44'
  },
  {
    name: HEADER_TITLE.HEADER_2,
    px: '28',
    lineHeight: '40'
  },
  {
    name: HEADER_TITLE.HEADER_3,
    px: '24',
    lineHeight: '32'
  },
  {
    name: HEADER_TITLE.HEADER_4,
    px: '20',
    lineHeight: '28'
  },
  {
    name: HEADER_TITLE.HEADER_5,
    px: '18',
    lineHeight: '24'
  },
  {
    name: HEADER_TITLE.HEADER_6,
    px: '16',
    lineHeight: '22'
  },
]

// 段落
export const paragraphList = [
  {
    name: HEADER_TITLE.HEADER_7,
    px: '12',
    lineHeight: '16'
  },
  {
    name: HEADER_TITLE.HEADER_8,
    px: '14',
    lineHeight: '20'
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