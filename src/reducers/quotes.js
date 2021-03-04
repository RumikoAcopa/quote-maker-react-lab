import { ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE } from '../actions/quotes'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return state.concat(action.quote)
    case REMOVE_QUOTE:
      return state.filter(quote => quote.id !== action.quoteId)
    case UPVOTE_QUOTE: 
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: quote.votes + 1
          }
          // return Object.assign({}, quote, {votes: quote.votes + 1})
        } else {
          return quote
        }
      })
    case DOWNVOTE_QUOTE:
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          let newVoteValue = quote.votes === 0 ? 0 : quote.votes - 1;
          return {
            ...quote,
            votes: newVoteValue
          }
        } else {
          return quote
        }
      })
    default:
      return state
  }
}
