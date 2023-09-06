import styled from 'styled-components';

const StyledButton = styled.button<{ color?: string, backgroundColor?: string, width?: string }>`
    & {
        display: inline-block;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: ${props => props.width ?? 'auto'};
    }

    &:focus,
    &:active:focus,
    &.active:focus,
    &.focus,
    &:active.focus,
    &.active.focus {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
        outline-style: none;

    }

    &:hover,
    &:focus,
    &.focus {
        color: #333333;
        text-decoration: none;
    }

    &:active,
    &.active {
        outline: 0;
        outline-style: none;
        background-image: none;
        -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }

    &.disabled,
    &[disabled] {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.65;
        filter: alpha(opacity=65);
        -webkit-box-shadow: none;
        box-shadow: none;
    }



    & {
        color: ${props => props.color ?? '#333333'};
        background-color: ${props => props.backgroundColor ?? '#ffffff'};
        border-color: #cccccc;
    }

    &:hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
        color: #333333;
        background-color: #e6e6e6;
        border-color: #adadad;
    }

    &:active,
    &.active {
        background-image: none;
    }

    &.disabled,
    &[disabled] {
        background-color: #ffffff;
        border-color: #cccccc;
    }
`
type Props = Partial<{ 
    float: 'left' | 'right' | 'none',
    url: string, 
    tooltip: string, 
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    width: string, 
    height: string,
    color: string,
    backgroundColor: string,
    children: React.ReactNode,
}>;

export function Button({ float = 'left', url, tooltip, width, height, color, backgroundColor, onClick, ...props}: Props ) {
    return <div style={{ display: 'inline-block', float, margin: (float === 'left')? `0 8px 0 0` : `0 0 0 8px` }}>
        <StyledButton color={color} backgroundColor={backgroundColor} width={width} onClick={onClick}>{props.children}</StyledButton>
    </div>
}