import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from '@material-ui/core';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import './Home.css';
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokenReducers";
import { toast } from "react-toastify";

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            navigate('/login')
        }
    }, [token])
    return (
        <>
            <Box className="container">
                <Grid container direction="row" alignItems="center" className='caixa'>


                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={20}>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões</Typography>
                        </Box>

                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                                <ModalPostagem />
                            </Box>
                            <Link to='/postagens' className=' text-decorator-none '>
                                <Button variant="outlined" className='botao'>Ver Postagens</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid xs={12} className='postagens'>
                        <TabPostagem />
                    </Grid>
                </Grid>
            </Box>

        </>
    );

}

export default Home;