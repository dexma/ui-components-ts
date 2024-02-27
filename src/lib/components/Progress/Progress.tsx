import React, { useContext } from 'react';
import { ThemeContext, withTheme } from 'styled-components';
import omit from 'lodash/omit';

import theme from '@utils/theme';
import { StyledProgress, StyledMark } from '@styles/Progress/StyledProgress';

const defaultProps = {
    isTransparent: false,
    color: 'green',
};

type ProgressProps = {
    percent: number;
    marks?: Array<{
        value: number;
        color: string;
    }>;
    text?: string;
    isTransparent: boolean;
    color: string;
};

export const Progress = (props: ProgressProps) => {
    const { text, marks, percent, color, isTransparent } = props;
    const th = useContext(ThemeContext) || theme;
    const progressProps = omit(props, ['text', 'marks']);
    return (
        <StyledProgress data-testid='progress' $color={color} $percent={percent} $isTransparent={isTransparent} theme={th}>
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

Progress.defaultProps = defaultProps;

export default withTheme(Progress);
