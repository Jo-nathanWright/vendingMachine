import { ProxyState } from "../AppState.js"

class MachinesService {
    insert() {
        ProxyState.total += .25
    }
    return() {
        ProxyState.total = 0
    }
}

export const machinesService = new MachinesService()