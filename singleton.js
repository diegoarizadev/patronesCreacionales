/**
 * Hoow tto implement singleton?
 * 
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 * contructor ans save the instanice in a sttic variable.
 * 
 */

class Singleton{

    static instance = undefined;

    constructor(){
        this.version = this.version
        
    }

    static getInstance(version){
        if (!Singleton.Instance){
            Singleton.Instance = new Singleton(version);
        }

        return Singleton.instance;
    }

}



function appSingelton(){

    const singleton = Singleton.getInstance("version1");
    const singleton1 = Singleton.getInstance("version2");
    console.log(singleton == singleton1);

}


appSingelton();