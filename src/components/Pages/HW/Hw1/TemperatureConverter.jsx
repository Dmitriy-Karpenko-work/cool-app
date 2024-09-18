import { Button, Grid2, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import s from "./hw1.module.scss"
// Формулы
// °C = (°F - 32) / 1.8
// °F = (°C * 1.8) + 32

export const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState("")
    const [farengait, setFarengait] = useState("")

    const convertCTF = (celsius) => {
        return (celsius * 1.8) + 32;
    };

    const converFTC = (farengait) => {
        return (farengait - 32) / 1.8;
    };

    const handleClick = () => {
        if (celsius !== '') {
            const ConvertedF = convertCTF(celsius)
            setFarengait(ConvertedF.toFixed(2))
            setCelsius('')
        }
        if (farengait !== '') {
            const ConvertedC = converFTC(farengait)
            setCelsius(ConvertedC.toFixed(2))
            setFarengait('')
        }
      };




    return(
        <div style={{display:'flex',gap:"10px"}}>
        <TextField
        variant="standard" 
        color="blue"
        style={{border:"1px solid white",color: 'white'}}
        label="цельсии"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        type='number'
        className={s.TextField}
      />
      <TextField
      variant="standard" 
      color="blue"
      style={{border:"1px solid white",color: 'white'}}
        label="фаренгеит"
        value={farengait}
        onChange={(e) => setFarengait(e.target.value)}
        type='number'
        className={s.TextField}
      />
      <Button style={{border:"1px solid white",color: 'white'}}
        onClick={handleClick}
      >ПЕРЕВЕСТИ</Button>
        </div>
    )
}
