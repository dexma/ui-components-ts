import styled from 'styled-components';

import { StyledTag } from '@/styles/Tag/StyledTag';
import { Theme } from '@/utils/theme';

const StyledTagGroup = styled.div<{ theme: Theme }>`
    display: flex;
    ${StyledTag} {
        margin: 4px 4px 4px 0px;
    }
`;

export { StyledTagGroup };
