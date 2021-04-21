import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
const Line = () => {
    const sty = {
        textAlign: 'right',
    }
    const [data, setData] = useState({
        A: '',
        p: '',
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
                                Linear Regression Method
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
                            <Form.Label>Predict:</Form.Label>
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
                                            'http://localhost:8080/api/Reg/LN',
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
                            <Form.Label>
                                Answer <b>{result.answer[0]}</b> is:
                            </Form.Label>
                        </Col>
                    </Row>
                )}
                {result !== null && (
                    <Row>
                        <Col>
                            <Form.Control
                                value={result !== null && result.answer[1]}
                                disabled={true}
                            />
                        </Col>
                    </Row>
                )}
            </div>
        </div>
    )
}
export default Line
