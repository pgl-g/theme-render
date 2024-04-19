export enum SHADOWNAME {
  shadow0 = '0',
  shadow1 = '1',
  shadow2 = '2',
  shadowKnob = 'knob',
  shadowElevated = 'elevated',
}




export const shadowList = [
  {
    key: SHADOWNAME.shadow0,
    px: 'none',
    name: `shadow-${SHADOWNAME.shadow0}`
  },
  {
    key: SHADOWNAME.shadow1,
    px: 'none',
    name: `shadow-${SHADOWNAME.shadow1}`
  },
  {
    key: SHADOWNAME.shadow2,
    px: '0px 2px 4px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.16)',
    name: `shadow-${SHADOWNAME.shadow2}`
  },
  {
    key: SHADOWNAME.shadowKnob,
    px: '0px 4px 6px 0px rgba(0,0,0,0.10), 0px 0px 1px 0px rgba(0,0,0,0.30)',
    name: `shadow-${SHADOWNAME.shadowKnob}`
  },
  {
    key: SHADOWNAME.shadowElevated,
    px: '0px 0px 1px 0px rgba(0,0,0,0.30), 0px 4px 14px 0px rgba(0,0,0,0.10)',
    name: `shadow-${SHADOWNAME.shadowElevated}`
  },
]