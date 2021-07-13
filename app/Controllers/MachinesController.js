import { ProxyState } from "../AppState.js";
import { machinesService } from "../Services/MachinesService.js";

function _draw() {
    let total = ProxyState.total
    document.getElementById('total').innerText = total.toString()
}

export default class MachinesController {

    constructor() {
        _draw()
    }

    insert() {
        machinesService.insert()
        _draw()
    }

    return() {
        machinesService.return()
        _draw()
    }
}