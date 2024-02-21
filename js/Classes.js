export class EffectManager{
    constructor(){
        this.effects=[];
        this.time=new Time();
    }

    advanceTime(s=0,m=0,h=0,d=0){
        this.time.plusTime(s,m,h,d);
        for(let i=0;i<this.effects.length;i++){
            this.effects[i].subtractTime(s,m,h,d);
        }
    }
    advanceBattle(){
        this.advanceTime(6);
    }
}

export class Effect{
    constructor(name="", type="", source="", time=new Time()){
        this.name=name;
        this.type=type;
        this.source=source;
        this.time=time;
    }

    subtractTime(s=0,m=0,h=0,d=0){
        this.time.subtractTime(s,m,h,d);
    }
}

export class Time{
    constructor(s=0,m=0,h=0,d=0){
        this.total=this.convertToSeconds(s,m,h,d);
        this.s;
        this.m;
        this.h;
        this.d;
        
        this.convertToParts();
    }
    convertToSeconds(s=0,m=0,h=0,d=0){
        let sum=s;
        sum+=m*60;
        sum+=h*3600;
        sum+=d*86400;

        return sum;
    }

    convertToParts(){
        this.s=Math.floor(this.total%60);
        this.m=Math.floor(this.total/60%60);
        this.h=Math.floor(this.total/3600%24);
        this.d=Math.floor(this.total/86400);
    }

    subtractTime(s=0,m=0,h=0,d=0){
        this.total-=this.convertToSeconds(s,m,h,d);
        this.convertToParts();
    }

    plusTime(s=0,m=0,h=0,d=0){
        this.total+=this.convertToSeconds(s,m,h,d);
        this.convertToParts();
    }
}