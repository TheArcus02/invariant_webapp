import { formatNumbers, showPrefix } from '@consts/utils'
import { Button, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './styles'

export interface IRewardsTile {
  tokenXSymbol: string
  tokenYSymbol: string
  minPrice: number
  maxPrice: number
  fee: number
  tokenXDeposit: number
  tokenYDeposit: number
  value: number
  rewardSymbol: string
  onClaimReward: () => void
  rewardIcon: string
  rewardValue: number
}

export const RewardsTile: React.FC<IRewardsTile> = ({
  tokenXSymbol,
  tokenYSymbol,
  minPrice,
  maxPrice,
  fee,
  tokenXDeposit,
  tokenYDeposit,
  value,
  rewardSymbol,
  onClaimReward,
  rewardIcon,
  rewardValue
}) => {
  const classes = useStyle()
  return (
    <Grid className={classes.root} container direction='column'>
      <Grid className={classes.positionInfo} container>
        <Grid className={classes.leftSide} container direction='column'>
          <Grid className={classes.row} container wrap='nowrap'>
            <Typography className={classes.label}>Min price:</Typography>
            <Typography className={classes.value}>
              {formatNumbers()(minPrice.toString())}
              {showPrefix(minPrice)} {tokenXSymbol}/{tokenYSymbol}
            </Typography>
          </Grid>

          <Grid className={classes.row} container wrap='nowrap'>
            <Typography className={classes.label}>Max price:</Typography>
            <Typography className={classes.value}>
              {formatNumbers()(maxPrice.toString())}
              {showPrefix(maxPrice)} {tokenXSymbol}/{tokenYSymbol}
            </Typography>
          </Grid>

          <Grid className={classes.row} container wrap='nowrap'>
            <Typography className={classes.label}>Fee tier:</Typography>
            <Typography className={classes.value}>{fee}%</Typography>
          </Grid>
        </Grid>

        <Grid className={classes.rightSide} container direction='column'>
          <Grid className={classes.row} container wrap='nowrap'>
            <Typography className={classes.label}>{tokenXSymbol} deposit:</Typography>
            <Typography className={classes.value}>
              {formatNumbers()(tokenXDeposit.toString())}
              {showPrefix(tokenXDeposit)}
            </Typography>
          </Grid>

          <Grid className={classes.row} container wrap='nowrap'>
            <Typography className={classes.label}>{tokenYSymbol} deposit:</Typography>
            <Typography className={classes.value}>
              {formatNumbers()(tokenYDeposit.toString())}
              {showPrefix(tokenYDeposit)}
            </Typography>
          </Grid>

          <Grid className={classes.row} container wrap='nowrap'>
            <Typography className={classes.label}>Value:</Typography>
            <Typography className={classes.value}>
              {formatNumbers()(value.toString())}
              {showPrefix(value)} {tokenXSymbol}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography className={classes.profit}>Current profit</Typography>
      <Grid className={classes.tokenContainer}>
        <Grid className={classes.tokenArea}>
          <Grid className={classes.token}>
            <Typography className={classes.tokenName}>
              <CardMedia image={rewardIcon} className={classes.tokenImg} />
              <Typography className={classes.tokenName}>{rewardSymbol}</Typography>
            </Typography>
          </Grid>
          <Typography className={classes.tokenValue}>
            {formatNumbers()(rewardValue.toString())}
            {showPrefix(rewardValue)}
          </Typography>
        </Grid>
        <Button className={classes.claimRewards} onClick={onClaimReward}>
          Claim rewards
        </Button>
      </Grid>
    </Grid>
  )
}

export default RewardsTile
