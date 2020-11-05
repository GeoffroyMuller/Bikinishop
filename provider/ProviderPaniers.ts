import Provider from "~/provider/ProviderBase";

export default class ProviderPaniers extends Provider {

  static PATH = "/panier/";

  async delete(id) {
    return super.delete(ProviderPaniers.PATH + id );
  }

  async get() {
    return super.get(ProviderPaniers.PATH);
  }

  async post(id, elem) {
    return super.post(ProviderPaniers.PATH + id , elem);
  }

  async put(id, elem) {
    return super.put(ProviderPaniers.PATH + id , elem)
  }

}
