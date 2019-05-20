import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Header from './Header'
import Tables from './Tables'
import DonutandLegend from './DonutandLegend'

class Index extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Tables />
                <DonutandLegend />
            </Container>
        )
    }

}

export default Index;

