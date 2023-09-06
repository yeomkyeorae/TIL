import { render, fireEvent, waitFor } from '@testing-library/react';
import { Selector } from '../selector';

describe('selector', () => {
    const mockedOptions = [<option key={'opt1'} value={'value1'} />, <option key={'opt2'} value={'value2'} />];

    test('onChange function called', async () => {
        const mockedOnChange = jest.fn();
        const { queryByTestId, getByDisplayValue } = render(
            <Selector onChange={mockedOnChange}>{mockedOptions}</Selector>,
        );

        const selector = queryByTestId('selector') as HTMLSelectElement;

        expect(selector).toBeDefined();
        expect(selector).not.toBeNull();
        expect(mockedOnChange).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(selector, { key: 'ArrowDown', code: 40 });

        waitFor(() => {
            getByDisplayValue('value2');

            fireEvent.click(getByDisplayValue('value2'));
            expect(selector.value).toBe('value2');
        });
    });
});
