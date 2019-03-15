class Cat {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.year = obj.year;
    }

    get age() {
        if (!this.year)
            return 0;

        return new Date().getFullYear() - this.year;
    }
}

module.exports = Cat;