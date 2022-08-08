
export function createLinkedList<T>() {
    const linkedList: { head: node<T> | null, tail: node<T> | null, size: number } = {
        head: null,
        tail: null,
        size: 0,
    };

    return {
        get head() {
            return linkedList.head?.value;
        },
        get tail() {
            return linkedList.tail?.value;
        },
        get size() {
            return linkedList.size;
        },
        append(value: T) {
            const newNode = createNode(value, linkedList.tail, null);

            linkedList.size += 1;
            if (linkedList.head === null || linkedList.tail === null) {
                linkedList.head = newNode;
                linkedList.tail = newNode;
                return;
            }
            linkedList.tail.nextNode = newNode;
            linkedList.tail = newNode;
        },
        prepend(value: T) {
            const newNode = createNode(value, null, linkedList.head);
            linkedList.size += 1;
            if (linkedList.head === null || linkedList.tail === null) {
                linkedList.head = newNode;
                linkedList.tail = newNode;
                return;
            }
            newNode.nextNode = linkedList.head;
            linkedList.head = newNode;
        },
        pop() {
            if (linkedList.tail === null || linkedList.head === null) return;
            linkedList.size -= 1;
            if(linkedList.head === linkedList.tail) {
                linkedList.head = null;
                linkedList.tail = null;
                return;
            }
            const penultimate = linkedList.tail.lastNode as node<T>;
            if(penultimate.nextNode !== null) penultimate.nextNode = null;
            linkedList.tail = penultimate;
        },
        at(index: number) {
            if (linkedList.tail === null || linkedList.head === null) {
                return;
            }
            let currentNode = linkedList.head;
            for(let i = 0; i < index; i ++) {
                if(currentNode.nextNode === null) return null;
                currentNode = currentNode.nextNode;
            }
            return currentNode.value;
        },
        find(value: T) {
            if(linkedList.head === null) return;
            let { head: currentNode } = linkedList;
            let index = 0;
            while(currentNode !== null) {
                 if (currentNode.value === value) return index;
                 currentNode = currentNode.nextNode as node<T>;
                 index ++;
            }
            return null;
        },
        contains(value: T) {
            return this.find(value) === null ? false : true;
        },
        toString() {
            let string = '';
            for(let i = 0; i < linkedList.size; i ++) {
                string += `(${this.at(i)}) -> `;
            }
            return string + 'null';
        }
    };
}

type node<T> = {
    value: T,
    lastNode: node<T> | null,
    nextNode: node<T> | null,
};

function createNode<T>(value: T, lastNode: node<T> | null, nextNode: node<T> | null) {
    return {
        value,
        lastNode,
        nextNode
    }
}