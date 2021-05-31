import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

//Pour le bouton d'eligne sur l'avatar
const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  //Fin

const Sidebar = () => {  
    const classes = useStyles();

    return(
            <div className="sidebar">
                <div className="Sidebar_Top">
                    <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" alt="Background" />
                    {/* <Avatar className="sidebar_avatar " /> */}
                      <div className={classes.root}>
                            <StyledBadge
                                overlap="circle"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt="Abdelali Azouz" src="/" />
                            </StyledBadge>
                        </div>
                    <h3>Abdelali Azouz</h3>
                    <h5>Abdelali.azouz@uae.ac.ma</h5>
                </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Etablissement</p>
                </div>
                <div className="sidebar_stat">
                    <p>Départements</p>
                </div>
                <div className="sidebar_stat">
                    <p>Labo</p>
                </div>
            </div>

                <div className="sidebar_bottom">
                    <h6>Vos Articles</h6>
                    <a href="">Article 1</a>
                    <a href="">Article 2</a>
                    <a href="">Article 3</a>
                    <a><span>Ajouter une article</span><i class="fas fa-plus"></i></a>
                </div>
            </div>
        );
};

export default Sidebar;
