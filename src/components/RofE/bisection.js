import { useState } from 'react'
import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import Graph from '../Garph'
import axios from 'axios'
const BiSec = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        eq: '',
        L: 0,
        R: 0,
        error: null,
    })
    const [isSubmit, setSubmit] = useState(false)
    const [result, setResult] = useState(null)
    if (result !== null) {
        console.log(result.iteration)
    }
    return (
        <div>
            <br />
            <div>
                <Form>
                    <Row>
                        <Col>
                            <h1 className="text-danger">Bisection Method</h1>
                        </Col>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Equation:</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                placeholder="Enter Equation"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        eq: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>L:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label>R:</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                placeholder="Enter XL"
                                type="number"
                                onChange={(e) => {
                                    setData({ ...data, L: e.target.value })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Enter XR"
                                type="number"
                                onChange={(e) => {
                                    setData({ ...data, R: e.target.value })
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Error:</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                placeholder="Enter error (optional) default = 0.000001"
                                type="number"
                                onChange={(e) => {
                                    setData({ ...data, error: e.target.value })
                                }}
                            />
                        </Col>
                        <Col style={sty}>
                            <Button
                                disabled={isSubmit}
                                onClick={async () => {
                                    setSubmit(true)
                                    try {
                                        const res = await axios.post(
                                            'http://localhost:8080/api/Rof/BS',
                                            data
                                        )
                                        setResult(
                                            JSON.parse(res.request.response)
                                        )
                                        if (res.status === 200) {
                                            setSubmit(false)
                                        }
                                    } catch (error) {
                                        alert('Invlide format input')
                                        setSubmit(false)
                                    }
                                }}
                            >
                                Calculate
                            </Button>
                        </Col>
                    </Row>
                    {result !== null && (
                        <Row>
                            <Col>
                                <Form.Label>Answer:</Form.Label>
                            </Col>
                        </Row>
                    )}
                    {result !== null && (
                        <Row>
                            <Col>
                                <Form.Control
                                    value={result !== null && result.answer}
                                    disabled={true}
                                />
                            </Col>
                        </Row>
                    )}
                </Form>
                {result !== null && (
                    <Container className="mt-5 p-4 rounded bg-light">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#Iteration</th>
                                    <th>Xl</th>
                                    <th>Xm</th>
                                    <th>Xr</th>
                                    <th>Error</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.iteration.map((r) => (
                                    <tr key={r.it}>
                                        <td>{r.it}</td>
                                        <td>{r.xl}</td>
                                        <td>{r.xm}</td>
                                        <td>{r.xr}</td>
                                        <td>{r.er}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )}
                {result !== null && (
                    <div className="Container">
                        <Graph iteration={result.iteration} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default BiSec
