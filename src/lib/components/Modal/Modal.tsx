import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { ModalProps } from 'antd';
import theme, { Theme } from '@/utils/theme';
import { StyledModal, StyledModalGlobal } from '@/styles/Modal/StyledModal';
import { Icon } from '@/components/Icon';

const propTypes = {
    /**
     * Theme json based
     */
    theme: PropTypes.shape({}),
};

const defaultProps = {
    theme: theme,
};

export const Modal = (props: ModalProps & { theme: Theme }) => {
    const { theme } = props;
    return (
        <>
            <StyledModal data-testid='modal' closeIcon={<Icon name='close' color='gray300' size='medium' />} footer={false} transitionName='' maskTransitionName='' {...props} />
            <StyledModalGlobal theme={theme} />
        </>
    );
};

StyledModal.displayName = 'StyledModal';

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default withTheme(Modal);
