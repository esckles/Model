import { Schema, Types } from "mongoose";

interface iSeller {
  email: string;
  password: string;
  platformID: string;
  userName: string;
  storeName: string;

  sellerProduct: Array<{}>;
}

interface iSellerData extends iSeller, Document {}

const sellerModel = new Schema<iSellerData>({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },
  platformID: {
    type: String,
    unique: true,
  },
  userName: {
    type: String,
    unique: true,
  },
  storeName: {
    type: String,
    unique: true,
  },
  sellerProduct: [
    {
      type: Types.ObjectId,
      ref: "products",
    },
  ],
});
