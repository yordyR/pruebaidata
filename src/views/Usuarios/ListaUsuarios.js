import React, {Fragment, useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Sidebar from './../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './ListaUsuarios.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '90%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    }
  }));
  


const Listado = ({usuario}) =>{

    return (
        <div>
           
        </div>
    )
}


const ListaUsuarios = () => {
    
    const url = "https://reqres.in/api/"
    const classes = useStyles();
    const [usuarios, setUsuarios] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [datosForm, setDatosForm] = useState({
        name: '',
        job: '',
    })
    const [error, setError] = useState(false)
    const [mensaje, setMensaje] = useState("")
    // use Efect

    useEffect(()=>{
        obtenerDatos()
    },[])  

    const eliminarUsuario = (id) =>{
        console.log(id)
        console.log("hola")
        axios.get(url + "users/" + id)
        .then((res)=> {
            console.log(res)
            const listaUsuarios = res.data.data
            console.log(listaUsuarios)
            obtenerDatos()
            setMensaje("se Ha eliminado el cliente con id: " + id)
        })
    }

    const obtenerDatos = async ()  =>{
        await axios.get(url+ "users")
        .then((res)=> {
            console.log(res)
            const listaUsuarios = res.data.data
            console.log(listaUsuarios)
            setUsuarios(listaUsuarios)
        })

    }
    

    const handleChange = e => {
        setDatosForm({
            ...datosForm,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)


    }
    const crearCliente = e =>{

        e.preventDefault()
        console.log(e)
        console.log(datosForm)
        if(datosForm.name === '' || datosForm.job === '') {
          console.log("error")
          setError(true)
        }else{
          console.log("bien")
            axios.post(url + "users",{
                "name": datosForm.name,
                "job": datosForm.job
            })
            .then((res)=> {
                console.log(res)
                obtenerDatos()
                setMensaje("se Ha creado el cliente")

                setOpen(false)
            })
           
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // if(!usuarios) return null
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="page-wrapper">
                <div className="content contenedor-full">
                    <div className="bloque">

                        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                            Crear cliente
                        </Button>
                        <p>
                            {mensaje}
                        </p>
                        <List className={classes.root}>
                            {usuarios.map(usuario =>  (
                                // <Listado key={usuario.id} usuario={usuario} />
                                <div  key={usuario.id}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={usuario.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={usuario.first_name}
                                            secondary={
                                                <Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                    
                                                        {usuario.email}
                                                    </Typography>
                                                </Fragment>
                                            }
                                        />
                                         <ListItemSecondaryAction >
                                            <IconButton onClick={()=> eliminarUsuario(usuario.id)} edge="end" aria-label="delete">
                                            <DeleteIcon  />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    
                                    <Divider variant="inset" component="li" />
                                </div>
                            ))}
                        </List>
                        <Dialog 
                            open={open} 
                            onClose={handleClose} 
                            aria-labelledby="form-dialog-title"
                            >

                            <DialogTitle id="form-dialog-title">Crear Cliente</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Digita todos los campos para crear el cliente
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="name"
                                label="Nombre"
                                type="text"
                                fullWidth
                                onChange={handleChange}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                name="job"
                                id="job"
                                label="job"
                                type="text"
                                fullWidth
                                onChange={handleChange}
                            />
                              { error ? <Alert severity="error">Todos los campos son obligatorios</Alert> : null }
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={crearCliente} color="primary">
                                crear
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaUsuarios;