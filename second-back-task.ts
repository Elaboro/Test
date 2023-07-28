import { Injectable } from "@nestjs/common";

@Injectable()
export class SecondBackTask {
  static getResult() {}
}
