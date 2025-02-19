import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    organization: { type: String, required: true },
    industry: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// If a "Contact" model already exists, use it; otherwise create a new model.
const Contact = models.Contact || model("Contact", ContactSchema);
export default Contact;
