import MachinesController from "./Controllers/MachinesController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();

  machinesController = new MachinesController();
}

window["app"] = new App();
