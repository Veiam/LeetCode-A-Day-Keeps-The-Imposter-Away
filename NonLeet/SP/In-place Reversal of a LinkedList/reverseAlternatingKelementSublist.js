// Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
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


const reverse_alternate_k_elements = function (head, k) {
    let current = head, prev = null;
    while (current !== null) {
        // end of the Sub will be used to connect the last part
        const endOfTheLastSub = prev;
        // after reversing the LinkedList 'current' will become the last node of the sub-list
        //start of the sub will be at the end
        const lastOfTheSub = current;
        let i = 0;

        // while current is not null, reverse the k amount
        while (current !== null && i < k) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            i++;
        }

        // if the end of the sub exist
        if (endOfTheLastSub !== null) {
            // connect with the previous part
            endOfTheLastSub.next = prev;
        } else {
            // else set the head to previous value
            head = prev;
        }

        // connect with the next part
        lastOfTheSub.next = current;

        i = 0;

        // skip k amount
        while (current !== null && i < k) {
            prev = current;
            current = current.next;
            i++;
        }

        // if current is null, exit
        if (current == null) {
            break;
        }

    }
    return head;
};



head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 2).get_list()}`)
