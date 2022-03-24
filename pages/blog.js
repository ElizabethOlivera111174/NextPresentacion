import Layout from "../Component/Layout";
import Typography from '@mui/material/Typography';
import { skills, experiencia, proyectos, Estudios,foto,descripcion } from "../profile";
const Blog= ()=>(
    <>
     <Layout footer={false}>
        <h1>Mas Proyectos</h1>
        
        <div className="col-md-12">
            
            {foto.map(({imagen,descripcion,titulo,alkemy,tecnologias,repositorio}, i )=>(
                <div className="card card-body bg-secondary text-light  mb-3">
                    <div className="row">
                        <div className="col-md-3" key={i}>
                            <img src={imagen}/>
                        </div>
                        <div className="col-md-8" key={i}>
                        <Typography variant="h2">{titulo}</Typography>
                        <Typography align="justify">{alkemy}</Typography>
                        <Typography align="justify">{tecnologias}</Typography>
                        <Typography><a href={repositorio}>Repositorio de Git Hub</a></Typography>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </Layout>
   
    </>
   
    
)
export default Blog;