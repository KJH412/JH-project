import {arr,getName} from "./sample-module.js"
console.log(arr);
export function uname(){   //sample파일속 getName()가져와서 씀.import
    console.log(getName());
}