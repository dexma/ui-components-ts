/// <reference types="react" />
import { Theme } from '../../../../../../../../../src/lib/utils/theme';
type StyledCellProps = {
    $direction?: string;
    $xs?: number;
    $xsOffset?: number;
    $sm?: number;
    $smOffset?: number;
    $md?: number;
    $mdOffset?: number;
    $lg?: number;
    $lgOffset?: number;
    theme: Theme;
};
declare const StyledCell: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledCellProps>>;
export { StyledCell };
