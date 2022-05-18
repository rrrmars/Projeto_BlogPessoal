import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box, Grid, Typography, TextField, Button, Paper } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/Actions";
import { toast } from 'react-toastify';


function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
    }

    return (
        <Box className='container-login'>
            <Paper elevation={15} className='paperStyle-login'>
                <form onSubmit={logar}>
                    <Box className='box-login'>
                        <Typography variant='h5' align='center' className='loginText'>
                            Login
                        </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    </Box>
                    <Box className='btn'>
                        <Button type='submit' fullWidth variant="contained" className="button">
                            Login
                        </Button>
                    </Box>
                </form>
                <Box>
                    <Typography variant='subtitle1' gutterBottom align='center' className='font'>Não tem uma conta?
                        <Link to='/cadastrousuario' className='login-link-cadastro'>
                            Cadastre-se
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default Login;