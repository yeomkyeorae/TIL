import styled from 'styled-components';

const EditInput = styled.input<{ width?: string; minWidth?: string; float?: 'left' | 'right' }>`
    width: ${(props) => props.width ?? 'auto'};
    min-width: ${(props) => props.minWidth ?? '150px'};
    float: ${(props) => props.float ?? 'left'};
    & {
        display: inline-block;
        /* width: 20% !important; */
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
    type: string;
    value: string | number;
    placeholder: string;
    float: 'left' | 'right' | 'none';
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    width: string;
    minWidth: string;
    marginBottom: string;
    disabled: boolean;
    handleEnter: (...args: any[]) => void;
    autoComplete: string;
}>;

export function Editor({
    type = 'text',
    value = '',
    placeholder = '',
    float = 'none',
    disabled = false,
    autoComplete,
    width,
    minWidth,
    marginBottom = '0',
    onChange = () => {},
    onKeyDown = () => {},
    handleEnter,
}: Props): React.ReactElement {
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && handleEnter) {
            handleEnter();
        }
    };

    return (
        <div
            style={{
                display: 'inline-block',
                verticalAlign: 'top',
                float,
                margin: float === 'left' ? `0 8px 0 0` : `0 0 0 8px`,
                marginBottom: `${marginBottom}px`,
            }}
        >
            <EditInput
                onKeyUp={handleKeyUp}
                type={type}
                value={value}
                minWidth={minWidth}
                placeholder={placeholder}
                width={width}
                onKeyDown={onKeyDown}
                onChange={onChange}
                disabled={disabled}
                autoComplete={autoComplete}
            />
        </div>
    );
}
