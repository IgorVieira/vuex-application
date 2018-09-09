import { mutations } from '../../../src/store'

const { ADD_TASK, REMOVE_TASK, REMOVE_ALL_TASKS } = mutations

describe('Mutations in store', () => {
  it('should add some value into the tasks', () => {
    const state = { tasks: [] }
    const task = 'Hey'

    expect(ADD_TASK(state, task)).toEqual(1)
  })

  it('should remove some value into the tasks', () => {
    const state = { tasks: ['Hey'] }

    expect(REMOVE_TASK(state, 0)).toEqual(['Hey'])
  })

  it('should remove all values into the tasks', () => {
    const state = { tasks: ['Hey'] }

    expect(REMOVE_ALL_TASKS(state)).toEqual([])
  })
})
