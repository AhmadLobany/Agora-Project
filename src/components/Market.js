import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item';

@inject("inventory")
@observer
class Market extends Component {
    handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
      }

    addItem = () => {
      if(this.state.name!=="") {
        this.props.inventory.addItem(this.state.name)
        document.getElementById("in").value = ""
        this.setState({
          name: ""
        })
      }
      }

    render() {
        return (
            <div>
            <input id="in" type="text" placeholder="Item's name" onChange={this.handleChange}></input>
            <button onClick = {this.addItem}>Add</button>
            {this.props.inventory.items.map((i,ind) => <Item item = {i} 
                                                    key = {ind}
                                                     />)}
            <div>The total number of items in the Agora : {this.props.inventory.numItems}</div>
            </div>
        )
    }
}

export default Market