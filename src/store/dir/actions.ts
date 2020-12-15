import { ActionTree, ActionContext } from 'vuex';
import { StateInterface } from '../index';
import { DirStateInterface } from './state';

const actions: ActionTree<DirStateInterface, StateInterface> = {
  dir (state: ActionContext<DirStateInterface, StateInterface>, dir: string) {
    state.commit('dir', dir);
  },

  rootDir (state: ActionContext<DirStateInterface, StateInterface>, rootDir: string) {
    state.commit('rootDir', rootDir);
  },

  nginxDir (state: ActionContext<DirStateInterface, StateInterface>, nginxDir: string) {
    state.commit('nginxDir', nginxDir);
  },

  nginxCofDir (state: ActionContext<DirStateInterface, StateInterface>, nginxCofDir: string) {
    state.commit('nginxCofDir', nginxCofDir);
  },

  nginxLogsDir (state: ActionContext<DirStateInterface, StateInterface>, nginxLogsDir: string) {
    state.commit('nginxLogsDir', nginxLogsDir);
  },

  recordingDir (state: ActionContext<DirStateInterface, StateInterface>, recordingDir: string) {
    state.commit('recordingDir', recordingDir);
  },
};

export default actions;
