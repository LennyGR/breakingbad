import React from "react";
import { Wrapper, ContentLoaderContainer, CircularProgress } from '../../styles/Common.styles';

const ContentLoader = () => {
    return (<Wrapper>
        <ContentLoaderContainer>
            <CircularProgress color="success" size="5rem" thickness={8}/>
        </ContentLoaderContainer>
    </Wrapper>);
}

export default ContentLoader;
