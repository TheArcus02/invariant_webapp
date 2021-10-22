import { makeStyles } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles(() => ({
  root: {
    background: 'rgba(36, 35, 41, 0.8)',
    borderRadius: 10,
    padding: '22px 24px',
    width: 500
  },
  tokenComponentTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 8,
    position: 'relative'
  },
  tokenComponentText: {
    color: '#746E7C',
    lineHeight: '12px',
    fontSize: 12
  },
  swapArrowBox: {
    backgroundColor: '#34303B',
    padding: '12px 10px',
    width: 'max-content',
    borderRadius: '100%',
    position: 'absolute',
    zIndex: 2,
    left: '50%',
    top: '0%',
    transform: 'translateX(-50%) translateY(-45%)',
    cursor: 'pointer'
  },
  swapArrows: {
    width: 36,
    height: 24
  },
  rateText: {
    color: colors.navy.veryLightGrey,
    marginTop: 16,
    textAlign: 'right',
    ...typography.subtitle1
  },
  transactionDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    marginBottom: 8,
    cursor: 'pointer'
  },
  transactionDetailsHeader: {
    color: '#746E7C',
    lineHeight: '12px',
    fontSize: 12,
    cursor: 'pointer'
  },
  transactionDetailsInfo: {
    maxHeight: 300,
    transition: 'all .4s',
    backgroundColor: '#1C1C1C',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    color: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 5,
    '& p': {
      fontSize: 16,
      lineHeight: '28px'
    }
  },
  detailsInfoWrapper: {
    height: 'auto'
  },
  detailsInfoForm: {
    border: '1px solid #34303B',
    borderRadius: 5,
    backgroundColor: '#141216',
    padding: '8px 8px',
    marginTop: '8px',
    '&::placeholder': {
      color: '#4D4757'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  detailsInfoBtn: {
    backgroundColor: '#9DD46D',
    borderRadius: 5,
    border: 'none',
    padding: '8px 10px',
    marginLeft: -25
  },
  swapButton: {
    width: '100%',
    height: 60,
    fontSize: 16,
    color: '#ffffff',
    cursor: 'pointer'
  }
}))

export default useStyles
