import {I} from '../Actions/CommonActionsAndAssertions';
import {taskThreeSelectors} from "../Selectors/taskThreeSelectors";
export const FillInInfo=()=>{
    return{
        fillInFields: ()=>{
            I().do().typeText(taskThreeSelectors.name, 'Artyom');
            I().do().typeText(taskThreeSelectors.surname,'Grigoryan');
            I().do().typeText(taskThreeSelectors.notes,'Playing chess');
            I().do().typeText(taskThreeSelectors.phoneNumber, '094622021');
            I().do().clickButton(taskThreeSelectors.verifyBtn);
        }
    }
}