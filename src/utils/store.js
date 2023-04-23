import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import subscribeSlice from "./subscribeSlice";
import historySlice from "./historySlice";
import descriptionBtnSlice from "./descriptionBtnSlice";
import clsSlice from "./clsSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        subscribe: subscribeSlice,
        history: historySlice,
        description: descriptionBtnSlice,
        cls:clsSlice,
        chat: chatSlice,
    }
});

export default store;