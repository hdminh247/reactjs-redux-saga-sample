import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the payment state domain
 */

const selectPaymentDomain = state => state.get("payment", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Payment
 */

const makeSelectPayment = () =>
  createSelector(selectPaymentDomain, substate => substate.toJS());

export default makeSelectPayment;
export { selectPaymentDomain };
