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
    px: '0px 2px 4px 0px rgba( 28,31,35 , 0.08)',
    name: `shadow-${SHADOWNAME.shadow2}`
  },
  {
    key: SHADOWNAME.shadowKnob,
    px: '0px 4px 6px 0px rgba( 28,31,35 , 0.08)',
    name: `shadow-${SHADOWNAME.shadowKnob}`
  },
  {
    key: SHADOWNAME.shadowElevated,
    px: '0px 0px 1px 0px rgba( 28,31,35 , 0.08)',
    name: `shadow-${SHADOWNAME.shadowElevated}`
  },
]