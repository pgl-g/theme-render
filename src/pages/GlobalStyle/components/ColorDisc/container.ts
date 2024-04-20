export enum COLOR_KEY {
  PARAMS = 'PARAMS',
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE',
  HOVER = 'HOVER',
}

export enum COLOR_VAL {
  PARAMS = '--semi-color-primary',
  ACTIVE = '--semi-color-active',
  DISABLE = '--semi-color-disable',
  HOVER = '--semi-color-hover',
}

export enum COLOR_NAME {
  PARAMS = '主要颜色',
  ACTIVE = '主要颜色激活态',
  DISABLE = '主要颜色禁用态',
  HOVER = '主要颜色悬浮态',
}


export const colorDiscList = [
  {
    key: 'params',
    child: [
      {
        key: COLOR_KEY.PARAMS,
        value: COLOR_VAL.PARAMS,
        name: COLOR_NAME.PARAMS,
        hexColor: '0, 149, 238, 1'
      },
      {
        key: COLOR_KEY.ACTIVE,
        value: COLOR_VAL.ACTIVE,
        name: COLOR_NAME.ACTIVE,
        hexColor: '0, 99, 167, 1'
      },
      {
        key: COLOR_KEY.DISABLE,
        value: COLOR_VAL.DISABLE,
        name: COLOR_NAME.DISABLE,
        hexColor: '149, 216, 248, 1'
      },
      {
        key: COLOR_KEY.HOVER,
        value: COLOR_VAL.HOVER,
        name: COLOR_NAME.HOVER,
        hexColor: '0, 123, 202, 1'
      },
    ]
  }
]

