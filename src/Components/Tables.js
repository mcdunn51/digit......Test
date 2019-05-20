import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const Tables = () => {

    return (
        <Row id="tablesWrapper">
            <Col xs={12} md={6}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Table 1</Card.Title>
                       
                            <Table striped bordered hover>
                                <tbody>                                    
                                    <tr>
                                        <td>p</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>ne</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>nu</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>na</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </Table>
                       
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Table 2</Card.Title>
                        
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>p</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>ne</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>nu</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>na</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Tables;