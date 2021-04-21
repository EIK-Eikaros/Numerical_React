import { Container, Card, CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="container ">
            <Container className="mt-5 p-4 rounded bg-light text-center">
                <h3 className="text-danger">~~ Root of Equations ~~</h3>
                <CardColumns className="py-4">
                    <Link to="/RootOfEquation/BSM">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">Bisection Method</Card.Header>
                        </Card>
                    </Link>

                    <Link to="/RootOfEquation/FPM">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                False-Position Method
                            </Card.Header>
                        </Card>
                    </Link>
                    <Link to="/RootOfEquation/OPM">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Onepoint-Iteration Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/RootOfEquation/NRM">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Newton's Raphson Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/RootOfEquation/SCM">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">Secant Method</Card.Header>
                        </Card>
                    </Link>
                </CardColumns>
            </Container>
            <Container className="mt-5 p-4 rounded bg-light text-center">
                <h3 className="text-danger">~~ LinearAlgebra ~~</h3>
                <CardColumns className="py-4">
                    <Link to="/LinearAlgebra/CramerRule">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Cramer's Rule Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/LinearAlgebra/GaussEli">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Gauss's Eliminate Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/LinearAlgebra/GaussJor">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Gauss's Jordan Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/LinearAlgebra/LUDecom">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                LU Decomposition Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/LinearAlgebra/Jacobi">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">Jacobi Method</Card.Header>
                        </Card>
                    </Link>

                    <Link to="/LinearAlgebra/GaussSe">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Gauss's Seidel Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/LinearAlgebra/Conju">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Conjugate Gradient
                            </Card.Header>
                        </Card>
                    </Link>
                </CardColumns>
            </Container>
            <Container className="mt-5 p-4 rounded bg-light text-center">
                <h3 className="text-danger">~~ Interpolation ~~</h3>
                <CardColumns className="py-4">
                    <Link to="/Interpolation/NewtonsDivide">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Newton's divide-differnces Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/Interpolation/Lagrange">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">Lagrange Method</Card.Header>
                        </Card>
                    </Link>
                    <Link to="/Interpolation/Spline">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">Spline Method</Card.Header>
                        </Card>
                    </Link>
                </CardColumns>
            </Container>
            <Container className="mt-5 p-4 rounded bg-light text-center">
                <h3 className="text-danger">~~ Regression ~~</h3>
                <CardColumns className="py-4">
                    <Link to="/Regression/Linear">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Linear Regression Method
                            </Card.Header>
                        </Card>
                    </Link>

                    <Link to="/Regression/Poly">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Polynomial Regression Method
                            </Card.Header>
                        </Card>
                    </Link>
                    <Link to="/Regression/MultiL">
                        <Card
                            style={{ width: '16rem' }}
                            bg="dark"
                            text="light"
                            border="danger"
                        >
                            <Card.Header as="h6">
                                Multi-Linear Regression Method
                            </Card.Header>
                        </Card>
                    </Link>
                </CardColumns>
            </Container>
        </div>
    )
}
export default Home
