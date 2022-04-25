import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Welcome } from './Welcome'

export const WContainer = () => {
return (
    <div className='w-container'>
        <Container>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={11}>
                            <Welcome/>
                        </Col>
                    </Row>
        </Container>
    </div>
)
}
