import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { ICONS } from './ProfileIcons';

//mui
import ListItem from '@mui/material/ListItem';
import ListItemText, { listItemTextClasses } from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ImageIcon from '@mui/icons-material/Image';

const ProfileListItem = (props) => {
    const { title, value, icon } = props;
    const { t } = useTranslation();

    const Icon = ICONS[icon] || ImageIcon;
    return (<>
        <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <Icon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    sx={{
                        [`& .${listItemTextClasses.primary}`]: {
                            color: 'black',
                            fontWeight: '700',
                            fontSize: '1rem'
                          }
                    }}
                    primary={t(title)} secondary={t(value)} 
                />
            </ListItem>
            <Divider variant="inset" component="li" />
    </>);
};

ProfileListItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ProfileListItem;