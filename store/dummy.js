const db = {
    'user': [
        { id: '1', name: 'Carlos' }
    ]
};

async function list(table){
    return db[table];
}

async function get(table, id){
    return await list(table).find( item => item.id === id);
}

async function upsert(table, data){
    return await list(table).push[data]
}

async function remove(table, id){
    const arr = await list(table);
    const index = arr.findIndex( item => item.id === id);
    
    if(index === -1) return null;
    
    arr.splice(index, 1);
    return id;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}