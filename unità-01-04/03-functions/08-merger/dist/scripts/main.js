"use strict";
function merger(arg1, arg2) {
    if (typeof (arg1) === "number" && typeof (arg2) === "number") {
        console.log(arg1 + arg2);
        return arg1 + arg2;
    }
    else if (typeof (arg1) === "string" && typeof (arg2) === "string") {
        console.log(`${arg1} ${arg2}`);
        return `${arg1} ${arg2}`;
    }
    else {
        return null;
    }
}
merger(2, 5);
merger(`hello`, `world!`);
merger(2, `world`);
