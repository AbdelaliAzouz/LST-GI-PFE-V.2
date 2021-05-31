import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRight.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

function SidebarRight() {

    const classes = useStyles();

    return (
        <div className="Sidebar_Right" >
            <div className="Sidebar_Right_Header" >
            <h2>Etablissements</h2>
                <div className="Etablissements">
                        <div className="Location">
                        <LocationOnIcon/>
                        <h6>Tanger</h6>
                        </div>
                    <div className="Etablissement">
                        <Avatar src="data:image/jpeg;base64,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" alt="Logo Etablissement"/>
                        <p>Faculté des Sciences et Techniques</p>
                    </div>
                    <div className="Etablissement">
                        <Avatar src="data:image/jpeg;base64,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"/>
                        <p>École nationale des sciences appliquées</p>
                    </div>
                    <div className="Etablissement">
                        <Avatar src="https://www.uae.ma/website/sites/default/files/styles/actualit_s/public/logo_encgt_actualites.jpg?itok=IM78PpJ-" alt="Logo Etablissement"/>
                        <p>École Nationale de Commerce et de Gestion</p>
                    </div>

                    
                </div>
                
                <h2>Articles</h2>
                <h2>Statistiques</h2>
            </div>
        </div>
    )
}

export default SidebarRight
