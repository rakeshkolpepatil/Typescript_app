// Step 1 - Specifying the function argument types.
// let num1: number = 4
// function calculate(num1: number, num2: number){
//   return num1 + num2;
// }
// console.log(calculate(num1, 3))
// -------------------------------------------------------------------------------
// Step 2 - Specifying the type of function arguments using primitive datatypes.
// function getTotal(numbers: number[]) {
//   return numbers.reduce( (acc, item)=>{
//     return acc+item;
//   }, 0)
// }
// console.log(getTotal([1,2,3,4]))
// -------------------------------------------------------------------------------
// Step 3 - Specifying type of the function arguments using generics.
// function getTotal(numbers: Array<number>) {
//   return numbers.reduce( (acc, item)=>{
//     return acc+item;
//   }, 0)
// }
// console.log(getTotal([1,2,3,4]))
// -------------------------------------------------------------------------------
// Step 4 - Typescript enables auto-completion of the member properties. 
// const student = {
//   firstName: 'Ram',
//   lastName: 'Patil',
//   age: 40
// }
// console.log(student.age)
// -------------------------------------------------------------------------------
// Step 5 - Type Alias and options member variables.
// type myNumber = number;
// type Student = {
//   name: string;
//   age: number;
//   address?: string
// }
// const Shone: Student = {
//   name: 'Shone',
//   age: 28
// } 
// // Specifying the return type of the function.
// function login(userData: Student): boolean {
//   if(userData.age > 18)
//     return true
//   else
//     return false
// }
// console.log(login(Shone))
// -------------------------------------------------------------------------------
// Step 6 - Custom Data Types 
// type Id = boolean | number;
// const UniqId : Id = 1234
// const SecondId : Id = true
// -------------------------------------------------------------------------------
// Step 8 - Interfaces
// interface Transaction {
//   payerAccount: number;
//   payeeAccount: number;
// }
// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transaction: Transaction[];
// }
// const tran1: Transaction ={
//   payerAccount: 1111,
//   payeeAccount: 1234
// }
// const tran2: Transaction ={
//   payerAccount: 1111,
//   payeeAccount: 1234
// }
// const acc: BankAccount ={
//   accountNumber: 2222,
//   accountHolder:'Digo Bango',
//   balance: 123412341234,
//   isActive: false,
//   transaction:[tran1, tran2]
// }
// -------------------------------------------------------------------------------
// Step 9 - Extend Interfaces
// interface Book {
//   name: string,
//   price: number
// }
// const book1: Book = {
//   name: "Power of Words",
//   price: 200
// }
// interface EBook extends Book {
//   size: number,
//   format: string
// }
// const ebook1: EBook = {
//   name: 'Word Power made Easy',
//   price: 140,
//   size: 10,
//   format: 'pdf'
// }
// interface AudioBook extends EBook {
//   duration: string
// }
// const audio1 : AudioBook = {
//   name: 'Rich Dad',
//   price: 400,
//   size: 20,
//   format: 'mp3',
//   duration: '6hr'
// }
// -------------------------------------------------------------------------------
// Step 10 - interface Merging - Defining two interfaces with same name will result in a new interface with same name but having union of the member properties.
// interface Book {
//   name: string,
//   price: number
// }
// interface Book {
//   size: number
// }
// const book1: Book = {
//   name: 'Rick Dad',
//   price: 1324,
//   size: 98
// }
// console.log(book1)
// -------------------------------------------------------------------------------
// Step 11 - Merging of 'Types' is not possible in short you can not have two user defined 'Type' variables with same name. Following code will throw errors while compiling.
// type Id = {
//   name: string,
//   rollNo: number
// }
// type Id = {
//   company: string
// }
// -------------------------------------------------------------------------------
// Step 12 - 'types' can be used for primitive data types but 'interfaces' can not extend primitive data types. Following code will throw error while compiling. 
// Error - TS2840: An interface cannot extend a primitive type like 'string';
// type myString = string;
// interface IString extends string {
//   name: string
//}
// -------------------------------------------------------------------------------
// Step 13 - Unions and Narrowing
// Unions
// type Id = number| string;
// // Narrowing
// function printId(id: Id){
//   if( typeof id === "number" ){
//     console.log(id)
//   }
//   else{
//     console.log(id.toUpperCase())
//   }
// } 
// printId(123)
// printId('learn2earn')
// -------------------------------------------------------------------------------
// Step 14 - Generics
// function loginfo<T>(arg: T): T {
//   console.log(arg)
//   return arg
// }
// loginfo('Hello');
// loginfo(1233)
// loginfo(true)
// -------------------------------------------------------------------------------
// Step 15 - Generics more Complicated Example.
// interface hasAge {
//   age: number
// }
// function getOldest<T extends hasAge>(arg: T[] ): T{
//   return arg.sort( (a, b)=> b.age - a.age )[0]
// }
// const persons: hasAge[] = [
//   {age: 10}, 
//   {age: 30}, 
//   {age: 20}
// ]
// console.log(getOldest(persons))
// interface ITeamMate {
//   name: string;
//   age: number
// }
// const team: ITeamMate[] =[
//   {name: 'James', age:50},
//   {name: 'Radha', age:20},
//   {name: 'Vikas', age:60}
// ]
// console.log(getOldest(team))
// Step 16 - 'Assertions' in typescript. Assertions are not good, they defy the purpose of typescript but you can learn it as a concept.
// interface hasAge {
//   age: number
// }
// interface IStudent {
//   name:string,
//   age: number
// }
// function getOldest(arg: hasAge[] ): hasAge{
//   return arg.sort( (a, b)=> b.age - a.age )[0]
// }
// const team: IStudent[] = [
//   {name:'Radha', age: 10}, 
//   {name:'Krishna', age: 15}, 
//   {name:'Jenny', age: 20}
// ]
// // Following code throws an error - error TS2339: Property 'name' does not exist on type 'hasAge'.
// // const oldStudent = getOldest(team)
// // To avoid above error we do following 'assertion'
// const oldStudent = getOldest(team) as IStudent
// console.log(oldStudent.name)
// Step 17 - 'Generics' in functions.
// interface IPost {
//   title: string;
//   description: string;
//   id: number;
// }
// interface IUser {
//   id: number;
//   title: string;
// }
// const fetchData = async<T> (url: string): Promise<T> =>{
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// }
// (async()=>{
//   const posts = await fetchData<IPost[]>('/posts');
//   const users = await fetchData<IUser[]>('/users');
//   console.log(posts[0].description)
//   console.log(users[0].id)
// })()
// Step 18 - Structural Typing or Duck Typing - Even though 'RameshCred' variable is not of interface type 'ICredentials', still 'login' function is accepting it. This is happening bcs 'username' and 'password' is present in 'RameshCred' variable. Javascript accepts the objects of similar shape at specified interface types. This feature of Javascript is called as 'Duck Typing' or 'Structural Typing'.
// interface ICredentials {
//   username: string;
//   password: string;
// }
// function login(user: ICredentials): bool{
//   console.log(user.username);
//   return true
// }
// const RameshCred ={
//   username: 'Ramesh',
//   password: "RameshSecret",
//   age: 40
// }
// login(RameshCred)
// Step 19 - Specifying function inside interface.
// interface IAuth {
//   username: string;
//   password: string;
//   login(username: string, password: string): boolean;
// }
// const Ramesh: IAuth = {
//   username: "Ramesh",
//   password:"RameshSecret",
//   login(username, password){
//     return true;
//   }
// }
// Step 20 - Inference - TypeScript inferences the type of the variable depending upon the type of value stored inside it.
var x = 10;
var y = 'Ramesh';
console.log(x, y);
// Step 21 - 'tsc --init' will initialize and generate 'tsconfig.json' file.
// 'outDir' option specifies the output directory where compiled files will be stored. 
// Step 22 - Creating react-app and adding typescript support to it.
// npx create-react-app app_name --template typescript
