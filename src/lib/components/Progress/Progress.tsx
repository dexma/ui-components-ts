import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledProgress, StyledMark } from '@styles/Progress/StyledProgress';

type ProgressProps = {
    percent: number;
    marks?: Array<{
        value: number;
        color: string;
    }>;
    text?: string;
    isTransparent?: boolean;
    color: string;
};

export const Progress = ({ text, marks, percent, color = 'green', isTransparent, ...props }: ProgressProps) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <StyledProgress data-testid='progress' $color={color} $percent={percent} $isTransparent={isTransparent} theme={th} {...props}>
            <div className='outer'>
                <div className='inner'>
                    <div className='background' />
                    {marks && marks.length > 0 ? marks.map((mark, i) => <StyledMark key={i} $color={mark.color} $value={mark.value} theme={th} />) : null}
                </div>
            </div>
            {text && <div className='text'>{text}</div>}
        </StyledProgress>
    );
};

export default Progress;
