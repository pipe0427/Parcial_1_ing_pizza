import Pizza from '../models/Pizza'
export class PizzPerfect  {
    
    pizzas = []; 

    constructor(){
        this.initPizza();
    }
    
    initPizza(){
        const pizzaChampignon = new Pizza("Champiñones", ["champiñones","pollo desmechado"]);
        const pizzaMexicana = new Pizza("Mexicana", ["jalapeno", "carne molida"]);
        const pizzaHawaiana = new Pizza("Hawaiana", ["piña", "jamón"]);
        const pizzaPepperoni = new Pizza("Pepperoni", ["pepperoni", "queso"]);

        this.pizzas = [pizzaChampignon,pizzaHawaiana,pizzaMexicana,pizzaPepperoni];
    }

    createPizza(pizza){
        const pizzaNew = new Pizza(pizza.name,pizza.ingredients);

        for (let i = 0; i < this.pizzas.length; i++) {
            if(pizzaNew != null && pizzaNew.name != this.pizzas[i].name){
                this.pizzas.push(pizzaNew);
                return true;
            }else{
                console.log("No se pudo agregar la pizza");
                return false;
            }
        }
    }

    updatePizza(ingredients){
        const pizzaNew = new Pizza("pizza nueva",[ingredients]);

        if(pizzaNew != null){
            this.pizzas.push(pizzaNew);
            return true;
        }else{
            console.log("No se pudo modificar la pizza");
            return false;
        }        
    }

    deletePizza(namePizza){
        for (let i = 0; i < this.pizzas.length; i++) {
            if(this.pizzas[i].name == namePizza){
                this.pizzas.splice(i,1);
            }else{
                console.log("No se pudo eliminar esa pizza");
            }
        }
    }

    listar(){
        for (let i = 0; i < this.pizzas.length; i++) {
            console.log(this.pizzas[i]);
        }
    }
}