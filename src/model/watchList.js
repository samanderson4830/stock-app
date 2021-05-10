class WatchList {
    // ************************
    // Constructor
    // ************************
    constructor() {
        this.set = new Set()
    }

    // ************************
    // Methods
    // ************************
    get getWatchList() {
        return this.set;
    }

    add(obj) {
        if (!this.set.has(obj)) {
            this.set.add(obj);
        }
    }

    remove(obj) {
        this.set.remove(obj);
    }

    size() {
        this.set.size();
    }

    empty() {
        return this.set.size() === 0;
    }

    has() {
        return this.set.has(obj);
    }

    convertToArray() {
        Array.from(this.set);
    }
}