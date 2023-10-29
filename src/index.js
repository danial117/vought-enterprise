import React from "react";
import { createRoot } from "react-dom/client";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import  authReducer from "./state";
import App from './App'
import persistReducer from "redux-persist/es/persistReducer";
import { REHYDRATE,FLUSH,REGISTER,PAUSE,PERSIST,persistStore } from "redux-persist";
import { Provider } from "react-redux";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";



const persistConfig={key:'root',storage,version:1};

const persistedReducer=persistReducer(persistConfig,authReducer);

const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableChecks:{ignoredActions:[REHYDRATE,FLUSH,REGISTER,PAUSE,PERSIST],},})

})




const root=createRoot(document.getElementById("root"));


root.render(<React.StrictMode><Provider store={store}><PersistGate loading={null} persistor={persistStore(store)}><App/></PersistGate></Provider></React.StrictMode>);

     