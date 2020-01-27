// class chat
 class Chat {
    constructor(race) {
        this.race = race;
        // le chat miaule à interval de 2 secondes
        setInterval(() => {
            console.log('le chat miaou');
        }, 2000)
    }
}