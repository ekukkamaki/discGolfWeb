import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3010/api';

const encode = encodeURIComponent;

const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
        console.log('maybe logout TODO');
    }
    return err;
}

const responseBody = res => res.body;

const requests = {
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)            
            .end(handleErrors)
            .then(responseBody)
};

const Player = {
    addPlayer: (name, email) =>
        requests.post('/insertPlayer', { name, email })
};
export default {
    Player
  };
  