import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInput = attachThemeAttrs(styled.input)`
    font: inherit;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    transition: all 0.1s linear, padding 0s, border 0s;
    display: inline-block;
    padding: 0 1rem;
    width: 56px;
    height: 56px;
    border-radius: 20px;
    line-height: 2.5rem;
    color: ${props => props.palette.text.main};
    font-size: 28px;
    box-sizing: border-box;
    margin: 0 6px;
    text-align: center;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :focus,
    :active {
        outline: 0;
        padding: 0 0.9375rem;
        border: 2px solid ${props => props.palette.brand.main};
        background-color: ${props => props.palette.background.main};
        box-shadow: ${props => props.shadows.brand};
    }

    ::placeholder {
        color: ${props => props.palette.text.header};
        font-weight: 500;
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[disabled] {
        background-color: ${props => props.palette.background.disabled};
        border: 1px solid ${props => props.palette.border.disabled};
        color: ${props => props.palette.text.disabled};
        cursor: not-allowed;
        user-select: none;

        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${props => props.palette.background.disabled};
            border: 1px solid ${props => props.palette.border.disabled};
        }
    }

    ${props =>
        props.error &&
        `
        background-color: ${props.palette.background.main};
        border: 2px solid ${props.palette.error.main};
        background-clip: padding-box;

        :focus,
        :active {
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            padding: 0 1rem;
            outline: 0;
        }
    `}

    ${props =>
        !props.isActive &&
        `
        :focus,
        :active {
            box-shadow: none;
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.border.main};
        }
    `}
`;

const StyledFieldset = styled.fieldset`
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-align: center;
`;

const StyledLabel = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: 0.125rem;
    align-self: center;
    box-sizing: border-box;
    text-align: center;
    &:empty {
        margin: 0;
    }
`;

export { StyledInput, StyledFieldset, StyledLabel };
