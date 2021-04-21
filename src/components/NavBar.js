import { Navbar, Nav, DropdownButton, Dropdown, Button } from 'react-bootstrap'
export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/home">Numerical React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                    <DropdownButton
                        title="Root of Equation"
                        size="sm"
                        variant="dark"
                    >
                        <Dropdown.Item href="/RootOfEquation/BSM">
                            Bisection Method
                        </Dropdown.Item>
                        <Dropdown.Item href="/RootOfEquation/FPM">
                            False-Position Method
                        </Dropdown.Item>
                        <Dropdown.Item href="/RootOfEquation/OPM">
                            Onepoint-Iteration Method
                        </Dropdown.Item>
                        <Dropdown.Item href="/RootOfEquation/NRM">
                            Newton-Raphson Method
                        </Dropdown.Item>
                        <Dropdown.Item href="/RootOfEquation/SCM">
                            Secant Method
                        </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        title="Linear Algebra Equation"
                        size="sm"
                        variant="dark"
                    >
                        <Dropdown.Item href="/LinearAlgebra/CramerRule">
                            Cramer Rule
                        </Dropdown.Item>
                        <Dropdown.Item href="/LinearAlgebra/GaussEli">
                            Gauss-Eliminate
                        </Dropdown.Item>
                        <Dropdown.Item href="/LinearAlgebra/GaussJor">
                            Gauss-Jordan
                        </Dropdown.Item>
                        <Dropdown.Item href="/LinearAlgebra/LUDecom">
                            LU-Decomposition
                        </Dropdown.Item>
                        <Dropdown.Item href="/LinearAlgebra/Jacobi">
                            Jacobi
                        </Dropdown.Item>
                        <Dropdown.Item href="/LinearAlgebra/GaussSe">
                            Gauss-Seidel
                        </Dropdown.Item>
                        <Dropdown.Item href="/LinearAlgebra/Conju">
                            Conjugate-Gradienn
                        </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        title="Interpolation"
                        size="sm"
                        variant="dark"
                    >
                        <Dropdown.Item href="/Interpolation/NewtonsDivide">
                            Newton's divide-differnces
                        </Dropdown.Item>
                        <Dropdown.Item href="/Interpolation/Lagrange">
                            Lagrange-polynomial
                        </Dropdown.Item>
                        <Dropdown.Item href="/Interpolation/Spline">
                            Spline Interpolation
                        </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title="Regression" size="sm" variant="dark">
                        <Dropdown.Item href="/Regression/Linear">
                            Linear
                        </Dropdown.Item>
                        <Dropdown.Item href="/Regression/Poly">
                            Polynomial
                        </Dropdown.Item>
                        <Dropdown.Item href="/Regression/MultiL">
                            Multiple Linear
                        </Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Button
                        type="primary"
                        className="btn btn-dark btn-circle btn-lg border border-light "
                        href="/DevelopedBy"
                    >
                        😸
                    </Button>
                </Navbar.Collapse>
            </Nav>
        </Navbar>
    )
}
export default NavBar
