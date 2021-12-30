import React from 'react';
import { useTranslation } from 'react-i18next';

import Flag from 'react-world-flags'
import { StyledToggleButtonGroup, StyledToggleButton } from './LanguageSwitcher.styles';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguage = (event, newlng) => {
        i18n.changeLanguage(newlng)
    }

    return (<StyledToggleButtonGroup
        value={i18n.resolvedLanguage}
        exclusive
        onChange={handleLanguage}
        aria-label="text alignment"
      >
        <StyledToggleButton value="es" aria-label="es">
            <Flag code="ES" height="16"/>
        </StyledToggleButton>
        <StyledToggleButton value="en" aria-label="en">
            <Flag code="GB" height="16"/>
        </StyledToggleButton>
      </StyledToggleButtonGroup>);
}

export default LanguageSwitcher;