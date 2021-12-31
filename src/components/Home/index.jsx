import React from 'react';

//Components
import CharacterCard from '../CharacterCard';
import ErrorBoundary from '../ErrorBoundary';
import ErrorAlert from '../Status/ErrorAlert';

//styles
import { Wrapper, GridContainer, GridBox, CircularProgress, KeepLoading } from '../../styles/Common.styles';

//hooks
import usePagedCharacters from '../../hooks/usePagedCharacters';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Home = () => {
    const loadMoreButtonRef = React.useRef();
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage = true,
      } = usePagedCharacters();

    useIntersectionObserver({
        target: loadMoreButtonRef,
        onIntersect: fetchNextPage,
        enabled: hasNextPage,
    })

    if (error) {
        return (<ErrorAlert />);
    }

    return (
        <ErrorBoundary component={'Home'}>
            <Wrapper data-testid={`home_container`}>
                <GridContainer>
                    <GridBox>
                        {data && data.pages && data.pages.map(page => (
                            <React.Fragment key={page.nextId}>
                                {page.data.map(item => (
                                    <CharacterCard key={`chardId_${item.char_id}`} item={item} />
                                ))}
                            </React.Fragment>)
                            )
                        }
                    </GridBox>
                    <KeepLoading ref={loadMoreButtonRef}>
                        { hasNextPage && <CircularProgress color="success" size="5rem" thickness={8}/>}
                    </KeepLoading>
                </GridContainer>
            </Wrapper>
        </ErrorBoundary>);
}

export default Home;