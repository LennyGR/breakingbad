import React from 'react';

//Components
import CharacterCard from '../CharacterCard';
import ErrorBoundary from '../ErrorBoundary';
import ContentLoader from '../Status/ContentLoader';
import ErrorAlert from '../Status/ErrorAlert';

//styles
import { Wrapper, GridContainer, GridBox } from '../../styles/Common.styles';

//hooks
import useCharacters from '../../hooks/useCharacters';

const Home = () => {
    const { isLoading, data, isError } = useCharacters();

    if (isLoading) {
        return (<ContentLoader />);
    }

    if (isError) {
        return (<ErrorAlert />);
    }

    return (
        <ErrorBoundary component={'Home'}>
            <Wrapper data-testid={`home_container`}>
                <GridContainer>
                    <GridBox>
                        {data && data.map((item) => (
                            <CharacterCard key={`chardId_${item.char_id}`} item={item} />
                        ))}
                    </GridBox>
                </GridContainer>
            </Wrapper>
        </ErrorBoundary>);
}

export default Home;