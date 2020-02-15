class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
  
    insertLast(item) {
      if(this.head === null) {
        this.insertFirst(item);
      }
      else {
        let tempNode = this.head;
        while(tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
  
    insertBefore(newItem, beforeItem) {
      if(this.head === null) {
        this.insertFirst(newItem)
        return
      }
      let currNode = this.head
      let prevNode = this.head
  
      while (currNode !== null && currNode.val !== beforeItem) {
        prevNode = currNode
        currNode = currNode.next
      }
  
      if(currNode === null) {
        this.insertLast(newItem)
        return
      }
  
      const tempNode = new _Node(newItem, currNode)
  
      prevNode.next = tempNode
    }
  
    insertAfter(newItem, afterItem) {
      if(this.head === null) {
        this.insertFirst(newItem)
        return
      }
  
      let currNode = this.find(afterItem)
  
      if(currNode === null) {
        this.insertLast(newItem)
        return
      }
  
      const tempNode = new _Node(newItem, currNode.next)
  
      currNode.next = tempNode
    }
  
    insertAt(item, position) {
      if(this.head === null) {
        this.insertFirst(item)
        return
      }
  
      let currNode = this.head
      let currPosition = 1
  
      while(currPosition < position - 1) {
        currNode = currNode.next
        currPosition++
      }
  
      const tempNode = new _Node(item, currNode.next)
  
      currNode.next = tempNode
    }
  
    find(item) {
      let currNode = this.head
      //If the list is empty
      if(!this.head) {
        return null;
      }
      //check for the item
      while(currNode.value !== item) {
        //return null if it's the end of the list and the item is not on the list
        if(currNode.next === null) {
          return null;
        }
        else {
          currNode = currNode.next;
        }
      }
      return currNode;
    }
  
    remove(item) {
      if(!this.head) {
        return null;
      }
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      let currNode = this.head;
      let previousNode = this.head;
  
      while ((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currNode.next;
    }
  }
  
  function main() {
    const SLL = new LinkedList()
  
    SLL. insertFirst('Apollo')
    SLL. insertLast('Boomer')
    SLL. insertLast('Helo')
    SLL. insertLast('Husker')
    SLL. insertLast('Starbuck')
    SLL. insertLast('Tauhida')
    SLL.find('Husker')
    SLL.remove('Husker')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tahuida')
  
    return SLL;
  }
  
  console.log(main())
  
  const list = main()
  
  function display(list) {
    let output = ''
    let currNode = list.head
    while(currNode !== null) {
      output += currNode.value
      if(currNode.next !== null) {
        output += ' -> '
      }
      currNode = currNode.next
    }
    return output
  }
  console.log(display(list))
  
  function size(list) {
    let size = 0
    let currNode = list.head
    while(currNode !== null) {
      size++
      currNode = currNode.next
    }
    return size
  }
  console.log(size(list))
  
  const nList = new LinkedList()
  
  function isEmpty(list) {
    if(list.head === null) {
      return true
    }
    else {
      return false
    }
  }
  console.log(isEmpty(nList))
  
  function findPrevious(item, list) {
    if(list.head === null) {
      console.log('linked list is empty')
      return
    }
    let currNode = list.head
    let prevNode = list.head
  
    while(currNode !== null && currNode.val !== item) {
      prevNode = currNode
      currNode = currNode.next
    }
    if(currNode === null) {
      console.log('item not found')
      return
    }
    return console.log(prevNode.value)
  }
  console.log(findPrevious('Helo', list))
  
  function findLast(list) {
    if(list.head === null) {
      return 'linked list is empty'
    }
    let currNode = list.head
    while(currNode.next != null) {
      currNode = currNode.next
    }
    return currNode.value
  }
  console.log(findLast(list))
  
  function reverseList(list) {
    let currNode = list.head
    let prevNode = list.head
    let nextNode = list.head
  
    while(nextNode !== null) {
      if(currNode === prevNode) {
        currNode.next === null
      }
      else {
        currNode.next = prevNode
      }
      prevNode = currNode
      currNode = nextNode
      nextNode = nextNode.next
    }
    return prevNode
  }
  
  function thirdFromEnd(list) {
    let fastNode = list.head
    let slowNode = list.head
  
    while(fastNode.next.next !== null) {
      fastNode = fastNode.next.next.next
      console.log("fast", fastNode)
      slowNode = slowNode.next.next
      console.log("slow", slowNode)
    }
    return slowNode.value
  }
  console.log("3rd", thirdFromEnd(list))
  
  function middle(list) {
    let fastNode = list.head
    let slowNode = list.head
  
    while(fastNode !== null) {
      fastNode = fastNode.next.next
      slowNode = slowNode.next
    }
    return slowNode.value
  }
  console.log("middle", middle(list))
  
  const newList = new LinkedList()
  newList.insertFirst('1')
  newList.insertLast('2')
  newList.insertLast('3')
  newList.insertLast('4')
  
  console.log(newList)
  
  function cycle(list) {
    let currNode = list.head
    while(currNode.next !== null) {
      currNode = currNode.next
    }
    currNode.next = list.head
    return list
  }
  console.log(cycle(list))
  
  console.log(display(newList))