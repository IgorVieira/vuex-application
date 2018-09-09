import { getters } from './../../../src/store'

const { countLinks } = getters

describe('getters', () => {
  it('should count the elements in the list', () => {
    const state = {
      tasks: [
        'Make a coffee',
        'Read a book',
        'Listen podcast'
      ]
    }

    expect(countLinks(state)).toEqual(3)
  })
})
