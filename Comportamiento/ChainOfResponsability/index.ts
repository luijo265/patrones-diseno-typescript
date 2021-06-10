import { ApplicationChain } from "./Application/ApplicationChain";
import { ETipoAplicacion, IExpediente } from "./Domain/Expediente";
import { EventoIncapacidad } from "./Domain/Models/ExpedienteModels";
import { getDate } from "./Utils/DateUtils";

let incapacidad = new EventoIncapacidad();
incapacidad.fechaInicio = getDate('2021-06-01')
incapacidad.fechaFin = getDate('2021-06-15')

// console.log('incapacidad',incapacidad);

let expedientes: IExpediente[] = [
    {
        nmexpdiente: 'csdcsdcasdv',
        aplicacion: ETipoAplicacion.asesores,
        reserva: {
            reserva: 1500001,
            capital: 500000,
        },
        evento: incapacidad,
        usuario: {
            nombre: 'Luis',
            edad: 30,
            deuda: 3241535,
            dni: 'cscavav121',
        }
    }
];

const app = new ApplicationChain();
app.execute(expedientes);