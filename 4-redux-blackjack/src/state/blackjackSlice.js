import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { getValueOfCards } from "../utils/blackJackUtils";

const initialState = {
    deck: [],
    hands: {
       player: [],
       dealer: []
    },
    isGameStarted: false,
    isPlayerRoundDone: false,
    roundWinner: null,
    winnings: {
       player: 0,
       dealer: 0
    },
    roundSums : {
        player : 0,
        dealer : 0
    }
}

const blackjackSlice = createSlice({
    name: "blackjack",
    initialState,
    reducers: {
      NEW_GAME : (state, action) => {
        const cards = _.shuffle([...Array(52).keys()]);
        state.deck = cards
        state.hands.dealer = []
        state.hands.player = []
        state.isGameStarted = false,
        state.isPlayerRoundDone = false,
        state.roundWinner = null,
        console.log(state.deck)
      },
      NEXT_CARD : (state) => {
        state.hands.player.push(state.deck.shift())
        var sum = getValueOfCards(state.hands.player)
        if (sum > 21)
        {
            state.isPlayerRoundDone = true
        } 
        state.roundSums.player = sum
      },
      PLAYER_FINISHED : (state) => {
        state.isPlayerRoundDone = true
      },
      DEALER_ROUND : (state) => {
        var sum = 0
        while (sum <= 16)
        {
            state.hands.dealer.push(state.deck.shift())
            sum = getValueOfCards(state.hands.dealer)
        }
        state.roundSums.dealer = sum

        const dealerP = 21 - state.roundSums.dealer
        const playderP = 21 - state.roundSums.player
        if(dealerP > 0 && playderP > 0)
        {
          if (playderP < dealerP)
        {
            state.roundWinner = "Player"
            state.winnings.player++
        } else {
            state.roundWinner = "Dealer"
            state.winnings.dealer++
        }
        } else {
          if (playderP > dealerP && dealerP !== 0)
          {
              state.roundWinner = "Player"
              state.winnings.player++
          } else {
              state.roundWinner = "Dealer"
              state.winnings.dealer++
          }
        }
      }
    },
  });

  export const blackjackReducer = blackjackSlice.reducer;
  export const { NEW_GAME, NEXT_CARD, PLAYER_FINISHED, DEALER_ROUND } = blackjackSlice.actions;

  export const isPlayerRoundDone = (state) => state.isPlayerRoundDone;
  export const handOfPlayers = (state) => state.hands.player;
  export const handOfDealers = (state) => state.hands.dealer;
  export const playerPoints = (state) => state.winnings.player;
  export const dealerPoints = (state) => state.winnings.dealer;
  export const whoWon = (state) => state.roundWinner;