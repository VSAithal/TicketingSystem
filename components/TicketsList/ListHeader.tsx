import React, { FC } from 'react';
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
    text: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

const ListHeader: FC = () => {
  const classes = useStyles();
  return (
    <Hidden only={['sm', 'xs']}>
        <Grid container className={classes.root}>
          <Grid item xs={2}>
            <Typography className={classes.text}>ID</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.text}>Requested by</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.text}>Create date</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.text}>Due date</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.text}>Status</Typography>
          </Grid>
          <Grid item xs={2}>
            {' '}
          </Grid>
       </Grid>
    </Hidden>
    
  );
};

export { ListHeader };
