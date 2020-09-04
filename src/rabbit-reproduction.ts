// 初始兔子为1，兔子出生x个月后开始繁殖，每y个月繁衍一次，每次繁殖z个，
// 问第w个月后的兔子总数量(x>=1,y>=1,z>=1)

// 问题分析：兔子总数=上个月数量+这个月出生数量
// x个月前出生的兔子这个月刚好可以第一次繁殖，y个月前繁殖过的兔子刚好这个月又可以繁殖了
// 这个月出生数量=(x个月前出生的 + y个月前繁殖过的数量)*z
// x个月前出生的数量=x月前的总量 - (x+1)个月前的总量
// y个月前繁殖过的数量=(y个月前的总量 - (y+1)个月前的总量)/z

// 前x个月为 1，第x+1个月为 2
// x个月前出生的数量，必须要等第二个月才能计算
// y个月前繁殖的数量，必须要等到第一次繁殖之后才能计算


let x = 2; // 多少个月后
let y = 1; // 间隔
let z = 1; // 每次繁殖的次数
let result = [];
export function rabbit_reproduction(w: number) {

    if (result[w]) {
        return result[w];
    }

    if (w <= x) {
        result[w] = 1;
        console.log(1)
        return 1;
    }

    if (w == x + 1) {
        result[w] = 2;
        console.log(2)
        return 2;
    }

    // x个月前出生的数量
    let before_x = 0;
    if (w - x >= 2) {
        before_x = rabbit_reproduction(w - x) - rabbit_reproduction(w - x - 1);
    }

    // y个月前繁殖过的数量
    let before_y = 0;
    if ((w - y) >= x + 1) {
        before_y = rabbit_reproduction(w - y) - rabbit_reproduction(w - y - 1);
    }

    before_y = before_y / z;

    let sum = rabbit_reproduction(w - 1) + (before_x + before_y) * z;
    result[w] = sum;
    console.log(sum)

    return sum;
}