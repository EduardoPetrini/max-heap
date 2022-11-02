/**
 * parent = i / 2
 * left = 2 * i + 1
 * right = 2 * i + 1
 */
const swap = (heap, index1, index2) => {
  const temp = heap[index1];
  heap[index1] = heap[index2];
  heap[index2] = temp;
};

const heapify = (heap, index) => {
  const parentIndex = Math.floor(index / 2);

  if (heap[parentIndex] < heap[index]) {
    swap(heap, parentIndex, index);
    heapify(heap, parentIndex);
  }

  return heap;
};

const insert = (heap, num) => {
  heap.push(num);
  const lastIndex = heap.length - 1;

  heap = heapify(heap, lastIndex);
};

const start = (n = 10) => {
  const heap = [];

  for (let i = 0; i < n; i++) {
    const num = Math.round(Math.random() * 10 * n);
    console.log(`${heap} adding ${num}`);
    insert(heap, num);
    console.log(`${heap} result size ${heap.length}`);
  }
};

start();
