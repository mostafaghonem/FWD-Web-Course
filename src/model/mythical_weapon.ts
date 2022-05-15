import client  from "../database"; //this the connection to the database

export type Weapon ={
    id : Number;
    name : string;
    type : string;
    weight : number;
}

export class MythicalWeaponStore{
    async index(): Promise<Weapon[]>{
        try{
            const con = await client.connect();
            const sql = 'SELECT * FROM mythical_weapons';
            const result  = await con.query(sql)
            con.release() //close the connection
            return result.rows;
        }catch(err){
            throw new Error(`Cannot get Weapons ${err}`)
        }
    }
}