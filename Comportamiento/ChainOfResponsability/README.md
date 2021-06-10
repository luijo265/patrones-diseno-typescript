Se tiene un listado de expediente de un mismo usuario que se quiere crear un caso médico.
Pero antes de enviarlo a crear dichos expedientes, se requiere filtrar los que no cumplan ciertas reglas.
Puede que en el futuro se agreguen más reglas y hasta más datos en el objeto de expediente, por lo que se requiere que cuando se agregue más reglas no afecte la estructura de las ya contempladas.

Reglas por el momento:

    1.- Si es incapacidad
        - Minimo 3 dias
        - reserva no puede ser mayor a 3 veces el capital de la reserva

    2.- Si es muerte
        - Reserva no puede ser mayor a 7 veces el capital de la reserva
        - Solo se puede hacer desde asesores

    3.- Hostipalizacion
        - mayor de edad
          - Reserva no debe ser menor a la deuda
        - menor de edad
          - Reserva no puede ser mayor a 5 veces el capital de la reserva