import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

//Components
import ProfileListItem from './ProfileListItem';
import Quote from '../Quote';
import ErrorBoundary from '../ErrorBoundary';

//Styles
import { ProfileContainer, MainContainer, BioContainer, ProfileList, CustomAvatar } from './Profile.styles'; 

//Selectores
import { getVisits, getRankingPosition, quotable_characters } from '../../redux/selectors';

const Profile = (props) => {
    const { profile } = props;

    const visits = useSelector((state) => getVisits(state, profile.char_id));
    const position = useSelector((state) => getRankingPosition(state, profile.char_id));
    
    const quotable_redux = useSelector(quotable_characters);
    const quotable = Object.keys(quotable_redux);
    const quote = (quotable.length)? quotable.includes(profile.name): false;

    return (
        <ErrorBoundary component={'Profile'}>
            <ProfileContainer data-testid={`profile_container`}>
                <MainContainer quote={quote}>
                    <CustomAvatar
                        alt={profile.name}
                        src={profile.img}/>
                    <ProfileList>
                        {/* name */}
                        <ProfileListItem title={'Visits'} value={visits.toString()} icon={'RemoveRedEyeIcon'}/>
                        {/* Birthday */}
                        <ProfileListItem title={'Ránking'} value={position.toString()} icon={'StarIcon'}/>
                    </ProfileList>
                    { quote && <Quote name={profile.name}/>}
                </MainContainer>
                <BioContainer>
                    <ProfileList>
                        {/* name */}
                        <ProfileListItem title={'Name'} value={profile.name} icon={'PersonIcon'}/>
                        {/* Birthday */}
                        <ProfileListItem title={'Birthday'} value={profile.birthday} icon={'CakeIcon'}/>
                        {/* Occupation */}
                        <ProfileListItem title={'Occupation'} value={profile.occupation.join(',')} icon={'WorkIcon'}/>
                        {/* Status */}
                        <ProfileListItem title={'Status'} value={profile.status} icon={'PermIdentityIcon'}/>
                        {/* Nickname */}
                        <ProfileListItem title={'Nickname'} value={profile.nickname} icon={'MoodIcon'}/>
                        {/* Appearance */}
                        <ProfileListItem title={'Seasons'} value={profile.appearance.join(',')} icon={'ConnectedTvIcon'}/>
                        {/* Portrayed */}
                        <ProfileListItem title={'Portrayed'} value={profile.portrayed} icon={'TheaterComedyIcon'}/>
                        {/* Category */}
                        <ProfileListItem title={'Categories'} value={profile.category} icon={'CategoryIcon'}/>
                    </ProfileList>
                </BioContainer>
            </ProfileContainer>
        </ErrorBoundary>
    );
}


Profile.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Profile;