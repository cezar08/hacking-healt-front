
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class SolicitacoesAprovacaoService extends AbstractService {

    getAll() {
        let options = {
            method: 'GET',
            headers: this.headers
        }

        return fetch(AppSettings.BASE_URL + "/solicitacoes-aprovacao", options);
    }

    getById(id) {
          let options = {
              method: 'GET',
              headers: this.headers
          }

          return fetch(AppSettings.BASE_URL + "/solicitacoes-aprovacao/"+id, options);      
    }

}
