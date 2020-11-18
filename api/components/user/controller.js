const nanoid = require("nanoid");
const USER_TABLE = 'user';

function userController(injectedStore){
    // set store
    let store = injectedStore;
    if(!store){
        store = require("../../../store/dummy");
    }

    function listUsers(){
        return store.list(USER_TABLE);
    }

    function getUser(id){
        return store.get(USER_TABLE, id);
    }

    function createUser(body){
        if(!body.name) return new Error('name not provided!');
        body.id = nanoid();

        return store.upsert(USER_TABLE, body);
    }

    function deleteUser(id){
        return store.remove(id);
    }

    return{
        listUsers,
        getUser,
        createUser,
        deleteUser
    }
}

module.exports = userController;




