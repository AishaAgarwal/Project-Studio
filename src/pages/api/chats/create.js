import connectDb from "../../../middleware/mongoose";
import Chat from "../../../../models/Chat";

const handler = async (req, res) => {
    if (req.method == 'POST'){
        try{
            const {chatName, isGroupChat, users, groupAdmin} = req.body;

            const chat = new Chat({
                chatName,
                isGroupChat,
                users,
                groupAdmin,
            })

            await chat.save();

            res.status(200).json({message: "Chat created successfully", chat});
        }
        catch (error){
            console.error('Error creating chat: ', error);
            res.status(500).json({error: "Internal server error"});
        }
    
    }
    else{
        res.status(400).json({error: "Bad request"});
    }
}

export default connectDb(handler);