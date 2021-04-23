import { useState } from 'react'
import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
const ConJu = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        A: '',
        B: '',
        x0: '',
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
                                Conjugate Gradient Method
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Matrix A:</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label>Vector B:</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <textarea
                                className="form-control"
                                rows={8}
                                cols={1}
                                placeholder="[&#10;[x , y , z],&#10;[a , b , c],&#10;[d , e , f]&#10;]"
                                onChange={(e) => {
                                    setData({ ...data, A: e.target.value })
                                }}
                            />
                        </Col>
                        <Col>
                            <textarea
                                className="form-control"
                                rows={8}
                                cols={1}
                                onChange={(e) => {
                                    setData({ ...data, B: e.target.value })
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Intital :</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                placeholder="Enter Intital value; [x1,x2,x3]"
                                type="text"
                                onChange={(e) => {
                                    setData({ ...data, x0: e.target.value })
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
                                            'http://localhost:8080/api/Lina/CG',
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
                    <Container className="mt-5 p-4 rounded bg-light">
                        <h4>Check Positive Definite</h4>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Matrix</th>
                                    <th>Det</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.posi.map((r) => (
                                    <tr key={r}>
                                        <td>{JSON.stringify(r.t)}</td>
                                        <td>{r.det}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )}
                {result !== null && (
                    <Container className="mt-5 p-4 rounded bg-light">
                        <h4>Result of Conjugate Gradient</h4>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Variables</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.answer.map((r, index) => (
                                    <tr key={r}>
                                        <td>{'x' + (index + 1)}</td>
                                        <td>{r}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                )}
                {result !== null && (
                    <Container className="mt-5 p-4 rounded bg-light">
                        <h4>Check result Ax = B</h4>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Variables</th>
                                    <th>Result multiply</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.last.map((r, index) => (
                                    <tr key={r}>
                                        <td>{'B' + (index + 1)}</td>
                                        <td>{r}</td>
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
export default ConJu
