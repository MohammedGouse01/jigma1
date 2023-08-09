import React from "react"
import { useEffect, useState } from 'react';

export const cleanObject=(obj)=>{
    const filteredEntries=Object.entries(obj).filter(([key, value])=>value !== undefined && value !=='')
    return Object.fromEntries(filteredEntries)
}

export const useMount = (callback)=>{
        useEffect(()=>{
            callback();
        },[])

}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
}