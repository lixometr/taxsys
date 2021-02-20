import { getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: 'config' })
class Config extends VuexModule {
    baseUrl = process.env.NODE_ENV === 'development' ? 'https://taxsys.ru' : '/'
    baseApiUrl = process.env.NODE_ENV === 'development' ? 'https://taxsys.ru/api' : '/api'
    titleTemplate = '%s - Taxsys'
}
export const ConfigModule = getModule(Config)