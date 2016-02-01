"use strict";

export interface Collection<T> {
    add(element: T): void;
    
    addAll(elements: T[]): void;
    
    clear(): void;
    
    contains(element: T): boolean;
    
    isEmpty(): boolean;
    
    size(): number;
    
    remove(element: T): boolean;
    
    iterate(): Iterable<T>;
    
    filter(predicate: (e: T)=>boolean): Iterable<T>; 
}

export abstract class List<T> implements Collection<T> {
    abstract add(element: T): void;
    
    abstract addAll(elements: T[]): void;
    
    abstract clear(): void;
    
    abstract contains(element: T): boolean;
    
    isEmpty(): boolean {
        return this.size() == 0 
    }
    
    abstract size(): number;
    
    abstract remove(element: T): boolean;
    
    abstract iterate() : Iterable<T>;
    
    abstract filter(predicate: (e: T)=>boolean): Iterable<T>; 
}

export class ArrayList<T> extends List<T> {
    private _data: Array<T>;
    
    constructor() {
        super();
        this._data = [];
    }
    
    add(element: T): void {
        this._data.push(element);
    }
    
    addAll(elements: T[]): void {
        for (let e of elements) {
            this._data.push(e);
        }
    }
    
    clear(): void {
        this._data = new Array<T>();
    }
    
    contains(element: T): boolean {
        return this._data.indexOf(element) > -1;
    }
    
    size(): number {
        return this._data.length;    
    }
    
    remove(element: T): boolean {
        var idx = this._data.indexOf(element);
        
        if (idx > -1) {
            this._data.splice(idx, 1);
            return true;
        }
        
        return false;
    }
    
    iterate(): Iterable<T> {
        return this._data;
    }
    
    filter(predicate: (e: T)=>boolean): Iterable<T> {
        return this._data.filter(predicate);
    }
}

export class LinkedList<T> extends List<T> {
    private _size: number;
    private _head: ListItem<T>;
    
    constructor() {
        super();
        this._size = 0;
        this._head = null;
    }
    
    add(element: T): void {
        if (this._size === 0) {
            this._head = new ListItem<T>(element);
        } else {
            let last = this._head;
            while(last.next !== null) {
                last = last.next;
            }
            
            last.next = new ListItem<T>(element);
        }
        
        this._size++;
    }
    
    addAll(elements: T[]): void {
        let last = this._head;
        if (last !== null) {
            while(last.next !== null) {
                last = last.next;
            }
        }
        
        for (let e of elements) {
            if (last === null) {
                last = new ListItem<T>(e);
                this._head = last;
            } else {
                last.next = new ListItem<T>(e);
                last = last.next;
            }
            
            this._size++;
        }
    }
    
    clear(): void {
        this._head = null;
        this._size = 0;
    }
    
    contains(element: T): boolean {
        for (let item of this.iterate()) {
            if (item === element) {
                return true;
            }
        }
        
        return false;
    }
    
    size(): number {
        return this._size;
    }
    
    remove(element: T): boolean {
        if (this._head === null) {
            return false;
        }
        
        let prev = null;
        let item = this._head;
        while (item !== null) {
            if (item.value === element) {
                if (prev === null) {
                    // head element
                    this._head = item.next;
                } else {
                    prev.next = item.next;
                }
                
                this._size--;
                return true;
            }
            
            prev = item;
            item = item.next;
        }
        
        return false;
    }
    
    *iterate() : Iterable<T> {
        if (this._head === null) {
            return;
        }
        
        let item = this._head;
        while (item !== null) {
            yield item.value;
            item = item.next;
        }
    }
    
    *filter(predicate: (e: T)=>boolean): Iterable<T> {
        for (var e of this.iterate()) {
            if (predicate(e)) {
                yield e;
            }
        }
    } 
}

// Example: Collection<string> | Collection<number> - union type
export function printList(list: Collection<string> | Collection<number>) {
    for (let item in list) {
        console.log(item);
    }
}

class ListItem<T> {
    private _value: T;
    private _next: ListItem<T>;
    
    constructor(v: T) {
        this._value = v;
        this._next = null;
    }
    
    get value(): T {
        return this._value;
    }
    
    set value(v: T) {
        this._value = v;
    }
    
    get next() : ListItem<T> {
        return this._next;
    }
    
    set next(v: ListItem<T>) {
        this._next = v;
    }
}