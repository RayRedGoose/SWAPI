import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import movieResults from '../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CharacterCard
        key={'card1'}
        isFavorite={false}
        character={characterResults[0]}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />);
  })

  it('should render CharacterCard with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
