import React, { useEffect, useState } from "react";
import {Col,Row} from 'react-bootstrap'

const AppRoutes = () => {
    const [value, setValue] = useState(0)

    const handleChange = () => {
        setValue(value+1)
    }

    useEffect(() => {
        console.log('value: ',value)
    }, [value])
    


    return (
        <>
            <Row className='rowTamanio'>
                <Col className="rowColor" xs={4}>
                </Col>
                <Col className="rowColorSecond" xs={8}>
                </Col>
            </Row>
        
        </>
    );
};

export default AppRoutes;
