import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';

//npm i mdb-react-ui-kit to use imported components 

// Daniel ________________________________________
export default function Footer() {
    return (

    <MDBFooter bgColor='light' className='text-center text-lg-left fixed-bottom '>
      <MDBContainer className='p-2 position-relative fixed-bottom '>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Daniel Park</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://github.com/PvrkFvmily' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  GitHub
                </a>
                
              </li>
              <li>
                <a href='https://www.linkedin.com/in/parkfamily/' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  LinkedIn 
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Josh Wu</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='https://github.com/jtw007' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  Github
                </a>
              </li>

              <li>
                <a href='https://www.linkedin.com/in/joshuatwudev/' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  LinkedIn
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Maria Hamilton</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://github.com/dudahamilton' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  Github
                </a>
              </li>

              <li>
                <a href='https://www.linkedin.com/in/mariahamiltondev/' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  LinkedIn
                </a>
              </li>
            
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Theo Robinson</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='https://github.com/tbfrobinson' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  Github
                </a>
              </li>

              <li>
                <a href='https://www.linkedin.com/in/tbfrobinson/' target="_blank" style={{textDecoration:"none"}}  className='text-dark'>
                  LinkedIn
                </a>
              </li>
            
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(0,68,129)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='btn btn-outline-primary text-light' target="_blank" href='https://media.tenor.com/3kPGZrOLeiUAAAAi/pepe-the-frog-dancing.gif'>
          Domino Team 
        </a>
      </div>
    </MDBFooter>
    )
}

// _____________________________________________DP

