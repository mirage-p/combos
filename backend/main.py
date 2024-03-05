from flask import request, jsonify
from config import app, db
from models import Combo

@app.route("/combos", methods=["GET"])
def get_combos():
    combos = Combo.query.all()
    json_combos = list(map(lambda x: x.to_json(), combos))
    return jsonify({"combos": json_combos})



if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)