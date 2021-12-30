import { createSelector } from 'reselect';

const visit_characters = (state) => state.characters.visit_characters;

export const quotable_characters = (state) => state.characters.quotable_characters;

export const getVisits = createSelector(
    visit_characters,
    (_,id) => id,
    (visit_characters, id) => visit_characters[id] || 0
)

export const getRanking = createSelector(
    visit_characters,
    (visit_characters) => Object.entries(visit_characters).sort(([,a],[,b]) => b-a)
);

export const getRankingPosition = createSelector(
    getRanking,
    (_,id) => id,
    (ranking,id) => ranking.findIndex(([a,]) => a === id.toString()) + 1
);