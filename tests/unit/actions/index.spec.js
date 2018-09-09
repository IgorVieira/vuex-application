import { actions } from './../../../src/store'

describe('actions', () => {
  it('should called this action f', async () => {
    const commit = jest.fn()
    const { removeAll } = actions

    await removeAll({ commit })
    expect(commit).toHaveBeenCalledWith(
      'REMOVE_ALL_TASKS')
  })
})
