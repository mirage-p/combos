from flask import request, jsonify
from config import app, db
from models import Combo

@app.route("/combos", methods=["GET"])
def get_combos():
    combos = Combo.query.all()
    json_combos = list(map(lambda x: x.to_json(), combos))
    return jsonify({"combos": json_combos})

@app.route("/create_combo", methods=["POST"])
def create_combo():
    stance = request.json.get("stance")
    lead_leg = request.json.get("leadLeg")
    starting_range = request.json.get("startingRange")
    sequence = request.json.get("sequence")

    if not stance or not lead_leg or not starting_range or not sequence:
        return (
            jsonify({"message: You must include a stance, lead leg, starting range, and sequence"}),
            400,
        )
    new_combo = Combo(stance = stance, lead_leg = lead_leg, starting_range = starting_range, sequence = sequence)
    try:
        db.session.add(new_combo)
        db.session.commit
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    return jsonify({"message": "User created"}), 201

@app.route("/update_combo/<int:user_id>", methods=["PATCH"])
def update_combo(user_id):
    combo = Combo.query.get(user_id)

    if not combo:
        return jsonify({"message": "User not found"}), 404
    
    data = request.json
    combo.stance = data.get("stance", combo.stance)
    combo.lead_leg = data.get("leadLeg", combo.lead_leg)
    combo.starting_range = data.get("startingRange", combo.starting_range)
    combo.sequence = data.get("sequence", combo.sequence)

    db.session.commit()

    return jsonify({"message": "User updated"}), 200

@app.route("/delete_combo/<int:user_id>", methods=["DELETE"])
def delete_combo(user_id):
    combo = Combo.query.get(user_id)

    if not combo:
        return jsonify({"message": "User not found"}), 404
    
    db.session.delete(combo)
    db.session.commit()

    return jsonify({"message": "User deleted"}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)