import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

//Components
import CharacterCard from '../CharacterCard';
import ErrorBoundary from '../ErrorBoundary';
import ContentLoader from '../Status/ContentLoader';
import ErrorAlert from '../Status/ErrorAlert';
import NoDataFound from '../Status/NoDataFound';

//styles
import { Wrapper, GridContainer, GridBox, CustomHeader, PopularContainer, TitleWrapper } from '../../styles/Common.styles';

//hooks
import useCharacters from '../../hooks/useCharacters';

//Selectores
import { getRanking } from '../../redux/selectors';

//mui
import Avatar from '@mui/material/Avatar';

const PopularPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const { isLoading: isLoadingQuery, data: dataQuery, isError } = useCharacters();
    const ranking = useSelector(getRanking);

    useEffect(() => {
        if (!isLoadingQuery) {
            let finalData = [];
            if (ranking.length) {
                ranking.forEach((item, index) => {
                    let profile = dataQuery.find((character) => character.char_id.toString() === item[0]);
                    if (profile) {
                        profile.position = index + 1;
                        profile.visits = item[1];
                        finalData.push(profile);
                    }
                });
            }
            
            setData(finalData);
            setIsLoading(false);
        }
    },[isLoadingQuery,dataQuery,ranking]);

    if (isLoading) {
        return (<ContentLoader />);
    }

    if (isError) {
        return (<ErrorAlert />);
    }

    return (
        <ErrorBoundary component={'Home'}>
            <Wrapper data-testid={`popular_container`}>
                <TitleWrapper>
                    <h2>{t('Most visited profiles')}</h2>
                </TitleWrapper>
                <GridContainer>
                {
                    data.length > 0 
                    ? <GridBox>
                        {data.map((item) => (
                            <PopularContainer key={`chardId_${item.char_id}`}>
                            <CustomHeader>
                                <Avatar>{item.position}</Avatar>
                                <span>{t('Visits', { numvisits: item.visits})}</span>
                            </CustomHeader>
                            <CharacterCard  item={item} />
                            </PopularContainer>
                        ))}
                    </GridBox>
                    : <NoDataFound />
                }
                </GridContainer>
            </Wrapper>
        </ErrorBoundary>
    );
}

export default PopularPage;