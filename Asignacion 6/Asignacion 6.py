class carro:
    def __init__(self,*args):
        #Se define el constructor con argumentos porque no sabemos cuantos llevara, entonces se le asignan al argumento  
        self.modelo=args[0]
        self.color=args[1]
        self.asientos=args[2]
        self.marca=args[3]
        self.puertas=args[4]
        self.combustible=args[5]
        self.placa=args[6]
    
    def acelerar(tiempo):        
        print("ACELERAR")        
        print("El automovil recorre 100km en segundos, por lo tanto su aceleracion es:",(100/tiempo))
        print("")
    def parquear(*args):
        print("PARQUEAR")
        if args[0]==True:
            print("¿Para estacionarse se necesita la camara del automovil? Si")
        else: 
            print("¿Para estacionarse se necesita la camara del automovil? No")
        if args[1]==True:
            print("¿Necesita las luces de retroceso? Si")
        else:
            print("¿Necesita las luces de retroceso? No")
        print("")
    def hecharGas(self):
        print("HECHAR GAS")
        print("Tipo de gasolina que recomendada:",self.combustible)
        print("")
    def info(self): 
        print("Informacion de su automovil")
        print("Marca:",self.marca)
        print("Modelo:",self.modelo,)
        print("Color:",self.color)
        print("")
    
newCarro = carro("Corolla", "Negro", 4, "Toyota",4,"Super","P466-341")
print("- AUTOMOVIL")
newCarro.info() 
#newCarro.acelerar(10)
newCarro.parquear(False,True)
newCarro.hecharGas()

#Herencia para el transportePublico
class transportePublico(carro):
    def __init__(self, *args):
        super().__init__(*args)

newTransporteP=transportePublico("Marcopollo", "VolksWagen", 4, "Azul",4,"Diesel","AB400-291")
print("")
print("- TRANSPORTE PUBLICO")
print("")
newTransporteP.info()

#Herencia para Policial 
class policial(carro):
    def __init__(self, *args):
        super().__init__(*args)

newTransporteP=policial("Marcopollo", "asd", 4, "VolksWagen",4,"Diesel","P246-182")
print("")
print("- POLICIAL")
print("")
newTransporteP.hecharGas()


#Herencia para Bomberos
class bomberos(carro):
    def __init__(self, *args):
        super().__init__(*args)

newTransporteP=bomberos("Marcopollo", "asd", 4, "VolksWagen",4,"Diesel","P246-182")
print("")
print("- BOMBEROS")
print("")
newTransporteP.parquear(False, False)
