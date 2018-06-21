import { observable, action } from 'mobx';
import agent from '../agent';

class CourseStore {
    @observable courseInfo = {
        id: '',
        numberOfFields: 18,
        fieldNumbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    };
    @action setId(dbId) {
        this.courseInfo.id = dbId;
    }
    @action setNumberOfFields(value) {
        this.courseInfo.numberOfFields = parseInt(value);
        this.courseInfo.fieldNumbers = [];
        for(var i = 0; i < this.courseInfo.numberOfFields; i++) {
            this.courseInfo.fieldNumbers[i] = i+1;
        }
    }
}
export default new CourseStore;