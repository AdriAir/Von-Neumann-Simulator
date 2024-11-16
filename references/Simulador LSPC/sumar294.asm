;programa que suma dos numeros cada uno de dos digitos
;y le aplica el ajuste en ascii para separar en bcd el
;resultado
.model tiny
.stack
.data
	msg db 'Echame los numeros a sumar $'
.code
.startup
	mov ah,09h ;interrupcion para imprimir una cadena
	lea dx,msg  ;ontenemos la direccion de memoria de ms
	int 21h    ;ejecutamos la interrupcion
	
	mov ah,01h ;interr. lee el caracter 1 del numero 1
	int 21h    ;ejecutamos la interrupcion
	sub al,30h ;hacemos el aguste de caracter a numero
	mov bl,al  ;guardamos el numero en bl
	
	int 21h    ;lee el caracter 2 del numero 1
	sub al,30h ;ajustamos el numero
	mov cl,al  ;copeamos a cl
	
	int 21h    ;lee el caracter 1 del numero 2
	sub al,30h ;ajustamos el numero
	add bl,al  ;lo sumamos a las decenas
	
	int 21h    ;lee el caracter 2 del numero 2
	sub al,30h ;ajustamos el numero
	add cl,al  ;sumamos a las unidades
	mov ax,cx  ;pasamos el R para convertirlo BCD
	aaa        ;convierte BCD
	mov cx,ax  ;respaldamos el resultado separado

	add bl,ch  ;sumamos el acarreo a las decenas
	mov ax,bx  ;pasamos ax para convertir a BCD
	aaa        ;convertimos BCD separado
	mov bx,ax  ;respaldamos el resultado
	mov dl,bh  ;muevo las centenas a dl
	add dl,30h ;ajusto las centenas
	mov ah,02h ;interr. mostrar un caracter
	int 21h    ;muestra las sentenas en pantalla
	
	mov dl,bl  ;muevo las decenas a dl
	add dl,30h ;ajusto las decenas
	int 21h    ;muestro las decenas
	
	mov dl,cl  ;muevo las unidades a dl
	add dl,30h ;ajusto las unidades
	int 21h    ;muestro las unidades
	
.exit
end