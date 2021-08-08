import React,{useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from '../../assets/images/fondo.png'
import Chat from '../../assets/images/video_chat_2_.svg'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#1AA0E6 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '14px',
    opacity: 1,
    height: '70px',
  },
  blTitulo:{
    textAlign: 'left',
    font: "normal normal bold 84px/99px Roboto",
    letterSpacing: '0px',
    color: '#222222',
    opacity: '1',
    marginTop: '0',
    marginBottom: '0',
    paddingLeft: '3rem',
    paddingTop: '6rem'

  },
  blDescripcion:{
    textAlign: 'left',
    font: "normal normal normal 34px/40px Roboto",
    letterSpacing: '0px',
    color:'#222222',
    marginTop: '0',
    marginBottom: '0',
    paddingLeft: '3rem'
  },
  textPacificoAzul:{
    textAlign: 'left',
    font: 'normal normal normal 34px/40px Pacifico',
    letterSpacing: '0px',
    color: '#00A0E6',
  },
  textTituloLogin: {
    top: '279px',
    left: '1377px',
    width: '391px',
    height: '147px',
    textAlign: 'left',
    font: 'normal normal normal 84px/147px Pacifico',
    letterSpacing: '0px',
    color: '#00A0E6',
    opacity: '1',
    marginTop: '0rem',
    marginBottom: '0',
  }
}));

export default function Login() {
    const url = "https://reqres.in/api/"
    const classes = useStyles();
    const [datosForm, setDatosForm] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(false)


    const iniciarSession = () =>{
        console.log(datosForm)
        axios.post(url + "login",{
            "email": datosForm.email,
            "password": datosForm.password
        })
        .then((res)=> {
            console.log(res)
            window.location.href = "/usuarios";
        })
    }

  const handleChange = e => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
    if(datosForm.email === '' || datosForm.password === '') {
        setError(true)
      console.log("error")
    }else{
        iniciarSession(datosForm)
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <p className={classes.blTitulo}>
            Bienvenido
        </p>
        <p className={classes.blDescripcion}>
            A <span className={classes.textPacificoAzul}>Contáctame</span> nuestra plataforma, donde podrás tener acceso a todos tus amigos con solo un clic.
        
        </p>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
            <img src={Chat} alt="Chat" />
            <h1 className={classes.textTituloLogin}>
                Contáctame
            </h1>

          <form className={classes.form} noValidate  onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="usuario"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  .
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Olvide mi contraseña"}
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >

                        Email: "eve.holt@reqres.in"
                    </Typography>
              </Grid>
              <Grid item>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                        password: "cityslicka"
                    </Typography>
              </Grid>
            </Grid>
            { error ? <Alert severity="error">Todos los campos son obligatorios</Alert> : null }

                
               
              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ingresar
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}