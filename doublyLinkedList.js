class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
         if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--;
        return poppedNode;
        
    }

    shift(){
        if(!this.head) return undefined;
        let shiftedNode = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.head = shiftedNode.next
            this.head.prev = null
            shiftedNode.next = null
        }
        this.length--;
        return shiftedNode;
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        
        this.length++;
        return this
    }

     get(index){
        if( index < 0 || index >= this.length) return null;
        let mid = this.length/2
        let counter, current;
        if(index <= mid){
            counter = 0
            current = this.head
            while(counter !== index){
            current = current.next
            counter++
        }
        } else {
            counter = this.length - 1
            current = this.tail
            while(counter !== index){
            current = current.prev
            counter--
        }
            
        }
        return current
     }

      set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
      }

      insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift(); // Remove from the head.
    if (index === this.length - 1) return this.pop(); // Remove from the tail.

    let removed = this.get(index); // Get the node at the specified index.
    let beforeNode = removed.prev; // Node before the one being removed.
    let afterNode = removed.next; // Node after the one being removed.

    // Re-link the nodes to bypass the removed node.
    beforeNode.next = afterNode;
    if (afterNode) afterNode.prev = beforeNode;

    // Disconnect the removed node.
    removed.next = null;
    removed.prev = null;

    this.length--;
    return removed;
}

    
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
list.insert(1,"Mohamed")