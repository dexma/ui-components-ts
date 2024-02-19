import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, withTheme } from 'styled-components';
import omit from 'lodash/omit';

import theme, { Theme } from '@/utils/theme';
import { StyledProgress, StyledMark } from '@/styles/Progress/StyledProgress';

const propTypes = {
    /**
     * Number of the percent
     */
    percent: PropTypes.number.isRequired,
    /**
     * List if marks `[{ value: 20, color: 'blue' }, { value: 30, color: 'red' }]`
     */
    marks: PropTypes.arrayOf(PropTypes.shape({})),
    /**
     * Set the text on the end
     */
    text: PropTypes.string,
    /**
     * Set the bar transparent
     */
    isTransparent: PropTypes.bool,
    /**
     * Set the color name for the bar, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
     */
    color: PropTypes.string,
    /**
     * Theme json based
     */
    theme: PropTypes.shape({}),
};

const defaultProps = {
    isTransparent: false,
    color: 'green',
    theme: theme,
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

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default withTheme(Progress);
