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


export const colorDiscList = [
  {
    key: 'params',
    child: [
      {
        key: COLOR_KEY.PARAMS,
        value: COLOR_VAL.PARAMS
      },
      {
        key: COLOR_KEY.ACTIVE,
        value: COLOR_VAL.ACTIVE
      },
      {
        key: COLOR_KEY.DISABLE,
        value: COLOR_VAL.DISABLE
      },
      {
        key: COLOR_KEY.HOVER,
        value: COLOR_VAL.HOVER
      },
    ]
  }
]

