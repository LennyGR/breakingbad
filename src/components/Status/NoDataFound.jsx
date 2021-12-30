import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, Alert } from '../../styles/Common.styles';

const NoDataFound = () => {
    const { t } = useTranslation();

    return (<Wrapper>
        <Alert severity="info">{t('There are no profiles yet!')}</Alert>
    </Wrapper>);
}

export default NoDataFound;