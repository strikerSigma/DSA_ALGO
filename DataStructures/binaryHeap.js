class MaxBinaryHeap {
    constructor(){
        this.value = [10,8,7,6,5,4,3,2];
    }
    insert(element){
        this.values.push(element)
        this.bubbleUp();
        return this.value;
    }
    bubbleUp(){
        let idx = this.value.length-1;
        const element = this.value[idx];
        // let index = Math.floor((last-1)/2);
        // let child = this.value[last];
        while(idx>0) {
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.value[parentIdx];
           if(element <= parent) break;
             this.value[parentIdx] = element;
             this.value[idx]= parent;
             idx = parentIdx;
        }
        return idx;
    }
}
const newHeap = new MaxBinaryHeap();
console.log(newHeap.insert(55))