import { useState } from 'react'
import { Form, Row, Col, Button, Table, Container } from 'react-bootstrap'
import axios from 'axios'
const Multi = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        A: '',
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
                                Multi-Regression Method
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Data Table:</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
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
                    </Row>
                    <Row>
                        <Col style={sty}>
                            <br />
                            <Button
                                disabled={isSubmit}
                                onClick={async () => {
                                    setSubmit(true)
                                    try {
                                        const res = await axios.post(
                                            'http://localhost:8080/api/Reg/MT',
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
                        <Form.Label>Answer:</Form.Label>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Variables</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.answer.map((r, index) => (
                                    <tr key={index}>
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
export default Multi
