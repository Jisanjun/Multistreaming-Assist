import { MutationTree } from 'vuex';
import { NginxStateInterface } from './state';

const mutation: MutationTree<NginxStateInterface> = {
  nginxStatus (state: NginxStateInterface, nginxStatus: boolean) {
    state.nginxStatus = nginxStatus;
  }
};

export default mutation;
