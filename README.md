# Professional Team Profile Generator

The Team Profile Generator is an application to make team management organized and simple by allocating all important information in one place. 

## To-Do's for Resubmission
This app is currently in process and will be resubmitted with the following features:
* An In-Depth README
* How-To Video
* 4 successful tests using jest
* A sample HTML File
* Complete Code

## Description 
This description is in place to describe the current processes being used and the future funcitonality of the Professional Team Profile Generator.

This project, while in process, is based on creating a new document using fs, and taking information from Inquirer. These prompts will then be used to create an object that will then be transferred to a new HTML File.

In Index.js, we see that beginning on line 15, there is an async function that will create prompts and then use those prompts to create an array. 

the js files under "lib" directory contain the class constructor for "employee" and then sub-classes for engineer, intern, and manager. Corresponding to these individual class documents, are 4 test.js files that will be used to test each class independently to ensure accuracy.

Index2.js was an experiment to accomplish prompts and file generation using readLine, but integrating readLine with fs hasn't been sucessful so far and the code, to put it candidly, is not very pleasant to look at. 



## Getting Started

### Dependencies


### Installing



### Executing program



## Help


## Authors

Samantha Gosselin

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

[fs-extra](https://www.npmjs.com/package/fs-extra)
[jest](https://www.npmjs.com/package/jest)
[inquirer](https://www.npmjs.com/package/inquirer)
[README Template by DomPizzie](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)