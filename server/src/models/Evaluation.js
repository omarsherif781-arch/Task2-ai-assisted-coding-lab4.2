import mongoose from 'mongoose';

const evaluationSchema = new mongoose.Schema({
  seminarCode: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    optional: true
  },
  evaluatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    optional: true
  }
}, { timestamps: true });

// Compound unique index to prevent a user from evaluating the same seminar twice
evaluationSchema.index({ seminarCode: 1, evaluatedBy: 1 }, { unique: true });

export const Evaluation = mongoose.model('Evaluation', evaluationSchema);
