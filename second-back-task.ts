import { Injectable } from "@nestjs/common";

@Injectable()
export class SecondBackTask {
  static getResult(num: number, degree: number): number {

    if(!Number.isInteger(num) || !Number.isInteger(degree)) {
      throw new Error("Должно быть целым числом.");
    }

    if(num < 1 || num > 1_000_000_000) {
      throw new Error("Нарушины условия задачи. 1<a<1000000000");
    }

    if(degree < 1 || degree > 1_000_000_000) {
      throw new Error("Нарушины условия задачи. 1<b<1000000000");
    }

    let result = 0;

    const number_power = BigInt(num) ** BigInt(degree);

    result = Number(number_power.toString().split("").pop());

    return result;
  }
}
