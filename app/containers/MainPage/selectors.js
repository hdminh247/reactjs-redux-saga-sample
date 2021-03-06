import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.get("mainPage", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () => createSelector(selectMainPageDomain, substate => substate.toJS());
const makeSelectCarouselListMainPage = () => createSelector(selectMainPageDomain, substate => substate.get("carouselList").toJS());


export default makeSelectMainPage;
export { selectMainPageDomain, makeSelectCarouselListMainPage };
