import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
const Larg = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        matA: '',
        matB: '',
        v: '',
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
                            <h1 className="text-danger">Lagrange Method</h1>
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
                                    setData({ ...data, matB: e.target.value })
                                }}
                            />
                            <Form.Label>Values:</Form.Label>
                            <Form.Control
                                placeholder="Enter Value"
                                type="text"
                                onChange={(e) => {
                                    setData({ ...data, v: e.target.value })
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
                                            'http://localhost:8080/api/Inter/LG',
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
            </div>
        </div>
    )
}
export default Larg
