import styled from 'styled-components';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    background-color: var(--medGrey);
`;

export const StyledToggleButton = styled(ToggleButton)`
    &.${toggleButtonClasses.selected} {
        background-color: white;
    }

    &.${toggleButtonClasses.selected}:hover {
        background-color: var(--lightGrey);
    }
`;