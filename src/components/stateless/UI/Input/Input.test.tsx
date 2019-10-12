import React from 'react'
import {shallow} from 'enzyme';
import Input from './Input';

describe('Input component', () => {
    let component;
    beforeEach(() => component = shallow(<Input />));

    it('should render without errors', () => {
        expect(component).toMatchSnapshot();
        expect(component.length).toBe(1);
        expect(component.length).not.toBe(2);
        expect(component).toHaveClassName('InputStyles');
    });
});