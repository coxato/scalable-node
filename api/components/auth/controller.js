const auth = require("../../../auth");
const err = require("../../../utils/error");
const TABLE = 'auth';

function authController(injectedStore){
    // set store
    let store = injectedStore;
    if(!store){
        store = require("../../../store/dummy");
    }

    async function login(username, password){
        const user = await store.query(TABLE, {username});
        if(!user) throw err("user does not exist", 404);

        isUser = await auth.compareCrypt(password, user.password);

        if(isUser){
            const { id, username } = user;
            return auth.jwtSing({id, username});
        } else {
            throw err("invalid password", 401);
        }
    }

    async function saverUserAuthData(data){
        let { id, username, password } = data;
        password = await auth.encrypt(password); 

        const authData = {
            id,
            username,
            password    
        }
        return await store.upsert(TABLE, authData); 
    }

    return {
        saverUserAuthData,
        login
    }

}

module.exports = authController;