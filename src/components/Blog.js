import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    card: {
        maxWidth: '230px',
        padding: theme.spacing(1)
    },

    gridList: {
        paddingTop: '5%',
        paddingLeft: '7%',
        width: '1100px',
        height: '640px',
        justifyContent: 'space-around',
    },
}));

const blogData = [
    {
    title: "New learning field - React Native",
    date: "July 30, 2020",
    content: "After graduating Flatiron School, I’ve been trying to find more things to study to extend my skills.",
    link: "https://junymc.github.io/new_learning_field_-_react_native"
    },
    {
    title: "Thoughts about technology",
    date: "March 19, 2020",
    content: "I was born in Korea in the early 1980s. I don’t have many memories from the 1980s, but I do remember that the 1988 Seoul Olympics were a big deal.",
    link: "https://junymc.github.io/thoughts_about_technology"
    },
    {
    title: "React/Redux : Adventure Challenge",
    date: "March 15, 2020",
    content: "Four weeks into my React/Redux project and it’s finally done!",
    link: "https://junymc.github.io/final_project_for_flatiron_-_react_redux"
    },
    {
    title: "Looking back my Graphic Design projects",
    date: "February 19, 2020",
    content: "I always was interested in art and design. I wanted to go to a High School that focused on Art & Design growing up in Korea,",
    link: "https://junymc.github.io/looking_back_my_graphic_design_projects"
    },
    {
    title: "javascript project: Shoe Collection SPA",
    date: "January 6, 2020",
    content: "I finally moved another step closer to becoming a programmer. Throughout my time at Flatiron,",
    link: "https://junymc.github.io/javascript_project_shoe_collection_spa"
    },
    {
    title: "Rails Project - Party Planner",
    date: "October 29, 2019",
    content: "This project was really hard for me. Rails is a very powerful framework, but in order to use this magical tool it still requires a lot of skill to utilize it.",
    link: "https://junymc.github.io/rails_project_-_party_planner"
    },
    {
    title: "Sinatra Project Movie-Review",
    date: "August 17, 2019",
    content: "I really enjoyed completing this project and felt I learned more than our initial project with CLI.",
    link: "https://junymc.github.io/sinatra_project_movieview"
    },
    {
    title: "Ruby CLI Data Gem Project: LasVegasEvent",
    date: "May 27, 2019",
    content: "I finally compeleted my very first project! Initially, I was scared to build a working program from scratch by myself.",
    link: "https://junymc.github.io/ruby_cli_data_gem_project_lasvegasevent"
    }
]

export default function Blog() {
    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <GridList cellHeight={310} spacing={3} className={classes.gridList}>
                {blogData.map((blog) => (
                <Card className={classes.card}>
                    <CardHeader  
                        title={blog.title}
                        subheader={blog.date}
                    />
                    <CardContent >
                        <Typography variant="body2" color="textSecondary" component="p">
                           {blog.content}
                        </Typography>
                        <span className="blogLink">Read More</span>
                        {
                            <IconButton aria-label="goBlog" target="_blank" rel="noopener" href={blog.link}>
                                <NavigateNextIcon />
                            </IconButton>
                        }
                    </CardContent>
                </Card>
                ))}
            </GridList>
        </div>
    )   
}