import { render, fireEvent, screen } from '@testing-library/react';
import { Editor } from '../editor';

describe('editor', () => {
    test('check enter key pressed', async () => {
        const handleEnter = jest.fn();

        render(<Editor handleEnter={handleEnter} />);

        const input = screen.getByRole('textbox');
        fireEvent.keyUp(input, { key: 'Enter' });

        expect(handleEnter).toBeCalledTimes(1);
    });
});
