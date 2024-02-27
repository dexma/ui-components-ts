import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { StyledDot, StyledDots } from '@styles/Dots/StyledDots';
import theme from '@utils/theme';

export type DotsProps = {
    steps: number;
    size: number;
};

StyledDots.displayName = 'StyledDots';

export const Dots = (props: DotsProps) => {
    const { steps, size } = props;
    const th = useContext(ThemeContext) || theme;
    const dots = [];
    for (let i = 0; i < steps; i += 1) {
        dots.push(<StyledDot data-testid='dot' key={i} theme={th} size={size} />);
    }
    return (
        <StyledDots data-testid='dots' size={size}>
            {dots}
        </StyledDots>
    );
};
