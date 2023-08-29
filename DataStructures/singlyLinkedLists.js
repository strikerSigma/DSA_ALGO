class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else
        {
        this.tail.next = newNode
        this.tail = newNode
        }
        this.length++;
        return true;
    }
    pop(){
        var current = this.head;
        if(!current){return undefined}
        var newTail = current
        while(current.next){
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if(this.length === 0){this.head = null, this.tail = null}
        return newTail;
    }
    shift(){
        if(!this.head)return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
    }
    unShift(val){
       var newNode = new Node(val);
       if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            return newNode;
        }
        const currentHead = this.head;
        this.head = newNode;
        this.head.next = currentHead;
        return newNode;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var current = this.head;
        let count = 0
        while(count !== index){
            current = current.next;
            count++;
        }
        return current;
    }
    set(index, val){
        var foundNode = get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index <0 || index>this.length ) return false;
        if(index === this.length) return this.push(val);
        if(index === 0){ this.unShift(val); return true;}
        var currentIndex = this.get(index-1);
        var currentPointer = currentIndex.next;
        var newNode = new Node(val);
        currentIndex.next = newNode;
        newNode.next = currentPointer;
        this.length++;
        return true;
    }
    remove(index){
         if(index <0 || index>=this.length ) return false;
         if(index === this.length-1) { this.pop(); return true;}
         var prev = this.get(index-1);
         var current = prev.next;
         current.val = null;
         var next = current.next;
         current.next = null;
         prev.next = next;
         this.length--;
         return true;
    }
}
const list = new SinglyLinkedList();
list.push("O hi there");
list.push(" Ibrahim");
list.push(" how ");
list.push(" are");
list.push(" you?");
// console.log(list.shift())
// console.log(list.pop());
// console.log(list.unShift('yo'))
// console.log(list.get(2));
list.insert(2,"damn yo")
console.log(list.get(2))
console.log(list.remove(2));
console.log(list.get(2))