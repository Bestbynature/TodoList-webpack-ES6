jest.mock('../index.js')

const {updateTask} = require('../index.js')

test('sample testing of jest', ()=>{
    expect(1).toBe(1)
})

describe('Methods for adding and deleting a task', ()=>{

    test("Adding a new task", ()=>{
        expect(updateTask.addTask({
            index: 1,
            description: "going to the restaurant",
            completed: false
        })).toStrictEqual([{
            index: 1,
            description: "going to the restaurant",
            completed: false
        }])
    })



    test("deleting a task", ()=>{
        expect(updateTask.deleter({
            index: 1,
            description: "going to toilet",
            completed: false
        })).toStrictEqual([])
    })
})
