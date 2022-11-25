// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:
// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:
// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

// Constraints:
// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

var MyLinkedList = function () {
    // buffer head and tail
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.length = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    // if it's out of bound
    if (index < 0 || index >= this.length) {
        return -1;
    }

    let temp = this.head;;
    // check which traversal is faster
    if (index + 1 < this.length - index) {
        while (index + 1) {
            index--;
            temp = temp.next;
        }
    }
    else {
        temp = this.tail
        while (this.length - index) {
            index++;
            temp = temp.prev;
        }
    }

    return temp.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

    let prev = this.head, next = this.head.next;
    let newHead = new Node(val);
    newHead.prev = prev;
    newHead.next = next;
    prev.next = newHead;
    next.prev = newHead;
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let prev = this.tail.prev, next = this.tail;
    let newTail = new Node(val);
    newTail.prev = prev;
    newTail.next = next;
    prev.next = newTail;
    next.prev = newTail;
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) {
        return;
    }

    let prev, next;
    if (index < this.length - index) {
        prev = this.head;
        while (index) {
            prev = prev.next;
            index--;
        }
        next = prev.next;
    } else {
        next = this.tail;
        while (this.length - index) {
            next = next.prev;
            index++;
        }
        prev = next.prev;
    }
    this.length++;
    let newNode = new Node(val);
    newNode.prev = prev;
    newNode.next = next;
    prev.next = newNode;
    next.prev = newNode

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) {
        return;
    }
    let prev, next;

    if (index < this.length - index) {
        prev = this.head;
        while (index) {
            prev = prev.next;
            index--;
        }
        next = prev.next.next;
    } else {
        next = this.tail;
        while (this.length - index - 1) {
            next = next.prev;
            index++;
        }
        prev = next.prev.prev;
    }
    this.length--;
    prev.next = next;
    next.prev = prev;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */