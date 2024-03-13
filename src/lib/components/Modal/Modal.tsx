import React, { useContext } from 'react';
import { ModalProps } from 'antd';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Icon } from '@components';
import { StyledModal, StyledModalGlobal } from '@styles/Modal/StyledModal';

export const Modal = (props: ModalProps) => {
    const th = useContext(ThemeContext) || theme;
    return (
        <>
            <StyledModal data-testid='modal' closeIcon={<Icon name='close' color='gray300' size='medium' />} footer={false} transitionName='' maskTransitionName='' {...props} />
            <StyledModalGlobal theme={th} />
        </>
    );
};
