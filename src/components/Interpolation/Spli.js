import { useState } from 'react'
import { Form, Row, Col, Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
const Spline = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        matA: '',
        p: '',
    })
    const [isSubmit, setSubmit] = useState(false)
    const [result, setResult] = useState(null)
    let save
    if (result !== null) {
        save = JSON.parse(data.p)
    }
    return (
        <div>
            <br />
            <div>
                <Form>
                    <Row>
                        <Col>
                            <h1 className="text-danger">Spline Method</h1>
                        </Col>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Data Table:</Form.Label>
                            <textarea
                                className="form-control"
                                rows={8}
                                cols={1}
                                placeholder="[&#10;[x , y , z],&#10;[a , b , c],&#10;[d , e , f]&#10;]"
                                onChange={(e) => {
                                    setData({ ...data, matA: e.target.value })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Points:</Form.Label>
                            <Form.Control
                                placeholder="Enter points"
                                type="text"
                                onChange={(e) => {
                                    setData({ ...data, p: e.target.value })
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
                                            'http://localhost:8080/api/Inter/SP',
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
                        <Container className="mt-5 p-4 rounded bg-light">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Points</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.answer.map((r, index) => (
                                        <tr key={r}>
                                            <td>{'P' + save[index]}</td>
                                            <td>{r}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Container>
                    )}
                </Form>
            </div>
        </div>
    )
}
export default Spline
