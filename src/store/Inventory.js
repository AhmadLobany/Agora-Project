import { observable, action ,computed} from 'mobx'
import {Item} from "./Item"
export class Inventory {

    @observable items = []

    @computed get numItems() { 
        let counter = 0
        this.items.forEach(i =>  counter += parseInt(i.quantity ,10))
        return counter
    }

    @action addItem = (name,price=0,quantity=1) => {
        for(let item of this.items) {
            if(item.name===name) {
                item.quantity = item.quantity + quantity
                return;
            }
         }
         const newItem = new Item(name,price,quantity)
         this.items.push(newItem)
    }

    @action buyItem = (name) => {
        for(let i in this.items) {
            if(this.items[i].name===name) {
                if(this.items[i].quantity<1) {
                    this.items.splice(i,1)
                    return;
                } else {
                    this.items[i].quantity -= 1
                    return;
                }
            }
        }
    }

    @action changePrice = (name,price) => {
        for(let item of this.items) {
            if(item.name===name) {
                item.price = price
                return;
            }
        }
    }

}