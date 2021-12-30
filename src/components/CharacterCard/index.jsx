import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

//mui
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const CharacterCard = (props) => {
    const { item } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleInfo = (id) => {
        navigate(`/${id}`);
    };

    return (<ImageListItem data-testid={`charcard_${item.char_id}`}>
        <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
        />
        <ImageListItemBar
            title={item.name}
            subtitle={item.nickname}
            actionIcon={
            <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={t('Info about', { name: item.name })}
                onClick={() => handleInfo(item.char_id)}
            >
                <ContactPageIcon sx={{ width: '2rem', height: '2rem' }} />
            </IconButton>
            }
        />
        </ImageListItem>);

}

CharacterCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default CharacterCard;