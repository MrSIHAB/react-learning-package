import React, { useState } from "react";
import "./tiktak.css"   // importing TikTak css file directly



// ----------------------------------------------------------- The main component
const TikTak =()=>{

    //  ------------------------   setting variables from useState
    const [value, setValue] = useState(Array(9).fill(null)) // X or O value
    const [clVal, setClval] = useState(Array(9).fill(null)) // red or blue class
    const [xTurn, setTurn] = useState(true) // X or O turn

    // Checking and updating the X or O turn with red or blue class
    const clickHandle = (index) =>{
        const copyValue = [...value]
        const copyCL = [...clVal]

        // return if a value X or O alrady exist
        if(copyValue[index] !== null) return; 
        copyValue[index] = xTurn? 'X': 'O';
        copyCL[index] = xTurn? 'red': 'blue';

        // update the variables
        setValue(copyValue)
        setClval(copyCL)
        setTurn(!xTurn)
    }

    //  -------------   Define the possibilitis of win
    const winnerArr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]// -----------------  End of Defines


    var winer = null    // contain who is winner
    // checking for game tie
    const teiHandle = (array)=>{
        if (array.some(element => element === null)) {
            return
        } else {
            return winer = 'tie'
        }
    }
    teiHandle(value)
    // checking for winner if a possibility match
    winnerArr.forEach(item => {
        let [a, b, c] = item
        if (value[a] !== null && value[a] === value[b] && value[b] === value[c]) {
            return winer = value[a]
        }
    });



    // ----- Replay function after game win and tie
    const playAgain =()=>{
        setValue(Array(9).fill(null))
        setClval(Array(9).fill(null))
    }


    //  ==========================================  returning the actual component
    return (
        <div className="taskContainer">
            {/* rndaring winner  */}
            {winer? 
            <>
                <div style={{
                    width: '100%',
                    margin: '2rem 0', 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: "bold"
                    }}
                    >
                    
                    <span className={winer === 'O'? 'blue': 'red'}>{winer} </span>
                    {winer === 'tie'? '': ' Won the match' }
                </div>
              <button className="btn taskBtn" onClick={()=>playAgain()} >Play Again</button>
            </>
            :
            <>
                <h2 className="txt-center" style={{marginTop: 0}}>
                    <span style={{color: 'red'}}>T</span>ik 
                    T<span style={{color: "#0cc"}}>a</span>k 
                    To<span style={{color: "#0c5"}}>e</span>
                </h2>

                <div className="row">
                    <div className={`squre ${clVal[0]}`} onClick={()=>clickHandle(0)}>{value[0]}</div>
                    <div className={`squre ${clVal[1]}`} onClick={()=>clickHandle(1)}>{value[1]}</div>
                    <div className={`squre ${clVal[2]}`} onClick={()=>clickHandle(2)}>{value[2]}</div>
                </div>
                <div className="row">
                    <div className={`squre ${clVal[3]}`} onClick={()=>clickHandle(3)}>{value[3]}</div>
                    <div className={`squre ${clVal[4]}`} onClick={()=>clickHandle(4)}>{value[4]}</div>
                    <div className={`squre ${clVal[5]}`} onClick={()=>clickHandle(5)}>{value[5]}</div>
                </div>
                <div className="row">
                    <div className={`squre ${clVal[6]}`} onClick={()=>clickHandle(6)}>{value[6]}</div>
                    <div className={`squre ${clVal[7]}`} onClick={()=>clickHandle(7)}>{value[7]}</div>
                    <div className={`squre ${clVal[8]}`} onClick={()=>clickHandle(8)}>{value[8]}</div>
                </div>
            </>
            }
        </div>
    )
}

export default TikTak