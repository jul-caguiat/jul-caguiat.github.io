;Julfri Emmil O. Caguiat
;CMSC_203 Assignment 3
;May 10, 2022

   .MODEL SMALL
   .386            ;solution for je error
   .STACK 100H     ;initialize 100-byte stack segment
   .DATA

dispLine db"--------------------------",0AH,0DH,"$"
MESSAGE1 db " Simple Calculator in ASM ",0AH,0DH,"$"
MESSAGE2 db "    CMSC203 Assignment4   ",0AH,0DH,"$"
MESSAGE3 db "     by Julfri Caguiat    ",0AH,0DH,0AH,0DH,"$"


prompt1  db "Please enter [1] for Addition",0AH,0DH,"$"
prompt2  db "Please enter [2] for Subtraction",0AH,0DH,"$"
prompt3  db "Please enter [3] for Multiplication",0AH,0DH,"$"
prompt4  db "Please enter [4] for Division",0AH,0DH,"$"

inPrompt1   db 0AH,0DH,0AH,0DH,"Please enter 1st Number:  $"
inPrompt2   db 0AH,0DH,"Please enter 2nd Number:  $"
dispResult  db 0AH,0DH,0AH,0DH,"The Result is equals to:  $"

input1   db ?
input2   db ?
output   db ?

    .CODE
main PROC
    mov ax,@DATA      ;iniatilize data segment(DS)

    mov ds,ax       
    lea dx,dispLINE   ;display line
    mov ah,09h      
    int 21h            
  
    lea dx,MESSAGE1   ;display MESSAGE1
    mov ah,09h      
    int 21h
    
    lea dx,MESSAGE2   ;display MESSAGE2
    mov ah,09h      
    int 21h
    
    lea dx,MESSAGE3   ;display MESSAGE3
    mov ah,09h      
    int 21h

    lea dx,dispLINE   ;display line 
    mov ah,09h      
    int 21h  

get_user_choice:    
    lea dx,prompt1    ;display prompt1
    mov ah,09h      
    int 21h  
    
    lea dx,prompt2    ;display prompt2
    mov ah,09h     
    int 21h 
    
    lea dx,prompt3    ;display prompt3
    mov ah,09h      
    int 21h 
    
    lea dx,prompt4    ;display prompt4
    mov ah,09h      
    int 21h 
    
    mov ah,1          ;read char from keyboard 
    int 21H                
    sub al,30h        ;convert char to number
    
    cmp al,1          ;jump to ADDITION if user choice is 1
    je ADDITION
    
    cmp al,2          ;jump to SUBTRACTION if user choice is 2
    je SUBTRACTION
     
    cmp al,3          ;jump to MULTIPLICATION if user choice is 3
    je MULTIPLICATION 
    
    cmp al,4          ;jump to DIVISION if user choice is 4
    je DIVISION
    
ADDITION:
    lea dx,inPrompt1  ;display input1 prompt
    mov ah,09h      
    int 21h 
    
    mov ah,1          ;read char from keyboard
    int 21h         
    mov bl,al         ;store char into bl
    sub bl,30h        ;convert char to number
    
    lea dx,inPrompt2  ;display input2 prompt
    mov ah,09h      
    int 21h 
    
    mov ah,1          ; read char from keyboard
    int 21h         
    mov cl,al         ; store char into cl
    sub cl,30h        ;convert char to number
    
    add al,bl         ;add the two numbers
    mov ah,0
    AAA
    
    mov bx,ax 
    add bh,30h        ;convert number back to char
    add bl,30h 
    
    lea dx,dispResult ;display dispResult
    mov ah,09h      
    int 21h 
    
    mov ah,2          ;display 1st digit of output
    mov dl,bh
    int 21h         
    
    mov ah,2          ;display 2nd digit of output
    mov dl,bl
    int 21h           
  
    jmp EXIT          ;jump to exit
    
SUBTRACTION:    
    lea dx,inPrompt1  ;display input1 prompt  
    mov ah,09h      
    int 21h 
    
    mov ah,1          ;read char from keyboard
    int 21h         
    mov bl,al         ;store char into cl
    sub bl,30h        ;convert char to number
    
    lea dx,inPrompt2  ;display input2 prompt 
    mov ah,09h      
    int 21h 
    
    mov ah,1          ; read char from keyboard
    int 21h         
    mov cl,al         ; store char into cl
    sub cl,30h        ;convert char to number
    
    sub bl,cl         ;subtract cl from bl
    mov ah,0
    AAS

    add bl,30h        ;convert number back to char
    
    lea dx,dispResult ;display dispResult
    mov ah,09h      
    int 21h 
    
    mov ah,2          ;display output
    mov dl,bl
    int 21h         
  
    jmp EXIT          ;jump to exit
    
MULTIPLICATION:    
    lea dx,inPrompt1  ;display input1
    mov ah,09h      
    int 21h 
    
    mov ah,1          ;read char from keyboard
    int 21h 
    sub al,30h        ;convert char to number
    mov input1,al     ;store 1st number to input1 variable
    
    lea dx,inPrompt2  ;display input2
    mov ah,09h      
    int 21h 
    
    mov ah,1          ;read char from keyboard
    int 21h 
    sub al,30h        ;convert char to number
    mov input2,al     ;store 2nd number to input2 variable
    
    mul input1        ;multiply 1st abd 2nd numbers
    mov output,al     ;store result into output variable
    AAM
    
    add ah,30h        ;convert number back to char
    add al,30h     
    mov bx,ax
    
    lea dx,dispResult ;display dispResult
    mov ah,09h      
    int 21h 
    
    mov ah,2          ;display 1st digit of output
    mov dl,bh
    int 21h          
    
    mov ah,2          ;display 2nd ;display 1st digit of output
    mov dl,bl
    int 21h  
    
    jmp EXIT          ;jump to exit
    
DIVISION:
    lea dx,inPrompt1  ;display input1
    mov ah,09h      
    int 21h 
    
    mov ah,1          ;read char from keyboard
    int 21h         
    sub al,30h        ;convert char to number
    mov input1,al     ;store 1st number to input1 variable
    
    lea dx,inPrompt2  ;display input2
    mov ah,09h        
    int 21h 
    
    mov ah, 1         ;read char from keyboard
    int 21h 
    sub al,30h        ;convert char to number
    mov input2,al     ;store 2nd number to input2 variable
    
    mov cl,input1     ;store input1 into cl
    mov ch,00
    mov ax,cx
    
    div input2        ;divide input1 by input 2 in cl
    mov output,al     ;store result in output variable
    mov ah,00
    AAD
    
    add ah,30h        ;convert number back to character
    add al,30h        ;convert number back to character
    mov bx,ax
    
    lea dx,dispResult ;display dispResult
    mov ah,09h     
    int 21h 
    
    mov ah,2          ;display output
    mov dl,bl
    int 21h         
    
    jmp EXIT          ;jump to exit

EXIT:    
    mov ah,4Ch        ;terminate program
    int 21h

main ENDP
    END main


