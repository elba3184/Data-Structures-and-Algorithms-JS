// Data Structure: Linkedlist
// Resources: UF COP3530 notes and geekforgeeks.org

/*
* A node contains a data item, 
* it can contain reference to the next node
* and can contain a reference to the previous ndoe
*/

class Node { 
    constructor(element) { 
        this.element = element; 
        this.next = null;
    } 
} 

/*
* Linked lists are useful for inserting and deleting in arbituary locations
* Elements can be added/removed from a known location 
* without shifting the elements; linked together using memory references
*/

class LinkedList { 
    constructor() { 
        this.head = null; 
        this.size = 0; 
    } 

    // Adds element at the end of the list
    add(element) { 
        var node = new Node(element); 
        var currentNode;
    
        if (this.head == null) {
            this.head = node; 
        } else { 
            currentNode = this.head;
            while (currentNode.next) { 
                currentNode = currentNode.next; 
            } 
            currentNode.next = node;
        } 
        this.size++; 
    }

    // Insert an item at a specific index
    insertAt(element, index) { 
        if (index > 0 && index > this.size) {
            return false; 
        } else {
            var node = new Node(element); 
            var currentNode, previousNode; 
            currentNode = this.head; 
    
            if (index == 0) { 
                node.next = head; 
                this.head = node; 
            } else { 
                currentNode = this.head; 
                var iterator = 0; 
                while (iterator < index) { 
                    iterator++; 
                    previousNode = currentNode; 
                    currentNode = currentNode.next; 
                } 
                node.next = currentNode; 
                previousNode.next = node; 
            } 
            this.size++; 
        } 
    }

    //Removes and returns an element from the list from the specified index
    removeFrom(index) { 
        if (index > 0 && index > this.size) {
            return -1; 
        } else { 
            var currentNode, previousNode, iterator = 0; 
            currentNode = this.head; 
            previousNode = currentNode; 
            if (index === 0) { 
                this.head = currentNode.next; 
            } else { 
                while (iterator < index) { 
                    iterator++; 
                    previousNode = currentNode; 
                    currentNode = currentNode.next; 
                } 
                previousNode.next = currentNode.next; 
            } 
            this.size--; 
            return currentNode.element; 
        } 
    } 

    // This method removes element from the list. 
    // It returns the removed element, or if its not found it returns -1
    removeElement(element) { 
        var currentNode = this.head; 
        var previousNode = null; 
        while (currentNode != null) { 
            if (currentNode.element === element) { 
                if (previousNode == null) { 
                    this.head = currentNode.next; 
                } else { 
                    previousNode.next = currentNode.next; 
                } 
                this.size--; 
                return currentNode.element; 
            } 
            previousNode = currentNode; 
            currentNode = currentNode.next; 
        } 
        return -1; 
    } 

    // Finds the index of the element
    indexOf(element) { 
        var count = 0; 
        var current = this.head; 
        while (current != null) {  
            if (current.element === element) 
                return count; 
            count++; 
            current = current.next; 
        } 
        return -1; 
    } 

    // Checks if the list is empty 
    isEmpty() { 
        return this.size == 0; 
    } 

    // Returns size of list 
    size_of_list() { 
        return this.size; 
    } 

    // Prints the items in the list
    printList() { 
        var currentNode = this.head; 
        var str = ""; 
        while (currentNode) { 
            str += currentNode.element + " "; 
            currentNode = currentNode.next; 
        } 
        console.log(str); 
    } 
}

// Will need to include test cases 
