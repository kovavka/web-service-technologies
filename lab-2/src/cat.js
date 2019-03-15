class Cat {
    constructor() {
        this.id = null;
        this.name = null;

        this.year = 0;
    }

    get age() {
        if (!this.year)
            return 0;

        return new Date().getFullYear() - this.year;
    }
}

module.exports = Cat;