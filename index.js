const Db = require('./lib/git')

class Github_db{
    constructor({github_token,user_name,repo,commit_message,committer_mail,committer_name,use_template,is_private_repo}={}) {
          this._git = new Db({github_token,user_name,repo,commit_message,committer_mail,committer_name,use_template,is_private_repo})
    }
    async connect() {
        return await this._git.connect()
    }
    /**
     * 
     * @param model_name   name of your model
     * @param commit_message main commit message
     * @param path directory path of your Model
     * @param password if need encryption.. use password
     * @returns Model Class
     */
    stringModel(model_name,commit_message,path = 'Models/',password='') {
        return this._git.Model(model_name,String,commit_message,path,password)
    }
     /**
     * 
     * @param model_name   name of your model
     * @param commit_message main commit message
     * @param path directory path of your Model
     * @param password if need encryption.. use password
     * @returns Model Class
     */
    objectModel(model_name,commit_message,path = 'Models/',password='') {
        return this._git.Model(model_name,Object,commit_message,path,password)
    }
     /**
     * 
     * @param model_name   name of your model
     * @param commit_message main commit message
     * @param path directory path of your Model
     * @param password if need encryption.. use password
     * @returns Model Class
     */
    arrayModel(model_name,commit_message,path = 'Models/',password='') {
        return this._git.Model(model_name,Array,commit_message,path,password)
    }
     /**
     * 
     * @param filepath name of your file (ex : hello.png)
     * @param commit_message main commit message
     * @param path directory path of your Model
     * @returns File Class
     */
    File(filepath,commit_message,path = 'Files/') {
        return this._git.File(filepath,commit_message,path)
    }
}
module.exports = Github_db
