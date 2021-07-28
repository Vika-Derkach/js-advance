const Person = require("./person");
const Human = require('./human')
class Uuee extends Person {
    constructor(owner, state, uid) {
        super(state, uid);

        if (owner instanceof Human) {
            this.owner = owner
        }
        else {
            throw new Error('error');
        }
    }

    sayHello(caller) {
        if (caller === this.owner) {
            return `Hello ${caller.name}.`
        }
        else {
            return "No!"
        }
    }
}
module.exports = Uuee