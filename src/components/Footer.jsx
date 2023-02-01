import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';


//npm i mdb-react-ui-kit to use imported components 

// Daniel ________________________________________
export default function Footer() {
    return (

    <MDBFooter style={{ backgroundColor: 'rgba(255, 255, 255)', maxHeight: '300px', overflow: 'auto' }} className='text-center hover-shadow shadow-1-strong'>
      <MDBContainer className='p-0 position-relative' >
        <MDBRow>

          <MDBCol lg='3' md='6' className='mb-0 mb-md-0'>
            <Dropdown>
                <Dropdown.Toggle variant="btn-outline" id="dropdown-basic">
                    Daniel Park
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href='https://github.com/PvrkFvmily' target="_blank">Github</Dropdown.Item>
                    <Dropdown.Item href='https://www.linkedin.com/in/parkfamily/' target="_blank">LinkedIn</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <h5 className='text-uppercase'>Daniel Park</h5> 
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
              
            </ul> */}
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-0 mb-md-0'>
            <Dropdown>
                <Dropdown.Toggle variant="btn-outline" id="dropdown-basic">
                    Josh Wu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href='https://github.com/jtw007' target="_blank">Github</Dropdown.Item>
                    <Dropdown.Item href='https://www.linkedin.com/in/joshuatwudev/' target="_blank">LinkedIn</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <h5 className='text-uppercase mb-0'>Josh Wu</h5>

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
              
            </ul> */}
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-0 mb-md-0'>
            <Dropdown>
                <Dropdown.Toggle variant="btn-outline" id="dropdown-basic">
                    Maria Hamilton 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href='https://github.com/dudahamilton' target="_blank">Github</Dropdown.Item>
                    <Dropdown.Item href='https://www.linkedin.com/in/mariahamiltondev/' target="_blank">LinkedIn</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <h5 className='text-uppercase'>Maria Hamilton</h5>

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
            
            </ul> */}
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-0 mb-md-0'>
            <Dropdown>
                <Dropdown.Toggle variant="btn-outline" id="dropdown-basic">
                    Theo Robinson
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href='https://github.com/tbfrobinson' target="_blank">Github</Dropdown.Item>
                    <Dropdown.Item href='https://www.linkedin.com/in/tbfrobinson/' target="_blank">LinkedIn</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <h5 className='text-uppercase mb-0'>Theo Robinson</h5>

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
            
            </ul> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-2 text-light' style={{ backgroundColor: 'rgba(0,68,129)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='btn btn-outline-primary text-light' target="_blank" href='https://media.tenor.com/3kPGZrOLeiUAAAAi/pepe-the-frog-dancing.gif'>
          Domino Team 
        </a>
      </div>
    </MDBFooter>
    )
}

// _____________________________________________DP

