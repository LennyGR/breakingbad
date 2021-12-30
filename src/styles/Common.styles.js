import styled from 'styled-components';

import Box from "@mui/material/Box";
import { imageListItemClasses } from "@mui/material/ImageListItem";
import { CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import { deepOrange } from '@mui/material/colors';
import { avatarClasses } from '@mui/material';

export const Wrapper = styled.div`
  background: var(--medGrey);
  padding: 20px;
  color: white;
  min-height: 100vh;
`;

export const GridContainer = styled.div`
    max-width: 1008px;
    margin:0  auto;
`;

export const ContentLoaderContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
`;

export const GridBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    & .${imageListItemClasses.root} {
        display: flex;
        flex-direction: column;
        width: 225px;
        height: 335px!important;
        text-align: right;
        margin: 0.5rem;
    }
`;

export const CustomHeader = styled.div`
    height: 50px;
    width: calc(100% - 2rem);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin: 0.5rem;
    padding: 0.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: rgba(0,0,0,0.5);
    line-height: 1rem;
    font-size: 1rem;
    align-items: center;

    span {
        margin-left: 1rem;
    }

    & .${avatarClasses.root} {
        background-color: ${deepOrange[500]};
    }
`;

export const PopularContainer = styled.div`
    position: relative;
`;

export const TitleWrapper = styled.div`
    justify-content: center;
    display: flex;
}
`;

export { CircularProgress, Alert };