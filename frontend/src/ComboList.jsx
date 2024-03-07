import React from "react";

const ComboList = ({combos}) => {
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
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ComboList