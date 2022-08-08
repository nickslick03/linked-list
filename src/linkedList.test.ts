import { createLinkedList } from "./linkedList";

test( 'linked list', () => {
    const myLinkedList = createLinkedList();
    myLinkedList.append('christian');
    myLinkedList.append('nick');
    myLinkedList.append('nathanael');
    myLinkedList.prepend('catherine');
    myLinkedList.append('milo');
    myLinkedList.pop(); // catherine -> christian -> nick -> nathanael -X> milo
    
    expect(myLinkedList.size).toBe(4);
    expect(myLinkedList.head).toBe('catherine');
    expect(myLinkedList.tail).toBe('nathanael');
    expect(myLinkedList.at(1)).toBe('christian');
    expect(myLinkedList.contains('milo')).toBe(false);
    expect(myLinkedList.contains('nathanael')).toBe(true);
    expect(myLinkedList.find('christian')).toBe(1);
    expect(myLinkedList.toString()).toBe('(catherine) -> (christian) -> (nick) -> (nathanael) -> null');
});