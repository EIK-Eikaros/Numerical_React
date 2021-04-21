import { useState } from 'react'
import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
const GJ = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        A: '',
        B: '',
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
                                Gauss's Jordan Method
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
                            <br />
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
                                            'http://localhost:8080/api/Lina/GJ',
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
            </div>
        </div>
    )
}
export default GJ
