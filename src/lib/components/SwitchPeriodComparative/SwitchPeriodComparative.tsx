import React from 'react';
import PropTypes from 'prop-types';
import moment, { Moment } from 'moment';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';
import { uniqueId } from 'lodash';
import theme from '@/utils/theme';
import { StyledSwitchPeriodComparative } from '@/styles/SwitchPeriodComparative/StyledSwitchPeriodComparative';
import FieldGroup from '@/components/FieldGroup/FieldGroup';
import { ISO_FORMAT } from '@/utils/dates';

const getRangeDaysBetweenTwoDates = (startDate: string, endDate: string) => {
    const start = moment(new Date(startDate)).startOf('day');
    const end = moment(new Date(endDate)).startOf('day');
    const duration = moment.duration(end.diff(start));
    return duration.asDays();
};

const getDayBefore = (date: string, days: number) => moment(new Date(date)).subtract(days, 'd');
const getYearBefore = (date: string, years: number) => moment(new Date(date)).subtract(years, 'y');

export const getPreviousDate = (startDate: string, endDate: string): [string, string] => {
    const rangeDaysBetweenTwoDates = getRangeDaysBetweenTwoDates(startDate, endDate);
    const end = getDayBefore(startDate, 1).endOf('day');
    const start = getDayBefore(end.toString(), rangeDaysBetweenTwoDates).startOf('day');
    return [start.format(ISO_FORMAT), end.format(ISO_FORMAT)];
};

export const getSamePeriodLastYear = (startDate: string, endDate: string): [string, string] => {
    const start = moment(new Date(startDate)).startOf('day').toString();
    const end = moment(new Date(endDate)).startOf('day').toString();
    const startYearBefore = getYearBefore(start, 1);
    const endYearBefore = getYearBefore(end, 1);
    return [startYearBefore.format(ISO_FORMAT), endYearBefore.format(ISO_FORMAT)];
};

const propTypes = {
    /**
     * Set if previous or last period is selected
     */
    selectedPeriod: PropTypes.oneOf(['previous_period', 'last_period']).isRequired,
    /**
     * Set start date
     */
    startDate: PropTypes.string,
    /**
     * Set end date
     */
    endDate: PropTypes.string,
    /**
     * Set text previous
     */
    previousPeriodText: PropTypes.string,
    /**
     * Set text same period
     */
    samePeriodLastYearText: PropTypes.string,
    /**
     * Call this function after a period is selected
     */
    onPeriodSelect: PropTypes.func,
    /**
     * Theme json based
     */
    theme: PropTypes.shape({}),
};

const defaultProps = {
    selectedPeriod: 'previous_period',
    theme: theme,
};

enum SelectedPeriod {
    PREVIOUS_PERIOD = 'previous_period',
    LAST_PERIOD = 'last_period',
}
type SwitchPeriodComparativeProps = {
    selectedPeriod: 'previous_period' | 'last_period';
    startDate: string;
    endDate: string;
    previousPeriodText?: string;
    samePeriodLastYearText?: string;
    onPeriodSelect?: ({ period, date }: { period: string; date: { startDate: Moment; endDate: Moment } }) => void;
};
export const SwitchPeriodComparative = (props: SwitchPeriodComparativeProps) => {
    const { selectedPeriod, startDate, endDate, previousPeriodText, samePeriodLastYearText, onPeriodSelect } = props;
    const switchPeriodComparativeProps = omit(props, ['selectedPeriod', 'startDate', 'endDate', 'previousPeriodText', 'samePeriodLastYearText', 'onPeriodSelect']);
    const formatDate = (start: string, end: string): { startDate: Moment; endDate: Moment } => {
        const newStartDate = moment(start, ISO_FORMAT).startOf('day');
        const newEndDate = moment(end, ISO_FORMAT).endOf('day');
        return {
            startDate: newStartDate,
            endDate: newEndDate,
        };
    };

    const renderPeriodComparativeItem = (text: string | undefined, date: string, id: string) => {
        return (
            <div className='compare-period-item' data-testid={`compare-period-${id}`}>
                <div className='title' data-testid={`compare-period-${id}-title`}>
                    {text}
                </div>
                <div className='dates' data-testid={`compare-period-${id}-dates`}>
                    {date}
                </div>
            </div>
        );
    };

    const [previousStartDate, previousEndDate] = getPreviousDate(startDate, endDate);
    const [lastYearStartDate, lastYearEndDate] = getSamePeriodLastYear(startDate, endDate);

    const getActivePeriod = (value: string) => {
        return value === SelectedPeriod.PREVIOUS_PERIOD ? formatDate(previousStartDate, previousEndDate) : formatDate(lastYearStartDate, lastYearEndDate);
    };

    const onPeriodChange = (value: string) => {
        onPeriodSelect && onPeriodSelect({ period: value, date: getActivePeriod(value) });
    };
    const previousPeriod = `${previousStartDate} - ${previousEndDate}`;
    const samePeriodLastYear = `${lastYearStartDate} - ${lastYearEndDate}`;

    const prevId = uniqueId();
    const lastId = uniqueId();

    return (
        <StyledSwitchPeriodComparative data-testid='switch-period-comparative' {...switchPeriodComparativeProps}>
            <div className='compare-period'>
                <div className='compare-period-container'>
                    <FieldGroup
                        values={[
                            {
                                value: 'previous_period',
                                label: renderPeriodComparativeItem(previousPeriodText, previousPeriod, 'previous-period'),
                                id: prevId,
                                name: prevId,
                            },
                            {
                                value: 'last_period',
                                label: renderPeriodComparativeItem(samePeriodLastYearText, samePeriodLastYear, 'last-period'),
                                id: lastId,
                                name: lastId,
                            },
                        ]}
                        selectedValues={selectedPeriod}
                        type='radio'
                        onChange={(item: { value: string }) => onPeriodChange(item.value)}
                    />
                </div>
            </div>
        </StyledSwitchPeriodComparative>
    );
};

StyledSwitchPeriodComparative.displayName = 'StyledSwitchPeriodComparative';

SwitchPeriodComparative.propTypes = propTypes;
SwitchPeriodComparative.defaultProps = defaultProps;

export default withTheme(SwitchPeriodComparative);
