class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    insertAt(val, loc) {
        if (this.size < loc) {
            this.add(val);
        }
        else {
            let prev, count = 0, newNode = new Node(val);
            current = this.head;
            while (loc > count) {
                count++;
                prev = current;
                current = current.next;
            }
            prev.next = newNode;
            newNode.next = current;
            this.size++;
        }
    }
    removeElement(val) {
        if (this.size < 2) {
            this.head = null;
            this.size = 0;
            return true;
        }
        else {
            let prev, current = this.head;
            while (current.next != null) {
                if (current.val == val) {
                    prev.next = null;
                    current = null;
                }
                prev = current;
                current = current.next;
            }
            this.size--;
            return true;
        }
    }
    removeFrom(val, loc) {
        if (this.size < loc) {
            this.removeElement(val);
            return true;
        }
        else {
            let prev, count = 0;
            current = this.head;
            while (loc > count) {
                count++;
                prev = current;
                current = current.next;
            }
            prev.next = null;
            current = null;
            this.size--;
            return true;
        }
    }
    find(val) {
        let current = this.head;
        while (current != null) {
            if (current.val == val) {
                return current;
            }
            else {
                current = current.next;
            }
        }
        return null;
    }

    printList() {
        let current = this.head;
        while (current != null) {
            console.log(current.val);
            current = current.next;
        }
    }

    getSize() {
        return this.size;
    }
}

let itemlist = new LinkedList();
itemlist.add(38);
itemlist.add(49);
itemlist.add(13);
itemlist.add(15);
itemlist.printList();

console.log("Item count: ", itemlist.getSize());
console.log("Finding item: ", itemlist.find(13));
console.log("Finding item: ", itemlist.find(78));