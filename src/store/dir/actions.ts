import path from 'path'

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

  nginxDir (state: ActionContext<DirStateInterface, StateInterface>, dir: string) {
    const nginxDir = path.join(dir, 'nginx')
    state.commit('nginxDir', nginxDir);
  },

  nginxConfDir (state: ActionContext<DirStateInterface, StateInterface>, dir: string) {
    const nginxConfDir = path.join(dir, 'conf')
    state.commit('nginxConfDir', nginxConfDir);
  },

  nginxLogsDir (state: ActionContext<DirStateInterface, StateInterface>, dir: string) {
    const nginxLogsDir = path.join(dir, 'logs')
    state.commit('nginxLogsDir', nginxLogsDir);
  },

  recordingDir (state: ActionContext<DirStateInterface, StateInterface>, recordingDir: string) {
    state.commit('recordingDir', recordingDir);
  },
};

export default actions;
