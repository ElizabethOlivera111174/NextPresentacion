import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from '../data/blog-post.1.md';
import post2 from '../data/blog-post.2.md';
import post3 from '../data/blog-post.3.md';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Apache Nifi',
  description:
    "Apache NiFi es una herramienta open source para integrar y automatizar flujos de datos. Permite realizar operaciones de transformación, extracción y carga sobre grandes cantidades de datos con gran flexibilidad y de una manera visual.",
  image: 'https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/nifi.png?alt=media&token=ac4cd176-d9c7-43a5-95d0-65a40f2a88fc'
};

const featuredPosts = [
  {
    title: 'Interfaz Grafica amigable',
    date: 'Nov 11',
    description:
      'Nifi posee una interfaz gracfica facil de utilizar, ha sido diseñado para poder automatizar de una manera eficiente y visual los flujos de datos entre distintos sistemas: ingesta, enrutado y gestión.',
    image: 'https://nifi.apache.org/assets/images/flow-th.png',
    imageLabel: 'Image Text',
  },
  {
    title: 'Programacion de flujos',
    date: 'Nov 11',
    description:
      'Nifi se basa en la programacion de frujos de datos. Se utiliza para integrar aplicaciones, transportar grandes volumenes de informacion entre sevidores o motores de bases de datos.',
    image: 'https://touk.pl/blog/wp-content/uploads/2018/09/Zrzut-ekranu-2018-09-27-o-14.18.05.png',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Mas Informacion',
  description:
    'Para mas informacion comunicarse con eliolivera570@gmail.com.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, href:"https://github.com/ElizabethOlivera111174?tab=repositories"},
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


const theme = createTheme();

export default function BlogNifi() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Apache Nifi" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              href={sidebar.href}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Elizabeth Olivera"
      />
    </ThemeProvider>
  );
}



