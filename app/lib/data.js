import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    await connectToDB();
    const users = await User.find({username:{$regex: regex}});
    return users;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    await connectToDB();
    const count = await Product.countDocuments({title:{$regex: regex}});
    const products = await Product.find({title:{$regex: regex}})
      .skip((page - 1) * 10)
      .limit(10);
    return { count, products };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
