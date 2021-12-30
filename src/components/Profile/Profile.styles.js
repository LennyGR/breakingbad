import styled, { css } from 'styled-components';
import List from '@mui/material/List';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const MainContainer = styled.div`
    
    padding: 1.5rem 1rem 0 0;
    background: white;

    ${props => props.quote && css`
        flex: 1;
    `}
`;

export const BioContainer = styled.div`
    flex: 1;
`;

export const ProfileList = styled(List)`
    width: 100%;
    background-color: white;
`;

export const CustomAvatar = styled(Avatar)`
    width: 250px;
    height: 250px;
    margin:0 auto;

    & .${avatarClasses.img} {
        object-fit: contain
    }
`;