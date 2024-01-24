export{}

class singleton{
    private static instance : singleton;
    private constructor(){}

    public static getinstance():singleton{
        if(!singleton.instance){
            singleton.instance=new singleton();
        }
        return singleton.instance;
    }

    public welcome():void{
        console.log("Hi I am singleton pattern");
    }
}

let single=singleton.getinstance();
single.welcome();