import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item';


@observer
class Market extends Component {
    handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
      }

    addItem = () => {
      if(this.state.name!=="") {
        this.props.store.addItem(this.state.name)
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
            {this.props.store.items.map((i,ind) => <Item item = {i} 
                                                    key = {ind}
                                                    store = {this.props.store}/>)}
            </div>
        )
    }
}

export default Market