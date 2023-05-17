class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null
    }
}

class LinkedListClass {
    constructor(head = null){
        this.head = head;
        this.tail = null;
    }
    size(){
        let count = 0
        let node = this.head
        while(node != null){
            count++
            node = node.next;
        }
        return count
    }

    last(){
        return this.tail
    }


    empty(){
        if(this.head == null){
            return true
        }
        return false 
    }

    addToFront(node){
        if(this.head == null){
            this.head = node;
            this.tail = node;
        } else{
            node.next = this.head;
            this.head = node;

        }

    }
    addToBack(node){
        this.tail.next = node;
        this.tail = node;
    }
    insertAt(node, position){

    }
    removeAt(position){

    }

    removeFromBack(){
        
    }

}

let list = new LinkedListClass();
console.log(list.empty())

list.addToFront(new Node('rola'))
list.addToBack(new Node('vinson'))
list.addToBack(new Node('joanna'))
list.addToBack(new Node('ben'))
list.addToBack(new Node('dj'))
list.addToBack(new Node('aaron'))

console.log(list.empty())

console.log(list.head)