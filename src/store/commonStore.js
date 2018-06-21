import { observable, action } from 'mobx';

class CommonStore {
    @observable menuVisible = false;
    @observable loading = true;

    @action setMenuToOppositeState() {
        this.menuVisible = !this.menuVisible;
    }
    @action closeMenu() {
        this.menuVisible = false;
    }

   
}
export default new CommonStore();