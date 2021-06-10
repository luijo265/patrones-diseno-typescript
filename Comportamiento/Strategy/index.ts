import { ApplicationStrategy } from "./Application/Application";
import { ETipoSolicitud, ISolicitud } from "./Domain/Models/Solicitud";

const app = new ApplicationStrategy()
const sol1: ISolicitud = {
    tipo: ETipoSolicitud.grupal,
    dias: 8,
    participantes: [
        {
            nombre: "luis",
            apellido: "briceño",
            edad: 20
        },
        {
            nombre: "Dayana",
            apellido: "Bonilla",
            edad: 17
        },
        {
            nombre: "luis",
            apellido: "montalves",
            edad: 20
        },
        {
            nombre: "Dayana",
            apellido: "Herrera",
            edad: 17
        }
    ]
}
console.log("validando sol1")
app.execute(sol1);


const sol2: ISolicitud = {
    tipo: ETipoSolicitud.personal,
    dias: 6,
    participantes: [
        {
            nombre: "Dayana",
            apellido: "Bonilla",
            edad: 19
        }
    ]
}
console.log("\n\n\nvalidando sol2")
app.execute(sol2);