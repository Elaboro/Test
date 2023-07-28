import { Injectable } from "@nestjs/common";

@Injectable()
export class SecondBackTask {
  static getResult(num: number, degree: number): number {
    let result = 0;

    const number_power = BigInt(num) ** BigInt(degree);

    result = Number(number_power.toString().split("").pop());

    return result;
  }
}
