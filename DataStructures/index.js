class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(){
    const max =  this.values[0];
    const end = this.values.pop();
    if(this.values.length>0) {
        this.values[0] = end;
        this.sinkDown();
    }
    return max;
}
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        let element = this.values[0];
            console.log("array:",this.values)
        while(true){
            let leftChildIdx = 2*idx +1;
            let rightChildIdx = 2*idx +2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild=  this.values[leftChildIdx];
                if(leftChild>element) swap = leftChild
            }
            if(rightChildIdx < length){
                rightChild=  this.values[rightChildIdx];
                if((rightChild>element && swap ===null)|| (swap!==null && rightChild>leftChild)) swap = rightChild
            }
            if(swap==null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element;
            idx = swap;
            
        }
    }
}
const newHeap = new MaxBinaryHeap();
console.log(newHeap.insert(55))
console.log(newHeap.insert(5))
console.log(newHeap.insert(65))
console.log(newHeap.insert(10))
console.log(newHeap.insert(4))
console.log(newHeap.insert(13))
console.log(newHeap.extractMax())
console.log(newHeap.extractMax())
console.log(newHeap.extractMax())