import Navbar from "./navbar"
import { useEffect } from "react";
import {useRouter} from "next/router";
import nProgress from "nprogress";
import Link from "next/link";
const Layout= ({children, footer = true})=> {

    const router= useRouter();
   
    useEffect(()=>{
        const handleRouteChange= url => {
            nProgress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', ()=> nProgress.done())
        return ()=>{
            router.events.off('routeChangeStart', handleRouteChange)
        }
    },[])

    return(
        <>
        <Navbar />
        <main className="container py-4">
            {children}  
        </main>
        {
             footer && (
                <footer className="bg-dark text-light text-center footer">
                    <div className="container p-4">
                        <h1>&copy; Elizabeth Olivera Gutierttez Portfolio</h1>
                            <span><img src="https://img.icons8.com/cute-clipart/48/000000/github.png"/><span className="py-2"><Link href="https://github.com/ElizabethOlivera111174"><a> Github </a></Link></span></span>
                            <span><img src="https://img.icons8.com/color/48/000000/gmail--v1.png"/><a> eliolivera@gmail.com </a></span>
                            <span><img src="https://img.icons8.com/external-justicon-flat-justicon/48/000000/external-linkedin-social-media-justicon-flat-justicon.png"/><Link href="https://www.linkedin.com/in/elizabeth-olivera-274a5518b/"><a> Likedin </a></Link></span>
                        
                        <p>Derechos Reservados</p>
                    </div>
                </footer>
            ) 
        }
       
    </>
    )}
export default Layout;