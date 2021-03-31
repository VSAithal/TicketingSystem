import React, { FC } from 'react';
import { Chip, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { Ticket } from '../../shared/types';
import { format } from 'date-fns';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
    },
    status: {
      width: '101px',
      height: '19px',
      borderRadius: 4,
      fontSize: 11,
      lineHeight: '15px',
      fontWeight: theme.typography.fontWeightBold,
      color: '#FFFFFF',
      backgroundColor: '#5B994C',
    },
  })
);

const formatToDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const ListItem: FC<Ticket> = ({ id, user, status, createdAt, dueDate }) => {
  const classes = useStyles();

  const createdAtFormatted = formatToDate(createdAt);
  const dueDateFormatted = formatToDate(dueDate);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={1}>
        <Typography className={classes.text}>{id}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.text}>{createdAtFormatted}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.text}>{dueDateFormatted}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Chip label={status} className={classes.status} />
      </Grid>
    </Grid>
  );
};

export { ListItem };
