/**
 * How to implement singleton?
 * 
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 * contructor ans save the instanice in a sttic variable.
 * 
 */


class SingletonTS{
    private static instance: SingletonTS;
    private version : string;

    private constructor (version: string){
        this.version = version
    }

    static getInstance(version: string): SingletonTS{

        if(!SingletonTS.instance){
            SingletonTS.instance = new SingletonTS(version)
        }

        return SingletonTS.instance;

    }

}

function appSingleton(){
    const singleton  = SingletonTS.getInstance("Version1");
    const singleton1 = SingletonTS.getInstance("Version2");
    const singleton2 = SingletonTS.getInstance("Version3");

    console.log(singleton == singleton1);
    console.log(singleton1 == singleton2);

} 