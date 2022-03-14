import  {I} from "../POM/Actions/CommonActionsAndAssertions";
import  {mainPage} from "../POM/Selectors/mainPage";
import  {taskThreeSelectors} from "../POM/Selectors/taskThreeSelectors";
import  {taskTwoSelectors} from "../POM/Selectors/taskTwoSelectors";
import  {FillInInfo} from "../POM/Actions/FillInInfo";

describe('testingCup', function() {
    beforeEach(() =>{
        I().do().enterWorkingArea(mainPage.zadanie3);
    })
    it('task3', function () {
        I().must().checkDisability(taskThreeSelectors.name);
        I().do().clickButton(taskThreeSelectors.menuBtn);
        I().do().clickButton(taskThreeSelectors.followingBtn);
        I().do().forceclickBtn(taskThreeSelectors.lastBtn);
        I().must().checkNonDisability(taskThreeSelectors.name);
        FillInInfo().fillInFields();
        I().do().forceclickBtn(taskThreeSelectors.verifyBtn);
        I().must().checkExistance(taskThreeSelectors.verifyBtn);
    });
    it('task2', function (){
        I().do().clickButton(taskThreeSelectors.pageBack);
        I().do().clickButton(taskTwoSelectors.filterBtn);
        I().do().clickButton(taskTwoSelectors.sportBtn);
        I().must().checkText(taskTwoSelectors.objects, 'Sport');
    })
})