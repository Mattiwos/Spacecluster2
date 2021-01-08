class World{
	constructor(){

	}
	
}
class Players{
    constructor(){
        this.players = []
    }
    add(tsocketid,tname,tx,ty,tr){
        this.players.push([{
           socketid:tsocketid ,
           name: tname,
           x: tx,
           y: ty,
           r: tr
        }])
    }
    get playersPos(){
        return this.players;
    }
    remove(socketid){
        for (var i=0;i < this.players.length();i++){
            if (this.players.socketid == socketid){
                this.players.splice(i,1)
            }
        }
    }
}
class Objects{
	constructor(){
	
	}

}
