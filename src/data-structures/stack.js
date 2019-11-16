// Data Structure: Stack
// Resources: UF COP3530 notes and geekforgeeks.org

/*
* Stacks are a collection of objects
* It contains a reference to the object on top of the stack
* The computational complexity for Push/Pop is O(1) {that's really good!!!}
* Stacks are great data structures if (Last in, first out) LIFO 
* operations are appropriate 
*/

class Stack { 
  
    // An array is used to implement stack 
    constructor() { 
        this.items = []; 
    } 
  
    // push(object): inserts an element
    push(element) { 
        this.items.push(element); 
    } 
        
    // pop(): removes and returns the last inserted element
    pop() { 
        // Returns undefined if stack is empty 
        if (this.isEmpty()) {
            return "undefined"; 
        }
        return this.items.pop(); 
    } 

    // peek(): returns the last inserted element without removing it 
    peek() { 
        return this.items[this.items.length - 1]; 
    } 

    // isEmpty(): indicates whether no elements are stored 
    isEmpty() { 
        return this.items.length == 0; 
    } 
    
    // size(): returns the number of elements stored
    size() {
        return this.items.length; 
    }
    // printStack(): returns all the times in the stack 
    printStack() { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
} 

// Need to create test cases