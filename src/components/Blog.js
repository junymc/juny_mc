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
        title: "New learning field - React Native",
        date: "July 30, 2020",
        content: "After graduating Flatiron School, I’ve been trying to find more things to study to extend my skills. There are so many languages and framworks that people are using to develop web applications.",
        link: "https://junymc.github.io/new_learning_field_-_react_native"
      },
      {
        title: "Thoughts about technology",
        date: "March 19, 2020",
        content: "I was born in Korea in the early 1980s. I don’t have many memories from the 1980s, but I do remember that the 1988 Seoul Olympics were a big deal. After the Olympics, Korea started developing very fast. As a child, our family was financially secure because my dad owned his own business.",
        link: "https://junymc.github.io/thoughts_about_technology"
      },
      {
        title: "Final Project for Flatiron - React/Redux : Adventure Challenge",
        date: "March 15, 2020",
        content: "Four weeks into my React/Redux project and it’s finally done! It felt a lot longer like every other project. They always start as a struggle that later ends with me gaining a lot of useful knowledge and experience.",
        link: "https://junymc.github.io/final_project_for_flatiron_-_react_redux"
      },
      {
        title: "Looking back my Graphic Design projects",
        date: "February 19, 2020",
        content: "I always was interested in art and design. I wanted to go to a High School that focused on Art & Design growing up in Korea, but my dad was really old fashioned and was not open to me working in that industry. ",
        link: "https://junymc.github.io/looking_back_my_graphic_design_projects"
      },
      {
        title: "javascript project: Shoe Collection SPA",
        date: "January 6, 2020",
        content: "I finally moved another step closer to becoming a programmer. Throughout my time at Flatiron, I’d enter every project as if it was the most difficult, only to find out the next project would be even harder.",
        link: "https://junymc.github.io/javascript_project_shoe_collection_spa"
      },
      {
        title: "Rails Project - Party Planner",
        date: "October 29, 2019",
        content: "This project was really hard for me. Rails is a very powerful framework, but in order to use this magical tool it still requires a lot of skill to utilize it. I think I just memorized the syntax and code itself rather than actually understanding the logic. ",
        link: "https://junymc.github.io/rails_project_-_party_planner"
      },
      {
        title: "Sinatra Project Movie-Review",
        date: "August 17, 2019",
        content: "I really enjoyed completing this project and felt I learned more than our initial project with CLI. I also felt more comfortable because I had a better grasp and understanding of what was necessary to finish it.",
        link: "https://junymc.github.io/sinatra_project_movieview"
      },
      {
        title: "Ruby CLI Data Gem Project: LasVegasEvent",
        date: "May 27, 2019",
        content: "I finally compeleted my very first project! Initially, I was scared to build a working program from scratch by myself. I felt as if I was dropped onto an island left with just a knife and an empty backpack.",
        link: "https://junymc.github.io/ruby_cli_data_gem_project_lasvegasevent"
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