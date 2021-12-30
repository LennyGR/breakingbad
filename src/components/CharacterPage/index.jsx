import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Wrapper, GridContainer } from '../../styles/Common.styles';

//Components
import Profile from '../Profile';
import ErrorBoundary from '../ErrorBoundary';
import ContentLoader from '../Status/ContentLoader';
import ErrorAlert from '../Status/ErrorAlert';

//hooks
import useCharacter from '../../hooks/useCharacter';

//actions
import { addVisitProfile } from '../../redux/actions';

//Selectors
import { quotable_characters } from '../../redux/selectors';

const Character = () => {
    const { charId } = useParams();
    const [ profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const quotable = useSelector(quotable_characters);

    const { 
        isLoading: isLoadingCharacter, 
        data: dataCharacter, 
        isError: isErrorCharacter 
    } = useCharacter(charId);

    useEffect(()=> {
        dispatch(addVisitProfile(charId));
    },[dispatch, charId]);

    useEffect(()=> {
        if (!isLoadingCharacter) {
            let _profile = null;
            if (dataCharacter?.length) {
                _profile = dataCharacter[0];
                const splittedName = _profile.name.split(' ');
                const surname = splittedName.length > 1 ? splittedName[1] : '';
                const alternativeName = `${_profile.nickname} ${surname}`;
                if (Object.keys(quotable).includes(alternativeName)) {
                    _profile.name = alternativeName;
                }
            }
            
            setProfile(_profile);
            setIsLoading(false);
        }
    }, [isLoadingCharacter, dataCharacter, quotable]);

    if (isLoading) {
        return (<ContentLoader />);
    }

    if (isErrorCharacter) {
        return (<ErrorAlert />);
    }

    return (
        <ErrorBoundary component={'CharacterPage'}>
            <Wrapper>
                <GridContainer>
                    {
                        profile && <Profile profile={profile}></Profile>
                    }
                </GridContainer>
            </Wrapper>
        </ErrorBoundary>
    );
}

export default Character;