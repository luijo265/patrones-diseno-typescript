import moment from 'moment';

export const diferenciaDias = (fechaInicio:Date, fechaFin:Date) => 
    moment(fechaFin).diff(moment(fechaInicio), 'days')
    

export const getDate = (fecha: string, format = 'YYYY-MM-DD') =>
    moment(fecha, format).toDate()