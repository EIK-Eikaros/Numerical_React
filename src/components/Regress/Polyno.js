import { useState } from 'react'
import { Form, Row, Col, Button, Table, Container } from 'react-bootstrap'
import axios from 'axios'
const PolyN = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        A: '',
        o: '',
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
                                Polynomial Regression Method
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Data Table:</Form.Label>
                            <textarea
                                className="form-control"
                                rows={8}
                                cols={1}
                                placeholder="[&#10;[x , y ],&#10;[a , b ],&#10;[d , e ]&#10;]"
                                onChange={(e) => {
                                    setData({ ...data, A: e.target.value })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Order:</Form.Label>
                            <Form.Control
                                placeholder="Enter order"
                                type="text"
                                onChange={(e) => {
                                    setData({ ...data, o: e.target.value })
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={sty}>
                            <Button
                                disabled={isSubmit}
                                onClick={async () => {
                                    setSubmit(true)
                                    try {
                                        const res = await axios.post(
                                            'http://localhost:8080/api/Reg/PL',
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
                </Form>
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
                                value={result !== null && result.answer.string}
                                disabled={true}
                            />
                        </Col>
                    </Row>
                )}
                {result !== null && (
                    <Container className="mt-5 p-4 rounded bg-light">
                        <Form.Label>Answer:</Form.Label>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>x</th>
                                    <th>f(x)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.answer.points.map((r, index) => (
                                    <tr key={index}>
                                        <td>{r[0]}</td>
                                        <td>{r[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )}
            </div>
        </div>
    )
}
export default PolyN
