import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, Alert } from '../../styles/Common.styles';

const ErrorAlert = () => {
    const { t } = useTranslation();

    return (<Wrapper>
        <Alert severity="error">{t('This is an error alert — check it out!')}</Alert>
    </Wrapper>);
}

export default ErrorAlert;