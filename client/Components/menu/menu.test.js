import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Menu from './menu.jsx';

describe('testing Menu component', ()=> {

	//shallow rendering by Enzyme
	it('should return a single-node wrapper.', ()=> {
        const fake_Data = []
        expect(shallow(<Menu menuData = {fake_Data}/>).length).toEqual(1)
    })
    
    it('should render text', ()=> {
        const fake_Data = []
		let wrapper = shallow(<Menu menuData = {fake_Data}/>)
		expect(wrapper.find('#menuTitle1').text()).toEqual('Most Popular')
		expect(wrapper.find('#menuTitle2').text()).toEqual('Full Menu')
	})



	//snapshot testing by Jest
	// it('should grab a snapshot of the component.', ()=> {
	// 	const component = renderer.create(<App />)
	// 	let tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

})