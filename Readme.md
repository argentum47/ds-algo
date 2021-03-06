##Implementations for algorithms.

### LinkedList
  1. Simple
  2. Doubly

  #### methods

  ##### Simple Linked List
  `LinkedList#insert("value", "prevNodeValue" || "head")`

  `LinkedList#remove("value")`
  
  `LinkedLisr#find("value")`

  ##### Doubly Linked List
  `DoublyLinkedList#insertAfter("value", "afterValue")`
  
  `DoublyLinkedList#insertBefore("value", "beforeValue")`
  
  `DoublyLinkedList#find("value")

### HashTable
  1. Chaining
  2. Probing

  #### methods
  ##### Hash Chaining
  `HashSeperateChaining#insert(key, value)`
  
  `HashSeperateChaining#makePair(key, value)`
  
  `HashSeperateChaining#get(key)`
  
  `HashSeperateChaining#showDistribution()`

  ##### Hash Probing
  `HashLinearProbing#insert(key, value)`

  `HashLinearProbing#get(key)`

  `HashLinearProbing#showDistribution()`

### Tree

  <h4> methods</h4>
  <h5>Binary Search Tree</h5>
  `BST#insert(data)`

  `BST#inOrder(node)`

  `BST#preOrder(node)`

  `BST#postOrder(node)`

  `BST#getMax()`

  `BST#getMin()`

### Graph

  <h4> methods</h4>
  <h5>Undirected Graphs</h5>
  `Graph#new(numberOfVertices)`

  `Graph#addEdge(vertex1, vertex2)`

  `Graph#showGraph()`

  `Graph#bfs(startinVertex)`

  `Graph#dfs(startingVertex)`

  `Graph#topSort(["array", "of", "data"])`
