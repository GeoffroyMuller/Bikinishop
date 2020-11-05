export default abstract class Provider {
  protected axios;
  protected  path;

  constructor(axios) {
    this.axios = axios;
  }

  async delete(path){
    return await this.axios.delete(path);
  };

  async get(path){
    return await this.axios.get(path);
  };

  async post(path, data){
    return await this.axios.post(path, data);
  };

  async put(path, data){
    return await this.axios.put(path, data);
  };

}

