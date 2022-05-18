import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" className="appbar">
                    <Tabs centered onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Me chamo Rosi Martins, tenho 30 anos, sou fotógrafa em migração de carreira para TI. Aprendi a fotografar ainda criança, quando alfanava a câmera analógica dos meus pais e fotografava coisas aleatórias escondida. Como na época ainda estava privada do acesso à internet, aprendi muita coisa com a experiência. Aos 15 anos ganhei minha primeira câmera digital e, já com acesso à internet, aprofundei meus conhecimentos, principalmente de softwares como Photoshop e Ilustrator. Aos 20 anos comocei a fotografar profissionalmente, e também a produzir e editar vídeos. Cursei Cinema na UFSC, Design Gráfico na UFG, e por fim me formei em Fotografia no Centro Universitário Belas Artes de São Paulo. </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;