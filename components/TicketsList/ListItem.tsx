import React, { FC } from 'react';
import { Chip, createStyles, Grid, makeStyles, Typography, IconButton, Button} from '@material-ui/core';
import { Ticket } from '../../shared/types';
import { format } from 'date-fns';
import Hidden from '@material-ui/core/Hidden';  //Added by Vidyasagar Aithal to handle the responsiveness
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'; //Added by Vidyasagar Aithal for the deleteButton


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
    // Styles for the labels which are displayed on small screens | Authored by Vidyasagar Aithal
    smallTextStyle: {
      marginBottom: 2,
      display: 'block',
      fontWeight: 'bold'
    },
    // Styles for the labels which are displayed on small screens | Authored by Vidyasagar Aithal
    buttonPosition: {
      marginLeft: '15%',
      marginTop: '5%'
    }
  })
);

const formatToDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};  
// Asynchronous function to handle the delete onClick event to delete an item from the ticket list | Added by Vidyasagar Aithal
async function deleteItem(id: number): Promise<void> {
  const r = confirm("Are you sure of deleting the ticket?");
  if (r == true) {
    const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const resource = await response.json();
    /* As it was not rerendering the updated list once after the deletion. 
    I have used plain JavaScript document getElement to remove the deleted element. 
    This is obviously not an ideal way as it may affect the virtual DOM in React and might raise an exception.
    I am new to this Prisma and would like to learn more about it and get experience on the same. */
    const node = document.getElementById(id);
    // To check if it is not null
    if(node){
      console.log(node)
      node.remove();
    }
    // return { props: { ...resource } };
    return await resource;
  } 
  else {
    console.log("Nothing")
  }
  
};

const ListItem: FC<Ticket> = ({ id, user, status, createdAt, dueDate }) => {
  const classes = useStyles();
 
  const createdAtFormatted = formatToDate(createdAt);
  const dueDateFormatted = formatToDate(dueDate);

  return (
    <React.Fragment>
       {/* To be rendered on large screens and removed on the small and extra-small screens */}
      <Hidden only={['sm', 'xs']}>
        <Grid container className={classes.root} id={id}>
          <Grid item xs={2} container >
            <Typography className={classes.text}>{id}</Typography>
          </Grid>
          <Grid item xs={2} container>
            <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
          </Grid>
          <Grid item xs={2} container>
            <Typography className={classes.text}>{createdAtFormatted}</Typography>
          </Grid>
          <Grid item xs={2} container>
            <Typography className={classes.text}>{dueDateFormatted}</Typography>
          </Grid>
          <Grid item xs={2} container>
            <Chip label={status} className={classes.status} />
          </Grid>
          <Grid item xs={2} container>
            {/* Button delete and an onClick function to delete an item | Added by Aithal */}
            <IconButton aria-label="delete" onClick= {() => deleteItem(id)}>
                <DeleteOutlineIcon fontSize="small"/>
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      {/* To be rendered on small screens and removed on the large and medium screens */}
      <Hidden only={['lg', 'md']}>
        <Grid container className={classes.root} id={id}>
          <Grid item xs={6} >
            <Typography className={classes.smallTextStyle} color="textSecondary" variant="caption" >
              ID
            </Typography>
            <Typography className={classes.text} >{id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.smallTextStyle} color="textSecondary" variant="caption" >
                Requested by
            </Typography>
            <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.smallTextStyle} color="textSecondary" variant="caption" >
                Create date
            </Typography>
            <Typography className={classes.text} >{createdAtFormatted} </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.smallTextStyle} color="textSecondary"  variant="caption">
                Due date
            </Typography>
            <Typography className={classes.text}>{dueDateFormatted}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.smallTextStyle} color="textSecondary" variant="caption" >
              Status
            </Typography>
            <Chip label={status} className={classes.status} />
          </Grid>
          <Grid item xs={6}>
            {/* Button delete and an onClick function to delete an item | Added by Aithal */}
            <IconButton className={classes.buttonPosition} size="small"onClick= {() => deleteItem(id)}>
                <DeleteOutlineIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
    </React.Fragment>
    
  );
};

export { ListItem };
