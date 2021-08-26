import {IndexArrangement} from '../src/todo'

describe("Index Arangement", ()=>{
    let array = [{index: 3}, {index: 1}, {index: 2}];

     test("arranges all objects' indexes to fit their position in the list",()=>{
        IndexArrangement(array);
        expect(array[0].index).toBe(1);
        expect(array[1].index).toBe(2);
        expect(array[2].index).toBe(3);
    })
})