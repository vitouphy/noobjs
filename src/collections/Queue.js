"use strict";

function Queue() {

    // private members
    var store = [];

    // methods
    this.enqueue = function(v) {
        store.push(v);
    };

    this.dequeue = function() {
        return store.shift();
    };

    this.top = function() {
        return store[0];
    };

    this.size = function() {
        return store.length;
    };

}

module.exports = Queue;