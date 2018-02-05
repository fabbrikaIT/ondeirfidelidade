import { Injectable } from "@angular/core";

// Serviço provedor de configurações da aplicação
@Injectable()
export class AppConfig {
  // API Configs

  // Local Container
  // baseUrl: string = 'http://localhost:8001/v0/';

  // Dev Container
  baseUrl: string = 'http://ondeirfidelidade.fr.openode.io/v0/';

  // Prod Container
  // baseUrl: string = 'http://appondeir.azurewebsites.net/ondeircuritiba/';

  // Aplication Configurations
}
