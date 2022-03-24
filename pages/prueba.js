import Navbar2 from "../Component/nav";
import styled from "@emotion/styled";


const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 1025px) {
    height: 82vh;
    max-height: 700px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    background-image: url("/assets/carlosazaustre-profile-image-large.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }
`;

const Prueba= ()=>(
    <>
        <StyledMain role="main">
            <Navbar2/>
        </StyledMain>
        
    </>
   
    
)
export default Prueba;


