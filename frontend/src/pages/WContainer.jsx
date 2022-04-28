import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { WAnimation } from './WAnimation'
import { Welcome } from './Welcome'

export const WContainer = () => {
return (
    <div className='w-container'>
        <Container>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={11}>
                            <Welcome/>
                            <WAnimation/>
                        </Col>
                    </Row>
        </Container>
    </div>
)
}
