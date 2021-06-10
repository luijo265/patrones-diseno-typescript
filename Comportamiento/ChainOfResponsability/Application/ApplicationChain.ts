import { IExpediente } from "../Domain/Expediente";
import { FiltrarExpedienteException } from "../UseCase/Exception/FiltrarExpedienteException";
import { FiltrarExpedienteBuilder } from "../UseCase/FiltrarExpediente/FiltrarExpedienteBuilder";

export class ApplicationChain {
    
    public execute(expedientes: IExpediente[]) {
        const filtrarExpediente = FiltrarExpedienteBuilder.builder();
        console.log(`Se tienen ${expedientes.length} expedientes iniciales`)

        expedientes = expedientes.filter(expediente => {
            try {
                filtrarExpediente.validate(expediente)
            } catch (error) {
                if (error instanceof FiltrarExpedienteException) {
                    console.log(error.message)
                    return false;
                }
            }
            return true;
        })

        console.log(`Quedan ${expedientes.length} expedientes`)
    }

}