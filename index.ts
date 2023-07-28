import { ActionTypeList, FirstBackTask } from "./first-back-task";
import { SecondBackTask } from "./second-back-task";
import { ThirdBackTask } from "./third-back-task";

const main = () => {
  const actions_list: ActionTypeList[] = [
    "start", "connect", "message", "end"
  ];
  const result11 = FirstBackTask.getResult(actions_list);

  const actions_list2: ActionTypeList[] = [
    "start", "connect", "message", "end",
    "start", "connect", "message", "end",
    "start", "connect", "message",
  ];
  const result12 = FirstBackTask.getResult(actions_list2);

  const result21 = SecondBackTask.getResult(7, 3);
  const result22 = SecondBackTask.getResult(5, 123456789);

  const result3 = ThirdBackTask.getResult();

  console.log(
    {
      result1: {
        result11,
        result12,
      },
      result2: {
        result21,
        result22,
      },
      result3,
    }
  );
};

main();