print("CALCUlADORA")
n1 = float(input("Introduce tu primer número: ") )
n2 = float(input("Introduce tu segundo número: ") )
opcion = 0
while True:
    print("""
    Elige la opcion de la operacion que deseas realizar
    
    1) Sumar 
    2) Restar
    3) Multiplicar
    4) Dividir
    5) Cambiar los números elegidos
    6) Apagar la calculadora
    """)
    opcion = int(input("Elige una opción: ") )     
    if opcion == 1:
        print(" ")
        print("RESULTADO: La suma de",n1,"+",n2,"es igual a",n1+n2)
    elif opcion == 2:
        print(" ")
        print("RESULTADO: La resta de",n1,"-",n2,"es igual a",n1-n2)
    elif opcion == 3:
        print(" ")
        print("RESULTADO: El producto de",n1,"*",n2,"es igual a",n1*n2)
    elif opcion == 4:
        if n2!=0:
            print(" ")
            print("RESULTADO: La division de",n1,"/",n2,"es igual a",n1/n2)
        else: 
            print("¡¡¡OJO!!! No se puede dividir entre cero, le sugerimos cambiar los numeros")
        
    elif opcion == 5:
        n1 = float(input("Introduce tu primer número: ") )
        n2 = float(input("Introduce tu segundo número: ") )
    elif opcion == 6:
        break
    else:
        print("Opción incorrecta")