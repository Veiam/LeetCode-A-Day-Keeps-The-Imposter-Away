// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    get_list() {
        result = "";
        temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    }
};

const rotate = function (head, rotations) {
    if (head === null || head.next === null || rotations <= 0) {
        return head;
    }

    // find the length and the last node of the list
    let last_node = head;
    let list_length = 1;
    while (last_node.next !== null) {
        last_node = last_node.next;
        list_length += 1;
    }
    // connect the last node with the head to make it a circular list
    // because the list will have a different tail after the rotation
    last_node.next = head;
    // no need to do rotations more than the length of the list
    rotations %= list_length;
    skip_length = list_length - rotations;
    last_node_of_rotated_list = head;
    // skip to find a new head;
    for (i = 0; i < skip_length - 1; i++) {
        last_node_of_rotated_list = last_node_of_rotated_list.next;
    }

    // 'last_node_of_rotated_list.next' is pointing to the sub-list of 'k' ending nodes
    // The new head of the LinkedList will be the node at the beginning of the sublist.
    head = last_node_of_rotated_list.next;
    // The node right before the start of sub-list will be the new tail of the rotated LinkedList
    last_node_of_rotated_list.next = null;
    return head;
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`)
