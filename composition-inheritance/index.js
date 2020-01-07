function swimmer({name}){
    return {
        swim: () =>{
            console.log(`${name} can swim`)
        }
    }
}

function flyer({name}){
    return {
        fly: () =>{
            console.log(`${name} can fly`)
        }
    }
}

function attackerAndWalker({name}){
    return {
        attack : () => console.log(`${name} attacked`),
        walk : () => console.log(`${name} walked`)
    }
}

function swimmingMonsterCreator(name){
    const monster = {
        name : name
    }
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...attackerAndWalker(monster)
    }
}

const obj = swimmingMonsterCreator('Monster')

obj.swim()
obj.fly()
obj.attack()
obj.walk()
