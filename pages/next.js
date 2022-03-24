import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from '../Component/Main';
import Footer from '../Component/Footer';
import post4 from '../data/blog-post.4.md';
import MainFeaturedPost from '../Component/MainFeaturedPost';
import Layout from "../Component/Layout";
import Paper from '@mui/material/Paper';


const posts = [post4];
const theme = createTheme();
var cardStyle = {
    height: '100vw'
}

const mainFeaturedPost = {
    image: 'https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/next.png?alt=media&token=fe1b8903-d61b-423b-98a1-e6fbfeae7440'
  };
const Next= ()=>(
    <ThemeProvider theme={theme}>
      <Layout footer={false}/>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
            <MainFeaturedPost style={cardStyle} post={mainFeaturedPost} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Next js" posts={posts} />
            <Grid item xs={12} md={4}>
            <img src='https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/portada.png?alt=media&token=6e879a4a-6712-4092-88a9-da517e4ec0ef' />
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Elizabeth Olivera"
      />
    </ThemeProvider>
   
    
)
export default Next;