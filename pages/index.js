import * as React from 'react';
import Typography from '@mui/material/Typography';
import Layout from "../Component/Layout";
import { skills, experiencia, proyectos, Estudios } from "../profile";
import Link from "next/link";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

var cardStyle = {
    height: '30vw'
}
export default function Index() {
    return (
        <>
            <Layout>
                {/** Header Cards */}
                <header className="row">
                    <Paper
                        sx={{
                            position: 'relative',
                            backgroundColor: 'grey.800',
                            color: '#fff',
                            mb: 8,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/Acl.png?alt=media&token=22bae54c-86b9-4dba-9792-39765d10ffe0)`,
                        }}

                    >
                        <Grid container>
                            <Grid item md={3}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: { xs: 3, md: 1 },
                                        pr: { md: 0 },
                                    }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/MiFotoCV.jpg?alt=media&token=cedd3f67-bc63-4b05-b96f-db33c1496849"
                                        sx={{ width: 300, height: 300 }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: { xs: 3, md: 6 },
                                        pr: { md: 0 },
                                    }}
                                >
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Elizabeth Olivera
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Alumna en practica Area de Desarrollo
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </header>
                {/** Second Portfolio */}
                <div className="row py-2">
                    <div className="col-md-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h1>Skills</h1>
                                {skills.map(({ skill, progress, icono }, i) => (
                                    <div className="py-3" key={i}>
                                        <img src={icono} /><br />
                                        <span> {skill}</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                ))}

                                <div className="py-3">
                                    <Avatar alt="Cindy Baker" src="data:image/png;base64,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" /><span> next.js</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: `20%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <Avatar alt="java" src="data:image/png;base64,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" /><span>java</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: `20%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <Avatar alt="nifi" src="data:image/png;base64,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" /><span>Nifi</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: `20%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <Avatar alt="docker" src="data:image/png;base64,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" /><span>Docker</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: `20%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h1>Estudios</h1>
                                <ul>
                                    {
                                        Estudios.map(({ titulo, desde, hasta, descripcion }, i) => (
                                            <li key={i}>
                                                <Typography variant="h5">{titulo}</Typography>
                                                <Typography>{desde} - {hasta}</Typography>
                                                <Typography>{descripcion}</Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h1>Experiencia</h1>
                                <ul>
                                    {
                                        experiencia.map(({ titulo, desde, hasta, descripcion, referencias, tel }, i) => (
                                            <li key={i}>
                                                <Typography variant="h5">{titulo}</Typography>
                                                <Typography>{desde} - {hasta}</Typography>
                                                <Typography align="justify">{descripcion}</Typography>
                                                <Typography>{referencias}</Typography>
                                                <Typography>{tel}</Typography>

                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/** Second Section */}

                <div className="col-md-12">

                    <div className="card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portafolio</h1>
                            </div>

                            {
                                proyectos.map(({ nombre, descripcion, imagen, repositorio }, i) => (
                                    <div className="col-md-4  py-2" key={i}>
                                        <Link style="bottom: 0" href="/blog">
                                            <Card style={cardStyle} sx={{ maxWidth: 400 }}>
                                                <CardActionArea style={cardStyle}>
                                                    <CardMedia
                                                        component="img"
                                                        height="250"
                                                        image={imagen}
                                                        alt={nombre}
                                                    />
                                                    <CardContent style={cardStyle}>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {nombre}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {descripcion}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-md-12">
                            <div className="text-center">
                                <Link href="/blog">
                                    <a className=" btn btn-outline-light">Mas Proyectos</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>

    );
}





