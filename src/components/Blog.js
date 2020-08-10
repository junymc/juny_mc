import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      height: 700,
    },
    card: {
        maxWidth: 400,
        padding: theme.spacing(3),
    },

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
        gridList: {
        width: 500,
        height: 450,
      },
  }));

  const blogData = [
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      },
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      },
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      },
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      },
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      },
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      },
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      },
      {
        title: "",
        date: "",
        img: "",
        content: "",
        link: ""
      }
  ]

export default function Blog() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
           
            {blogData.map((blog) => (
                
                <GridListTile key={blog.img}>
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton aria-label="goBlog" target="_blank" rel="noopener" href="{}">
                                <ArrowForwardIosIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/paella.jpg"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {blog.content}
                        </Typography>
                    </CardContent>
                    </Card>
                </GridListTile>
                
            ))}
             
            </GridList>
           
        </div>
    )
    
}