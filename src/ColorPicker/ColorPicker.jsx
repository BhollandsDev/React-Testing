import React, {useState} from 'react'

function ColorPicker (){
    const [color, setColor] = useState("#FFFFFF")

    return(
        <>
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor : color}}><p>Selected Color: {color.color}</p></div>
            <label>Select a Color:</label>
            <input className='color-picker-input' type='color' value={color} onChange={evt => setColor(evt.currentTarget.value)}/>
        </div>
        </>
    )
}


export default ColorPicker