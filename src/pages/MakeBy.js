import profile from '../Pic/profile.jpg'
import ReactRoundedImage from 'react-rounded-image'
import { Container, Row, Col } from 'react-bootstrap'
const Make = () => {
    const sty = {
        display: 'flex',
    }
    return (
        <div className="container py-5 my-5 text-center">
            <Container fluid>
                <Row lg={7}>
                    <Col lg={4}>
                        <br />
                        <br />
                        <ReactRoundedImage
                            image={profile}
                            imageWidth="300"
                            imageHeight="300"
                            roundedSize="5"
                            hoverColor="white"
                            roundedColor="navy"
                            borderRadius="30"
                        />
                    </Col>
                    <Col lg={5}>
                        <br />
                        <div className="text-left">
                            <h4>
                                <b className="text-primary">Developed by: </b>
                                Ingcharat Kantathavorn
                            </h4>
                            <h5>Academic year: 2/2564 </h5>
                            <h5>Tools</h5>
                            <ul>
                                <li>ReactJS</li>
                                <li>React-Bootstrap</li>
                                <li>React Chartjs</li>
                                <li>React-router-dom</li>
                                <li>React Rounded Image</li>
                                <li>ExpressJs (APIs framework)</li>
                                <li>Postman</li>
                                <li>Visual Studio</li>
                            </ul>
                        </div>
                        <div className="text-left">
                            <h5 className="text-success">Contact:</h5>
                            <span style={sty}>
                                <h5 className="px-3">Facebook: </h5>
                                <a
                                    href="https://www.facebook.com/EIKanta"
                                    className="px-1"
                                >
                                    Ingcharat Kantathavorn
                                </a>
                            </span>
                            <span style={sty}>
                                <h5 className="px-3">Github: </h5>
                                <a
                                    href="https://github.com/EIK-Eikaros"
                                    className="px-1"
                                >
                                    Eikaros
                                </a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Make
