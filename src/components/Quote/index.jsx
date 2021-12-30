import React, { useState, useCallback, useEffect } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

//Styles
import { CustomBlockQuote, Author } from './Quote.styles';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

//hooks
import useRandomQuote from "../../hooks/useRandomQuote";

//Selectores
import { quotable_characters } from '../../redux/selectors';

const Quote = (props) => {
    const { name } = props;
    const [finalQuote, setFinalQuote] = useState(null);
    const [showNoMore, setShowNoMore] = useState(false);
    const [finalShowButton, setFinalShowButton] = useState(false);
    const { refetch: refetchRandom } = useRandomQuote(name);
    const quotable_redux = useSelector(quotable_characters);
    const { t } = useTranslation();

    useEffect(() => {
        const numQuotes = quotable_redux[name] || 0;
        const resultNoMore = numQuotes > 1 ? false : true;
        setShowNoMore(resultNoMore);
        setFinalShowButton(!resultNoMore);

    }, [quotable_redux, name]);

    const newQuote = useCallback(async() => {
        const { data, isError } = await refetchRandom();
        if (!isError) {
            const resultQuote = data.length? data[0]?.quote : null;
            setFinalQuote(resultQuote);
        }
        
    },[refetchRandom]);

    useEffect(() => {
        if (refetchRandom) {
            newQuote();
        }
    },[refetchRandom, newQuote])

    return (<>
    { 
        <CustomBlockQuote data-testid={`quote_container`}>
            {finalQuote}<br/>
            <Author>{name}</Author>
            { finalShowButton && <Button variant="outlined" onClick={()=> {newQuote()}}>New quote</Button>}
        </CustomBlockQuote>
    }
    { finalQuote && showNoMore && <Alert severity="info">{t('This character has no more quotes!')}</Alert>}
    </>);
}

Quote.propTypes = {
    name: PropTypes.string.isRequired,
    showButton: PropTypes.bool,
    quote: PropTypes.string
}

export default Quote;