class Person {
    constructor(state = "active", uid = "0-0") {
        this.state = state
        this.uid = uid
        Person.count++
    }
    getState() {
        return this.state
    }
    setState(newValue) {

        this.state = newValue
        if (newValue === "active" || newValue === 'inactive') {
            return newValue
        } else {
            /////
            throw new Error('error');
        }
    }
    getUid() {
        return this.uid
    }

    static getCountOfPersons() {
        return Person.count;
    }
}
Person.count = 0;

module.exports = Person