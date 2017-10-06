import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Item from './item.js';
import './itemspanel.scss';

class ItemsPanel extends Component {
    render() {
        var itemlist = this.props.data.map((item, index) => {
            return (
                <Col xs={12} sm={6} md={4} lg={4} className="items-panel-col" key={index}>
                    <Item data={item} />
                </Col>
            )
        })
        return (
            <div className="items-panel">
                <div className="items-panel-header">
                    <p>{this.props.title}</p>
                    <span>{"See All " + this.props.title + " "}<i className="fa fa-caret-right" /></span>
                </div>
                <Row>
                    {itemlist}
                </Row>
            </div>
        )
    }
}
 
export default ItemsPanel;