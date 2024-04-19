export enum ROUNDEDNAME {
  FULL = 'full',
  LARGE = 'large',
  SMALL = 'small',
  CIRCLE = 'circle',
  MEDIUM = 'medium',
  EXTRASMALL = 'extra-small',
}




export const roundedList = [
  {
    key: ROUNDEDNAME.FULL,
    px: '9999px',
    name: `--semi-border-radius-${ROUNDEDNAME.FULL}`
  },
  {
    key: ROUNDEDNAME.LARGE,
    px: '12px',
    name: `--semi-border-radius-${ROUNDEDNAME.LARGE}`
  },
  {
    key: ROUNDEDNAME.SMALL,
    px: '3px',
    name: `--semi-border-radius-${ROUNDEDNAME.SMALL}`
  },
  {
    key: ROUNDEDNAME.CIRCLE,
    px: '50%',
    name: `--semi-border-radius-${ROUNDEDNAME.CIRCLE}`
  },
  {
    key: ROUNDEDNAME.MEDIUM,
    px: '6px',
    name: `--semi-border-radius-${ROUNDEDNAME.MEDIUM}`
  },
  {
    key: ROUNDEDNAME.EXTRASMALL,
    px: '4px',
    name: `--semi-border-radius-${ROUNDEDNAME.EXTRASMALL}`
  },
]