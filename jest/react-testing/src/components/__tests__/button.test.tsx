import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../button';

describe('button', () => {
    test('clicked', async () => {
        const clickHandler = jest.fn();

        render(<Button onClick={clickHandler} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(clickHandler).toBeCalledTimes(1);
    });
});
