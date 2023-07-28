import { Injectable } from "@nestjs/common";

@Injectable()
export class ThirdBackTask {

  static getFirstFullBlock(array: Array<string>) {
    let i_block_start = undefined;
    let i_block_end = undefined;
    let number_before = null;

    let current_depth = 0;

    for(let i = 0; i < array.length; i++) {
      if(array[i] === "{") {
        current_depth++;
        
        if(i_block_start !== undefined) continue;
        i_block_start = i;

        number_before = Number(array[i - 1]);
        continue;
      }

      if(array[i]=== "}") {
        current_depth--;

        if(current_depth > 0) {
          continue;
        } else if (i_block_end === undefined) {
          i_block_end = i;
          break;
        }
      }
    }

    const result = {
      number_before,
      i_block_start,
      i_block_end,
    };

    return result;
  }

  static findMaxDepth(array: Array<string>) {
    let max = 0;
    let current = 0;

    array.forEach((v) => {
      if(v === "{") {
        current++;

        if(current > max) {
          max = current;
        }
        return;
      }

      if(v === "}") {
        if(current > 0) {
          current--;
        }
        return;
      }
    });

    return {
      max,
    }
  }

  static getResult(str: string): string {

    let probably = str.split("");

    const {
      max: max_depth,
    } = this.findMaxDepth(probably);

    if(max_depth > 5) {
      throw new Error("Нарушены условия задачи: не более пяти слоев вложенности");
    }

    if(probably.length <= 1 || probably.length > 25) {
      throw new Error("Нарушены условия задачи: от 1 до 25 символов");
    }

    while(probably.includes("{")) {
      let probably_new = [];

      const {
        i_block_start,
        i_block_end,
        number_before,
      } = this.getFirstFullBlock(probably);

      let blok_save = probably.slice(0, i_block_start - 1);
      const blok = probably.slice(i_block_start + 1, i_block_end);

      let stop = number_before;
      while(stop > 0) {
        probably_new.push(...blok);
        stop--;
      }

      if(probably.length !== i_block_end) {
        probably_new.push(...probably.slice(i_block_end + 1));
      }

      probably = [...blok_save, ...probably_new];
    }

    return probably.join('');
  }
}
