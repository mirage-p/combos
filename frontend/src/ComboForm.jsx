import { useState } from "react"

const ComboForm = () => {
    const [stance, setStance] = useState("")
    const [leadLeg, setLeadLeg] = useState("")
    const [startingRange, setStartingRange] = useState("")
    const [sequence, setSequence] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
       
        const data = {
            stance,
            leadLeg,
            startingRange,
            sequence
        }
        const url = "http://127.0.0.1:5000/create_combo"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            //
        }
    }

    return (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="stance">Stance:</label>
            <input type="text" id="stance" value={stance} onChange={(e) => setStance(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="leadLeg">Lead Leg:</label>
            <input type="text" id="leadLeg" value={leadLeg} onChange={(e) => setLeadLeg(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="startingRange">Range:</label>
            <input type="text" id="startingRange" value={startingRange} onChange={(e) => setStartingRange(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="sequence">Sequence:</label>
            <input type="text" id="sequence" value={sequence} onChange={(e) => setSequence(e.target.value)}></input>
        </div>
        <button type="submit">Create Combo</button>
    </form>
    );
};

export default ComboForm