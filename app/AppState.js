import Snack from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  total = 0
  snacks = [new Snack("Chips", 1, 0), new Snack("Cookie", 1.5, 0), new Snack("Soda", 2, 0), new Snack("Poptart", 5, 0)] //use find to find the name
}
// NOTE Don't touch this
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
