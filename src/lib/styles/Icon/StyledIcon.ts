import { ForwardedRef } from 'react';
import styled from 'styled-components';

type StyledIconProps = {
    $fillColor: string;
    ref: ForwardedRef<unknown>;
};

const StyledIcon = styled.svg<StyledIconProps>`
    fill: ${(props) => props.$fillColor} !important;
`;

export { StyledIcon };
