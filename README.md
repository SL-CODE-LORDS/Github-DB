<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github DataBase"></a>
</p>

<h2 align="center">Github DataBase</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/SL-CODE-LORDS/Github-DB.svg)](https://github.com/SL-CODE-LORDS/Github-DB/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SL-CODE-LORDS/Github-DB.svg)](https://github.com/SL-CODE-LORDS/Github-DB/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> github repository database
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

use github repository as database

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing


```sh
yarn add @sl-code-lords/github-db
```

or

```sh
npm i @sl-code-lords/github-db
```

## 🎈 Usage <a name="usage"></a>

- first you need to get [github access token](https://github.com/settings/tokens/new)

```ts
var Github_db = require('@sl-code-lords/github-db')
var config={ github_token: 'token', user_name:'user_name', repo:'test_github_db',is_private_repo:true }
var git = new Github_db(config)

```
## Config

```ts
const config = {
    github_token, // your github token
    user_name, // your github username
    repo, // repo name for github db
    commit_message, // commit massage
    committer_mail, // mail of any github account for commit
    committer_name, // name for committer
    use_template, // if you have template repo use_template : 'username/repo'
    is_private_repo // if true repo will gen as private
}
```
## Connecting..

```ts
const is_conn = await git.connect()
```
```ts
//is_conn
true

```
## File Model

```ts
//init new file
var File = git.File('hello.txt','Init','Files/')
        
// upload file to github
var init = await File.upload_data(Buffer.from('test file upload', 'utf-8'))
        
//delete File From Github
var del = await File.delete_file()
```
```ts
//init
true

//del
true

```
## String Model

```ts
var password = '' // password for enc file method

//init new String Model
var session = git.stringModel('session','Init','DB/',password)

// add new string
var add = await session.update_data('Hello I Am Ravindu Manoj -')

// + add string
var second_add = await session.update_data('@ravindu01manoj')

// replace new string
var third_add = await session.update_data('replacement add',true)

// get data from model
var get_data = await session.get_data()

// delete model
var del = await session.delete_model()
```
```ts
//add
Hello I Am Ravindu Manoj -

//second_add
Hello I Am Ravindu Manoj -@ravindu01manoj

//third_add
replacement add

//get_data
replacement add

//del
true

```
## Array Model

```ts
var password = '' // password for enc file method

//init new Array Model
var list = git.arrayModel('list','Init','DB/',password)

// add new array
var add = await list.update_data([1,'mango'])

// + add array
var second_add = await list.update_data(['banana','apple'])

// replace new array
var third_add = await list.update_data(['cat','dog','ant'],true)

// get data from model
var get_data = await list.get_data()

// delete model
var del = await list.delete_model()
```
```ts
//add
[ 1, 'mango' ]

//second_add
[ 1, 'mango', [ 'banana', 'apple' ] ]

//third_add
[ 'cat', 'dog', 'ant' ]

//get_data
[ 'cat', 'dog', 'ant' ]

//del
true

```
## Object Model

```ts
var password = '' // password for enc file method

//init new Object Model
var item = git.objectModel('item','Init','DB/',password)

// add new object
var add = await item.update_data({name : 'Ravindu',age:'21'})

// + add object
var second_add = await item.update_data({country : 'sri_lanka',age:22,language : 'sinhala'})

// replace new object
var third_add = await item.update_data({game:'cricket',year: 2023},true)

// get data from model
var get_data = await item.get_data()

// delete model
var del = await item.delete_model()
```
```ts
//add
{ name: 'Ravindu', age: '21' }

//second_add
{ name: 'Ravindu', age: 22, country: 'sri_lanka', language: 'sinhala' }

//third_add
{ game: 'cricket', year: 2023 }

//get_data
{ game: 'cricket', year: 2023 }

//del
true

```


## ✍️ Authors <a name = "authors"></a>

- [Ravindu Manoj](https://github.com/ravindu01manoj) - project author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/Github-DB/contributors) who participated in this project.