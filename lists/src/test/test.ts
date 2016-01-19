/// <reference path="../../typings/node/node.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />

"use strict";

import * as assert from "assert"
import { ArrayList, LinkedList, Collection } from "../collections"

describe("List API", function () {

    class GenericTestList {
        private static initList(list: Collection<number>) {
            list.add(1)
            list.addAll([2, 3]);
        }
        
        static createList(list: Collection<number>) {
            assert.strictEqual(list.isEmpty(), true);
            assert.strictEqual(list.size(), 0);
            
            GenericTestList.initList(list);
            
            assert.strictEqual(list.isEmpty(), false);
            assert.strictEqual(list.size(), 3);
        }
        
        static removeExistingItem(list: Collection<number>) {
            GenericTestList.initList(list);
            let result = list.remove(2);
            assert.strictEqual(result, true);
            assert.strictEqual(list.size(), 2);
        }
        
        static removeMissingItem(list: Collection<number>) {
            GenericTestList.initList(list);
            let result = list.remove(10);
            assert.strictEqual(result, false);
            assert.strictEqual(list.size(), 3);
        }
        
        static clearList(list: Collection<number>) {
            GenericTestList.initList(list);
            assert.strictEqual(list.size(), 3);
            
            list.clear();
            
            assert.strictEqual(list.size(), 0);
            assert.strictEqual(list.isEmpty(), true);
        }
        
        static hasElement(list: Collection<number>) {
            GenericTestList.initList(list);
            assert.strictEqual(list.contains(3), true);
        }
        
        static doesNotHaveElement(list: Collection<number>) {
            GenericTestList.initList(list);
            assert.strictEqual(list.contains(10), false);
        }
        
        static iterator(list: Collection<number>) {
            GenericTestList.initList(list);
            
            let expected = [1, 2, 3];
            let i = 0;
            for (let e of list.iterate()) {
                assert.strictEqual(e, expected[i]);
                i++;
            }
        }
        
        static filter(list: Collection<number>) {
            list.addAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            
            let expected = [2, 4, 6, 8, 10];
            let i = 0;
            for (let e of list.filter(v => v % 2 === 0)) {
                assert.strictEqual(e, expected[i]);
                i++;
            }
        }
    }    
    
    describe("Linked List", function () {
        it("Create linked list and add 3 elements", function () {
            let list = new LinkedList<number>();
            GenericTestList.createList(list);
        });
        
        it("Remove item which exists in the list", function () {
            let list = new LinkedList<number>();
            GenericTestList.removeExistingItem(list);
        });
        
        it("Remove item which does not exist in the list", function () {
            let list = new LinkedList<number>();
            GenericTestList.removeMissingItem(list);
        });
        
        it("Iterator", function () {
            let list = new LinkedList<number>();
            GenericTestList.iterator(list);
        });
        
        it("Filter", function () {
            let list = new LinkedList<number>();
            GenericTestList.filter(list);
        });
        
        it("Clear list", function () {
            let list = new LinkedList<number>();
            GenericTestList.clearList(list);
        });
        
        it("List contains element", function () {
            let list = new LinkedList<number>();
            GenericTestList.hasElement(list);
        });
        
        it("List does not contain element", function () {
            let list = new LinkedList<number>();
            GenericTestList.doesNotHaveElement(list);
        });
    });
    
    describe("Array List", function () {
        it("Create linked list and add 3 elements", function () {
            let list = new ArrayList<number>();
            GenericTestList.createList(list);
        });
        
        it("Remove item which exists in the list", function () {
            let list = new ArrayList<number>();
            GenericTestList.removeExistingItem(list);
        });
        
        it("Remove item which does not exist in the list", function () {
            let list = new ArrayList<number>();
            GenericTestList.removeMissingItem(list);
        });
        
        it("Iterator", function () {
            let list = new ArrayList<number>();
            GenericTestList.iterator(list);
        });
        
        it("Filter", function () {
            let list = new ArrayList<number>();
            GenericTestList.filter(list);
        });
        
        it("Clear list", function () {
            let list = new ArrayList<number>();
            GenericTestList.clearList(list);
        });
        
        it("List contains element", function () {
            let list = new ArrayList<number>();
            GenericTestList.hasElement(list);
        });
        
        it("List does not contain element", function () {
            let list = new ArrayList<number>();
            GenericTestList.doesNotHaveElement(list);
        });    
    });

});