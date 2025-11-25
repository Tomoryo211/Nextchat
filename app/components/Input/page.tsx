"use client";
import { useState } from "react";
import style from "./Input.module.scss";
return(
    <div className={style.inputArea}>
        <input 
            type="text"
            value={input} />
    </div>
)