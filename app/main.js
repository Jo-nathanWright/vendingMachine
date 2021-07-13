import MachinesController from "./Controllers/MachinesController.js";

class App {
  machinesController = new MachinesController();
}

window["app"] = new App();
