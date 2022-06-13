import { Schema,Model, model, connection } from 'mongoose';

type UserType = {
    age: number,
    email: string,
    interests: string[],
    name: {
        firstName: string,
        lastName: string
    }
};

const schema = new Schema<UserType>({
    age: {type: Number, required: true},
    email: {type: String, required: true},
    interests: [String],
    name: {
        firstName: {type: String, required: true},
        lastName: String
    }
});

//export default model<Usertype>(modelName, schema);
const modelName: string = 'User'
const userModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UserType>) : model<UserType>(modelName, schema)

export default userModel;