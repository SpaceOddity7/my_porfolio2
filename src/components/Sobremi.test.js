import React from 'react';
import { render } from '@testing-library/react';
import Sobremi from './Sobremi';
    
describe('Sobremi', () => {
    it('renders text', () => {
        const text = 'Welcome to our website';
        const { getByText} = render(
    <Sobremi text={text}/>
    );
    
    const heading = getByText(text);
    expect(heading).toBeInTheDocument();
    });
});