import { ProxyState } from "../AppState.js"


class MachinesService {
    insert() {
        ProxyState.total += .25
    }
    return() {
        ProxyState.total = 0
    }
    buy(type) {
        let foundSnack = ProxyState.snacks.find(s => s.name == type)
        if (ProxyState.total >= foundSnack.price) {
            foundSnack.amount += 1
            ProxyState.total = (ProxyState.total - foundSnack.price)
            console.log(foundSnack.amount)
        } else {
            alert("You don't have enough cash for that!")
        }
    }
}

export const machinesService = new MachinesService()