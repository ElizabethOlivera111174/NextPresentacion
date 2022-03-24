import Layout from "../Component/Layout";
import Typography from '@mui/material/Typography';
import Error from "./_error";


const Github= ({user,statusCode})=>{
    if(statusCode){
        return <Error />
    }
    return(
        <Layout>
         <div className="row">
             <div className="col-md-4 offset-md-4">
                 <div className="card card-body text-center">
                 <Typography variant="h3">{user.name}</Typography>
                    <img src={user.avatar_url} alt=""></img>
                    <Typography>{user.bio}</Typography>
                    <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">Github</a>
                 </div>
             </div>
         </div>
        </Layout>

    )
   
    }

export async function getServerSideProps(){
    const res= await fetch('https://api.github.com/users/ElizabethOlivera111174')
    const data =await res.json();
    const statusCode = res.status>200? res.status : false;
    return {
        props:{
            user: data,
            statusCode

        }
    }
}

export default Github;