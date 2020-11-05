import Provider from "~/provider/ProviderBase";

export default class ProviderCategories extends Provider {

  static PATH = "/categories/";

  delete(id) {
    return super.delete(ProviderCategories.PATH + id );
  }

  async get() {
    return await super.get(ProviderCategories.PATH);
  }

  async getById(id) {
    return await super.get(ProviderCategories.PATH + id );
  }

  post(id, elem) {
    return super.post(ProviderCategories.PATH + id , elem);
  }

  put(id, elem) {
    return super.put(ProviderCategories.PATH + id , elem)
  }

}
