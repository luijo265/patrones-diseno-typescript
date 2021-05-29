import { ETipoSolicitud, ISolicitud } from "./Domain/Solicitud/SolicitudDefinitions";
import { AdelantarSolicitudService } from "./Services/ModificarFecha/AdelantarSolicitudService";
import { CambiarTipoSolicitudService } from "./Services/ModificarFecha/CambiarTipoSolicitudService";

let sol1:ISolicitud = {
    id: 1,
    tipo: ETipoSolicitud.adelanto,
    fechaInicio: new Date('2019-10-05'),
    fechaFin: new Date('2019-10-15')
}

let sol2: ISolicitud = {
    id: 1,
    tipo: ETipoSolicitud.cambiartipo,
    fechaInicio: new Date('2019-10-05'),
    fechaFin: new Date('2019-10-15')
}

console.log('solicitud 1', sol1)
console.log('solicitud 2', sol2)

const cambiosSol1 = async () => {
    const adelantarService = new AdelantarSolicitudService(sol1);
    await adelantarService.execute();
    const cambiarService = new CambiarTipoSolicitudService(adelantarService.getSolicitud());
    await cambiarService.execute();
    sol1 = cambiarService.getSolicitud();
    console.log('solicitud nueva 1', sol1)
}

const cambiosSol2 = async () => {
    const adelantarService = new AdelantarSolicitudService(sol2);
    await adelantarService.execute();
    const cambiarService = new CambiarTipoSolicitudService(adelantarService.getSolicitud());
    await cambiarService.execute();
    sol2 = cambiarService.getSolicitud();
    console.log('solicitud nueva 2', sol2)
}

cambiosSol1().then(() => console.log("finalizado 1"))
cambiosSol2().then(() => console.log("finalizado 2"))