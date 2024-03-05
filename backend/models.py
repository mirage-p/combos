from config import db

class Combo(db.Model):
    id =  db.Column(db.Integer, primary_key=True)
    stance = db.Column(db.String(80), unique=False, nullable=False)
    lead_leg = db.Column(db.String(80), unique=False, nullable=False)
    starting_range = db.Column(db.String(80), unique=False, nullable=False)
    sequence = db.Column(db.String(120), unique=True, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "stance": self.stance,
            "leadLeg": self.lead_leg,
            "startingRange": self.starting_range,
            "sequence": self.sequence
        }