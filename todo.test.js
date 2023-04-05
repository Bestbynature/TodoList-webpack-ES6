jest.mock('./src/index.js')

const { addTask } = require('./src/index.js')


test('sample testing of jest', ()=>{
    expect(1).toBe(1)
})

test("Adding a new task", ()=>{
    expect(addTask({
        index: 1,
        description: "going to toilet",
        completed: false
    })).toStrictEqual([{
        index: 1,
        description: "going to toilet",
        completed: false
    }])
})