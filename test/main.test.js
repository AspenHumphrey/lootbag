#!/usr/bin/env node

// *********************************

// Coded along with David B and Jevon

// ***********************************


const { assert: { equal, deepEqual, notEqual, isFunction, isObject } } = require('chai');
const { addToy } = require('../lootbag');

    describe('addToy', () => {
        it('should exist', () => {
            isFunction(addToy);
        });
    // })
});