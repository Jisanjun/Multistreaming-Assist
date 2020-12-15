import { ActionTree, ActionContext } from 'vuex';
import { StateInterface } from '../index';
import { DirStateInterface } from './state';

const actions: ActionTree<DirStateInterface, StateInterface> = {
  rootDir (state: ActionContext<DirStateInterface, StateInterface>, dir: string) {
    let rootDir = ''

    // 현재 ./dir의 위치에 따라 끝에 경로가 추가로 붙으므로 지워줘야 함
    // process.env.DEV는 quasar dev로 실행 했을 때 true가 된다
    if(process.env.DEV) {
        rootDir = dir.replace('src\\store\\dir', '')
    } else {
        rootDir = dir.replace('resources\\app.asar', '')
    }

    state.commit('rootDir', rootDir);
  },

  nginxDir (state: ActionContext<DirStateInterface, StateInterface>, nginxDir: string) {
    state.commit('nginxDir', nginxDir);
  },

  nginxConfDir (state: ActionContext<DirStateInterface, StateInterface>, nginxCofDir: string) {
    state.commit('nginxConfDir', nginxCofDir);
  },

  nginxLogsDir (state: ActionContext<DirStateInterface, StateInterface>, nginxLogsDir: string) {
    state.commit('nginxLogsDir', nginxLogsDir);
  },

  recordingDir (state: ActionContext<DirStateInterface, StateInterface>, recordingDir: string) {
    state.commit('recordingDir', recordingDir);
  },
};

export default actions;
