class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}


class LinkedList{
  constructor(){
    this.head = null
  }

  insertNode(data){
    const element = new Node(data)
    if(!this.head){
      this.head = element
    }else{
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = element
    }
  }

  printList(){
    let current = this.head
    while(current){
      console.log(current.data)
      current = current.next
    }
  }

  insertHead(data){

     let newNode = new Node(data)
     newNode.next = this.head
     this.head = null
     this.head = newNode
    
  }

  insertAt(data,position){
    let track = 0
    let current = this.head
    // if position given as from 0 index then poistion-1 
    // if position given as from array start from 1 then position-2
    while(track<position-1){
      current = current.next
      track++;
    }
    let nextElement = current.next
    let newNode = new Node(data)
    current.next = newNode
    newNode.next = nextElement
  }

  reverseList(){
    let current = this.head
    let prev = null
    let next = null

    while(current){
      let nextElement = current.next
      current.next = prev
      prev = current
      current = nextElement
    }
    this.head = prev
  }



}


class MergeList{

  mergeTwoList(head1, head2){
    let firstList = head1.head
    let secondList = head2.head
    
    if(!firstList) return secondList;
    if(!secondList) return firstList;
    
  let headNode = new Node(0)
  let result = headNode
    while(true){
      if(!firstList){
        result.next = secondList
        break
      }

      if(!secondList){
        result.next = firstList
        break
      }
      if(firstList.data<=secondList.data){
        result.next = firstList
        firstList = firstList.next
      }else{
        result.next = secondList
        secondList = secondList.next
      }
      result = result.next
    }
    return headNode;
  }

  print(list){
    let current = list.next
    while(current){
      console.log(current)
      current = current.next
    }
  }
}



const firstList = new LinkedList()
firstList.insertNode(5)
firstList.insertNode(10)
firstList.insertNode(15)

const secondList = new LinkedList()
secondList.insertNode(2)
secondList.insertNode(3)
secondList.insertNode(20)


const mergeList = new MergeList()
const mergedList = mergeList.mergeTwoList(firstList, secondList)
mergeList.print(mergedList)



