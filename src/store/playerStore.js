import { observable, action } from 'mobx';
import agent from '../agent';

class PlayerStore {
    @observable inProgress = false;

    @observable values = {
        name: '',
        email: ''
    }
    @action setPlayerName(name) {
        this.values.name = name;
    }
    @action setEmail(email) {
        this.values.email = email;
    }
    @action reset() {
        this.values.email = '';
        this.values.name = '';
    }

    @action addPlayer() {
        this.inProgress = true;

        return agent.Player.addPlayer(this.values.name, this.values.email)


    }
}
export default new PlayerStore;