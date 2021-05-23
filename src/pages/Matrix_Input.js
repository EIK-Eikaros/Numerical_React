import { Form, Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react'
const Test = () => {
    const [arr, setArr] = useState(null)
    const changeMA = (k, ar, value) => {
        let a = JSON.parse(JSON.stringify(ar))
        let p = k.split(',')
        p = p.map((r) => parseInt(r))
        a[p[0]][p[1]] = value
        return a
    }
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <Form>
                    <Form.Control
                        type="number"
                        onChange={(e) => {
                            let size = parseInt(e.target.value)
                            if (size !== null) {
                                let temp = []
                                let pu = []
                                for (let i = 0; i < size; i++) {
                                    temp.push(i)
                                }
                                for (let i = 0; i < size; i++) {
                                    pu.push(temp)
                                }
                                setArr({ pu: pu, mA: pu })
                            }
                        }}
                    ></Form.Control>
                    {console.log(arr)}
                    <Form.Group>
                        <br />
                        {arr !== null &&
                            arr.pu.map((r, index) => {
                                return (
                                    <Row key={index.toString() + 'r'}>
                                        {r.map((c) => {
                                            return (
                                                <Col key={c.toString() + 'c'}>
                                                    <Form.Control
                                                        type="number"
                                                        key={
                                                            index.toString() +
                                                            c.toString()
                                                        }
                                                        id={
                                                            index.toString() +
                                                            ',' +
                                                            c.toString()
                                                        }
                                                        onChange={(e) => {
                                                            setArr({
                                                                ...arr,
                                                                mA: changeMA(
                                                                    e.target.getAttribute(
                                                                        'id'
                                                                    ),
                                                                    arr.mA,
                                                                    e.target
                                                                        .value
                                                                ),
                                                            })
                                                        }}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                )
                            })}
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default Test
