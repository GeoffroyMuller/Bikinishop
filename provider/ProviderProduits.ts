import Provider from "~/provider/ProviderBase";

export default class ProviderProduits extends Provider {

  static PATH = "/produits/";

  async delete(id) {
    return super.delete(ProviderProduits.PATH + id );
  }

  async get() {
    return super.get(ProviderProduits.PATH);
  }

  async post(id, elem) {
    return super.post(ProviderProduits.PATH + id , elem);
  }

  async put(id, elem) {
    return super.put(ProviderProduits.PATH + id , elem)
  }

}
