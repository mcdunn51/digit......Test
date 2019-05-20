import React, { Component } from 'react'
import Chart from "react-google-charts";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class DonutandLegend extends Component {
    constructor(props) {
        super(props);
        this.toggleDataCombine = this.toggleDataCombine.bind(this);
        this.state = { isCombined: false }
    }

    toggleDataCombine() {
        if (this.state.isCombined === true) {
            this.setState({ isCombined: false });
            // console.log()
        } else {
            this.setState({ isCombined: true });
            // console.log()
        }
    }


    render() {
        const isCombined = this.state.isCombined;
        let data, options
        if (isCombined) {
            data = [
                ["data", "value"],
                ["p", 11],
                ["ne", 4],
                ["nu", 3],
                ["na", 2],
            ];
            options = {
                legend: {position: 'right', alignment: 'center'},
                title: "Combined data for Tables 1 and 2",
                pieHole: 0.4,
                is3D: false
            };
        } else {
            data = [
                ["data", "value"],
                ["p", 5],
                ["ne", 2],
                ["nu", 2],
                ["na", 1],
            ];
            options = {
                legend: {position: 'right', alignment: 'center'},
                title: "Table 1",
                pieHole: 0.4,
                is3D: false
            };
        }

        return (
            <div>
                <Row>
                    <Col>
                        <Button className="mb-3" onClick={this.toggleDataCombine}>Toggle Table 2 Data</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Chart
                            id="donutChart"
                            chartType="PieChart"
                            width="100%"
                            height="600px"
                            data={data}
                            options={options}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DonutandLegend;