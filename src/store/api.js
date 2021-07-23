import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

// apiCallBegan({ id: 10}) this call convert to  below object.
// let obj = {
//     action: "api/callFailed",
//     payload: {
//        id: 10, 
//     }
// }