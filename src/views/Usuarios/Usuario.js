import React, {Fragment, useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Sidebar from './../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './ListaUsuarios.css';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
        media: {
        height: 140,
    },
}));
  


const Usuario = (props) => {
    
    const url = "https://reqres.in/api/"
    const classes = useStyles();
    const [usuario, setUsuario] = useState(null);

    console.log(props.match)


    // use Efect

    useEffect(()=>{
        obtenerDatos()
    },[])  

   

    const obtenerDatos = async ()  =>{
        console.log(props.match,"obtener")
        const id = props.match.params.id
        await axios.get(url+ "users/"+  id)
        .then((res)=> {
            console.log(res)
            const dataUsuario = res.data.data
            console.log(dataUsuario)
            setUsuario(dataUsuario)
        })

    }

    // if(!usuarios) return null
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                <div className="content contenedor-full">
                    <div className="bloque">
                        
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={usuario.avatar}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {usuario.first_name}  {usuario.last_name} 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Email:  {usuario.email} 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    
                                    ID: {props.match.params.id}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usuario;