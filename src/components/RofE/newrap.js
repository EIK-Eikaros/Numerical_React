import { useState } from 'react'
import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
import Graph from '../Garph'
const NewRap = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        eq: '',
        start: 0,
        error: null,
    })
    const [isSubmit, setSubmit] = useState(false)
    const [result, setResult] = useState(null)
    return (
        <div>
            <br />
            <div>
                <Form>
                    <Row>
                        <Col>
                            <h1 className="text-danger">
                                Newton-Raphson Method
                            </h1>
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
                            <Form.Label>Start:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label>Error:</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                placeholder="Enter Start"
                                type="number"
                                onChange={(e) => {
                                    setData({ ...data, start: e.target.value })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Enter error (optional) default = 0.000001"
                                type="number"
                                onChange={(e) => {
                                    setData({ ...data, error: e.target.value })
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col style={sty}>
                            <Button
                                disabled={isSubmit}
                                onClick={async () => {
                                    try {
                                        const res = await axios.post(
                                            'http://localhost:8080/api/Rof/RP',
                                            data
                                        )
                                        setResult(
                                            JSON.parse(res.request.response)
                                        )
                                        if (res.status === 200) {
                                            setSubmit(false)
                                        }
                                    } catch (error) {
                                        alert('Invalid format Input.')
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
                                    <th>X</th>
                                    <th>f(x)</th>
                                    <th>f'(x)</th>
                                    <th>Error</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.iteration.map((f) => (
                                    <tr key={f.i}>
                                        <td>{f.i}</td>
                                        <td>{f.xi}</td>
                                        <td>{f.c1}</td>
                                        <td>{f.c2}</td>
                                        <td>{f.er}</td>
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
export default NewRap
