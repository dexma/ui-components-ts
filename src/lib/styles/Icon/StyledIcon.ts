import styled from 'styled-components';

type StyledIconProps = {
    height: number;
    $fillColor: string;
};

const StyledIcon = styled.svg<StyledIconProps>`
    fill: ${(props) => props.$fillColor};
    height: ${(props) => props.height};
`;

export { StyledIcon };
