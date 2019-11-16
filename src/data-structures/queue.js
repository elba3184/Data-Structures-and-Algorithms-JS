// Data Structure: Stack
// Resources: UF COP3530 notes and geekforgeeks.org

/*
* The queue, like the stack, is a widely used data structure.
* A queue differs from a stack in one important way:
* A queue is FIFO First-In, First-Out
* In a queue, O(n) for Insert/Delete is O(1)
*/

class Queue { 

    // Array is used to implement a Queue 
    constructor() { 
        this.items = []; 
    } 
                  
    // push/enqueue(object): inserts an element
    push(element) {
        this.items.push(element); 
    }

    // pop/dequeue(): removes and returns the first inserted element
    pop() { 
        if(this.isEmpty()) {
            return "undefined";
        }
        return this.items.shift(); 
    } 

    // peek(): returns the first element without removing it
    peek() { 
        if(this.isEmpty()) {
            return "The queue is empty"; 
        }
        return this.items[0]; 
    } 

    // isEmpty(): indicates whether no elements are stored 
    isEmpty() { 
        return this.items.length == 0; 
    }

     // size(): returns the number of elements stored
    size() {
        return this.items.length; 
    }

    // printQueue(): returns all the times in the stack 
    printQueue() { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
} 

// Need to add test cases