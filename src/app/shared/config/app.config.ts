import { Injectable } from "@angular/core";

// Serviço provedor de configurações da aplicação
@Injectable()
export class AppConfig {
  // API Configs

  // Local Container
  // baseUrl: string = 'http://localhost:8001/v0/';

  // Dev Container
  // baseUrl: string = 'http://ondeirfidelidade.fr.openode.io/v0/';
    baseUrl: string= 'http://onde-ir-fidelidade-api-ondeirfidelidade.7e14.starter-us-west-2.openshiftapps.com/v0/';

  // Prod Container
  // baseUrl: string = 'http://appondeir.azurewebsites.net/ondeircuritiba/';

  // Aplication Configurations

  // App Onde Ir Api
  // ondeIrApi: string = 'http://appondeir.azurewebsites.net/ondeircuritiba/ondeir/';
   ondeIrApi: string = 'http://www.appondeir.com.br/sistema/rest/';
}
