import React from 'react'
import { SocialIcon } from 'react-social-icons'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Divider } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//         paddingTop: '3%',
//         paddingLeft: '7%',
//         width: 800,
//         height: 650,
//     },
//     icon: {
//         color: '#C30B7F',
//     },
//   }));

const projectsData = [
    {
        title: "Adventure Challenge", 
        img: "https://i.imgur.com/dpoJZ5S.jpg",
        link: "https://github.com/junymc/adventure_challenge",
        language: "JaveScript(React), Ruby On Rails, CSS",
        description: "Client-side application that users can follow the listed events and post their experiences"
    },
    {
        title: "My Love Shoes", 
        img: "https://i.imgur.com/hyJwBdY.png",
        link: "https://github.com/junymc/my-love-shoes",
        language: "JavaScript, HTML, Ruby On Rails, CSS",
        description: "Single-page application for tracking and management of personal shoe collection"
    },
    {
        title: "Party Planner", 
        img: "https://i.imgur.com/6DSgkSh.jpg",
        link: "https://github.com/junymc/rails_project_party_planner",
        language: "Ruby On Rails, HTML, CSS",
        description: "Simple app that allows users to create a party as a host and attend parties as a guest"
    },
    {
        title: "Movie Review", 
        img: "https://i.imgur.com/6DSgkSh.jpg",
        link: "https://github.com/junymc/sinatra-project-movie-review",
        language: "Ruby(Sinatra), HTML, CSS",
        description:"Content Management System (CMS) for tracking and management of the movie reviews from users"
    }
]

export default function Portfolio() {

    // const classes = useStyles();

    return(

        <section className="bigbox">
            <div className="title-text">
                <div className="title-text title-text--medium">projects</div>
            </div>

            <div className="row">
            {projectsData.map((project) => (
                <div className="col-1-of-4">
                    <div className="project">
                        <div className="project__side project__side--front">
                            <div>
                                <img src={project.img} alt="Photo" className="project__img"/>
                            </div>
                            <div className="project__title">
                                <span className="project__title-span">{project.title}</span>
                            </div>
                            <div className="project__link">  
                            <IconButton target="_blank" rel="noopener" href={project.link} >
                                <GitHubIcon />
                            </IconButton>
                            </div>
                            <div className="project__language">{project.language}</div>
                        </div>
                       
                    </div>
                </div>
            ))}  
            </div>           
        </section>
       
    
        // <div>
        //     project content
        // </div>
        // <div className={classes.root}>
        //     <GridList cellHeight={250} className={classes.gridList}>
        //         <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        //             <ListSubheader component="div">Projects</ListSubheader>
        //         </GridListTile>
        //         {tileData.map((tile) => (
        //             <GridListTile key={tile.img}>
        //                 <img src={tile.img} alt={tile.title} />
        //             <GridListTileBar
        //                 title={tile.title}

        //                 actionIcon={
        //                     <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} target="_blank" rel="noopener" href={tile.link} >
        //                         <GitHubIcon />
        //                     </IconButton>
        //                 }
        //             />
        //             </GridListTile>
        //         ))}
        //     </GridList>
        // </div>
    )
}
