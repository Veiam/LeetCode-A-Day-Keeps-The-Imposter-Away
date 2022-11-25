// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print_list() {
        let temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
        console.log();
    }
}


const reverse_every_k_elements = function (head, k) {
    let current = head, prev = null;
    while (true) {
        const end = prev;
        // after reversing the LinkedList 'current' will become the last node of the sub-list
        const start = current;
        let i = 0;
        while (current !== null && i < k) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            i++;
        }
        // connect with the last part
        // by connecting end to prev
        if (end !== null) {
            end.next = prev;
        } else {
            head = prev;
        }
        // connect with the next part
        // by connecting start to current
        start.next = current;

        if (current === null) {
            break;
        }
        prev = start;
    }
    return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse_every_k_elements(head, 3);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();