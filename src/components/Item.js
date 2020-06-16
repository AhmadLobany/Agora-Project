import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("inventory")
@observer
class Item extends Component {
    buyItem = () => {
        this.props.inventory.buyItem(this.props.item.name)
    }

    editPrice = () => {
        const newPrice = prompt("Insert new price ...")
        this.props.inventory.changePrice(this.props.item.name,newPrice)
    }

    render() {
        let item = this.props.item
        return (
        <li onDoubleClick={this.editPrice}>{item.quantity} {item.name}s available at ${item.price} per item
            <button onClick={this.buyItem}>Buy</button>
        </li>)
    }
}

export default Item