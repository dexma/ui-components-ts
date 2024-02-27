import React, { useContext } from 'react';
import moment, { Moment } from 'moment';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';
import { uniqueId } from 'lodash';

import theme from '@utils/theme';
import { ISO_FORMAT } from '@utils/dates';
import { FieldGroup } from '@components';
import { StyledSwitchPeriodComparative } from '@styles/SwitchPeriodComparative/StyledSwitchPeriodComparative';

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

const defaultProps = {
    selectedPeriod: 'previous_period',
};

enum SelectedPeriod {
    PREVIOUS_PERIOD = 'previous_period',
    LAST_PERIOD = 'last_period',
}

export type SelectedPeriodType = 'previous_period' | 'last_period';

type SwitchPeriodComparativeProps = {
    selectedPeriod: SelectedPeriodType;
    startDate: string;
    endDate: string;
    previousPeriodText?: string;
    samePeriodLastYearText?: string;
    onPeriodSelect?: ({ period, date }: { period: SelectedPeriodType; date: { startDate: Moment; endDate: Moment } }) => void;
};
export const SwitchPeriodComparative = (props: SwitchPeriodComparativeProps) => {
    const { selectedPeriod, startDate, endDate, previousPeriodText, samePeriodLastYearText, onPeriodSelect } = props;
    const th = useContext(ThemeContext) || theme;
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

    const onPeriodChange = (value: SelectedPeriodType) => {
        onPeriodSelect && onPeriodSelect({ period: value, date: getActivePeriod(value) });
    };
    const previousPeriod = `${previousStartDate} - ${previousEndDate}`;
    const samePeriodLastYear = `${lastYearStartDate} - ${lastYearEndDate}`;

    const prevId = uniqueId();
    const lastId = uniqueId();

    return (
        <StyledSwitchPeriodComparative data-testid='switch-period-comparative' {...switchPeriodComparativeProps} theme={th}>
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
                        onChange={(item: { value: SelectedPeriodType }) => onPeriodChange(item.value)}
                    />
                </div>
            </div>
        </StyledSwitchPeriodComparative>
    );
};

StyledSwitchPeriodComparative.displayName = 'StyledSwitchPeriodComparative';

SwitchPeriodComparative.defaultProps = defaultProps;
