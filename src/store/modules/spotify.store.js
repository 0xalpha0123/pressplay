import axios from "axios";
import qs from "querystring";

const initialState = () => ({
  spotifyToken: null
});

const state = initialState();

const getters = {
  spotifyToken: state => state.spotifyToken
};

const actions = {
  getSpotifyToken({ commit, state }) {
    return new Promise((resolve, reject) => {
      let tokenIsNull = state.spotifyToken == null;
      let tokenExpired = false;

      // If token exists, have tokenExpired test if expired
      if (!tokenIsNull) {
        let now = new Date();
        tokenExpired =
          (now.getTime() - state.spotifyToken.time) / 1000 >=
          state.spotifyToken.expires_in;
      }

      // If token doesn't exist or token is expired, get new token
      // Else return the token
      if (tokenIsNull == true || tokenExpired == true) {
        axios
          .post(
            "https://accounts.spotify.com/api/token",
            qs.stringify({ grant_type: "client_credentials" }),
            {
              headers: {
                Authorization:
                  "Basic " +
                  window.btoa(
                    "68e05de03dfa49c080e1ed41546e038c:c04de8dd09c14c13a94c74074765d261"
                  ),
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(
            res => {
              let token = Object.assign({}, res.data, {
                time: new Date().getTime()
              });
              commit("updateSpotifyToken", token);
              resolve(token);
            },
            error => {
              reject(error);
            }
          );
      } else {
        resolve(state.spotifyToken);
      }
    });
  }
};

const mutations = {
  updateSpotifyToken(state, token) {
    state.spotifyToken = token;
  },
  RESET(state) {
    const newState = initialState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key];
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
