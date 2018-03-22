function Point(){
    this.x=params.x || 0
    this.y=params.y || 0
    this.r=params.r || 1
    this.calculaCircumf=function(){},
    this.calculaCirculo=function(){},
    this.calculaOtro=function(){},
    this.calculaOtroMas=function(){}
}

p1=new Point ({x:2, y:3})
p1.calculaOtro()
p1.calculaCirculo()

function App(params)

app = new App({user:"Pepe"})