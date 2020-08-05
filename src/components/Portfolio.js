import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 700,
      height: 550,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const tileData = [
    {
        title: "Adventure Challenge", 
        img: "https://i.imgur.com/dpoJZ5S.jpg",
        link: "https://github.com/junymc/adventure_challenge"
    },
    {
        title: "My Love Shoes", 
        img: "https://i.imgur.com/hyJwBdY.png",
        link: "https://github.com/junymc/my-love-shoes"
    },
    {
        title: "Party Planner", 
        img: "https://i.imgur.com/6DSgkSh.jpg",
        link: "https://github.com/junymc/rails_project_party_planner"
    },
    {
        title: "Movie Review", 
        img: "https://i.imgur.com/6DSgkSh.jpg",
        link: "https://github.com/junymc/sinatra-project-movie-review"
    }
]

export default function Portfolio() {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <GridList cellHeight={220} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Projects</ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                        title={tile.title}

                        actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} target="_blank" rel="noopener" href={tile.link} >
                                <GitHubIcon />
                            </IconButton>
                        }
                    />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}
