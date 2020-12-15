import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { KeyStateInterface } from './state';

const getters: GetterTree<KeyStateInterface, StateInterface> = {
  twitchKey (state: KeyStateInterface): string {
    return state.twitchKey;
  },

  youtubeKey (state: KeyStateInterface): string {
    return state.youtubeKey;
  },

  additionalRTMPUrl (state: KeyStateInterface): string {
    return state.additionalRTMPUrl
  },

  additionalRTMPKey (state: KeyStateInterface): string {
    return state.additionalRTMPKey
  }
};

export default getters;
