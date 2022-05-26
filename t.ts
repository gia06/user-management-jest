import { Test } from "./n";

class My {
    constructor(private value: Test) {}

    receive() {
        return this.value.hello
    }

}