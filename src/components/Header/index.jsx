import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';

import BBLogo from '../../assets/images/bblogo.svg';
import LanguageSwitcher from '../LanguageSwitcher';

import { Wrapper, Content, LogoImg, CustomLink } from './Header.styles';

const Header = () => {
  const { t } = useTranslation();

  return (<Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={BBLogo} alt='Breaking Bad Home' />
      </Link>
      <CustomLink to="/Popular">
        <StarIcon />
        <span>{t('Popular')}</span>
      </CustomLink>
      <LanguageSwitcher />
    </Content>
  </Wrapper>);
};

export default Header;