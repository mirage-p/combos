import React from "react";

const ComboList = ({combos, updateCombo, updateCallback}) => {

    const deleteCombo = async (id) => {
        try {
            const options = {
                method: "DELETE",
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_combo/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }

    return <div>
        <h2>Combos</h2>
        <table>
            <thead>
                <tr>
                    <th>Stance</th>
                    <th>Lead Leg</th>
                    <th>Range</th>
                    <th>Combo</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {combos.map((combo) => (
                    <tr key={combo.id}>
                        <td>{combo.stance}</td>
                        <td>{combo.leadLeg}</td>
                        <td>{combo.startingRange}</td>
                        <td>{combo.sequence}</td>
                        <td>
                            <button onClick={() => updateCombo(combo)}>Update</button>
                            <button onClick={() => deleteCombo(combo.id)} >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ComboList