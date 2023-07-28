import { FirstBackTask } from "./first-back-task";
import { SecondBackTask } from "./second-back-task";
import { ThirdBackTask } from "./third-back-task";

const main = () => {
  const result1 = FirstBackTask.getResult();
  const result2 = SecondBackTask.getResult();
  const result3 = ThirdBackTask.getResult();

  console.log(
    {
      result1,
      result2,
      result3,
    }
  );
};

main();