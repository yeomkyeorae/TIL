import styled from 'styled-components';

const OptSelect = styled.select<{ minWidth?: string }>`
    min-width: ${(props) => props.minWidth ?? '150px'};
    & {
        display: inline-block;
        width: 20% !important;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        color: #555;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        margin: 0;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }

    &:focus {
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }

    &[disabled],
    &[readonly] {
        background-color: #eeeeee;
        opacity: 1;
    }
`;

type Props = Partial<{
    value: number | string;
    float: 'left' | 'right' | 'none';
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    minWidth: string;
    disabled: boolean;
    children: React.ReactNode;
}>;

export function Selector({
    value = 0,
    float = 'none',
    onChange = () => {},
    minWidth,
    disabled,
    children,
}: Props): React.ReactElement {
    return (
        <div
            style={{
                display: 'inline-block',
                verticalAlign: 'top',
                float,
                margin: float === 'left' ? `0 8px 0 0` : `0 0 0 8px`,
            }}
        >
            <OptSelect value={value} minWidth={minWidth} onChange={onChange} disabled={disabled} data-testid='selector'>
                {children}
            </OptSelect>
        </div>
    );
}
