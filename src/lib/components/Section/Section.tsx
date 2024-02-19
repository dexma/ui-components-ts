import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import withDataId from '../DataId/withDataId';
import { Cell } from '@/components/Cell';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import theme, { Theme } from '@/utils/theme';
import { StyledSection } from '@/styles/Section/StyledSection';

const propTypes = {
    /**
     * Title of the layout
     */
    title: PropTypes.string,
    /**
     * Status of chart | table
     */
    isLoading: PropTypes.bool,
    /**
     * Event called on export excel
     */
    onExportExcel: PropTypes.func,
    /**
     * Event called on export image
     */
    onExportImage: PropTypes.func,
    /**
     * Event called on add report
     */
    onAddReport: PropTypes.func,
    /**
     * Theme json based
     */
    children: PropTypes.node,
    /**
     * Theme json based
     */
    theme: PropTypes.shape({}),
    /**
     * data-id attribute to identfy the element in DOM
     */
    dataId: PropTypes.string,
};

const defaultProps = {
    isLoading: false,
    theme: theme,
    dataId: 'section-data',
};

type SectionProps = {
    theme: Theme;
    dataId: string;
    children: JSX.Element;
    title?: string;
    isLoading?: boolean;
    onExportExcel?: () => void;
    onExportImage?: () => void;
    onAddReport?: () => void;
};
export const Section = (props: SectionProps) => {
    const { title, isLoading, onExportExcel, onExportImage, onAddReport, children, theme, dataId } = props;
    const hasExportExcel = !!onExportExcel;
    const hasExportImage = !!onExportImage;
    const hasAddReport = !!onAddReport;
    const hasButtons = hasExportExcel || hasExportImage || hasAddReport;
    return (
        <StyledSection theme={theme} data-testid='section-data' data-id={dataId} $title={!!title} hasButtons={!!hasButtons}>
            <div className='section-top'>
                {title && (
                    <Cell className='section-title'>
                        <Heading type='h4' text={title} />
                    </Cell>
                )}
                {hasButtons && (
                    <Cell className='section-buttons'>
                        <>
                            {hasExportExcel && (
                                <Button variant='icon-secondary' iconBefore='export_file' onClick={onExportExcel} isCircle data-testid='excel' isDisabled={isLoading} />
                            )}
                            {hasExportImage && <Button variant='icon-secondary' iconBefore='image' onClick={onExportImage} isCircle data-testid='image' isDisabled={isLoading} />}
                            {hasAddReport && <Button variant='icon-secondary' iconBefore='report_add' onClick={onAddReport} isCircle data-testid='report' isDisabled={isLoading} />}
                        </>
                    </Cell>
                )}
            </div>
            <Cell xs={12}>{children && children}</Cell>
        </StyledSection>
    );
};

StyledSection.displayName = 'StyledSectionData';

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default withDataId(Section);
