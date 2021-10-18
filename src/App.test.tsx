import { mount } from 'enzyme'
import { findByTestAttr } from './util'
import App from './App'


const setup = () => {
  return mount(<App />)
}

let wrapper: any

beforeEach(()=>{
  wrapper = setup()
})

// console.log('test', wrapper.debug())
describe('render', () => {

  test ('renders header component', () => {
    const component = findByTestAttr(wrapper, 'header_comp')
    expect(component.exists()).toBe(true)
  
  });
  
  test ('renders body component', () => {
    const component = findByTestAttr(wrapper, 'body_comp')
    expect(component.exists()).toBe(true)
  
  });
  
})


