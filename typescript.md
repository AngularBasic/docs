# Typescript

## Quickstart

### install

`npm install -g typescript`

### write your first typescript-file

```typescript
class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();
```

### transpile

`tsc hello.ts`

### run

`node hello.js`

## The Lesson

### basic facts

* Typescript aims to enhance codequality and understandability of javascript-code
* typescript is a superset of javascript
  * valid javascript-code is also valid typescript-code
* typescript transpiles to javascript
  * means: the typescript-compile (`tsc`) emits javascript
* typescript provides an optional type-system for javascript
  * it adds common concepts to javascript, such as:
  * classes
  * modules
  * interfaces
  * generics
  * static typing
* typescript provides planned features from future javascript-versions to the actual coding-experience

### language-features

#### types

* basic types
  * boolean
  * number
  * string
* you can ommit type annotations

* there is a dynamic type, called `any`
* there is the `const` keyword
* you get typed arrays
* you get enums
* you get `void` functions

#### What about functions

* functions are first-class citizens
* functions support lambda syntax

#### interfaces and classes

* you get interfaces to get type-checking without defining actual classes with implementation-details
* interfaces are virtual structures, which only exists within the typescript-context
* interfaces defines the structural contract vor your variables, which properties with which types are to be used
* interfaces can also describe function-types
* classes describe type-safe objects with implementation-details
* class-members are public by default 
* you get constructors, functions, static properties
* you can implement interfaces on your classes
* you get inheritance
* you can use generics

#### modules

* you can encapsulate and group your code in modules and submodules
* you can import modules with aliases

#### syntactic sugar

* string-interpolation with template-strings
* multi-line strings

#### readonly

* new feature since ts 3.1

#### async await

* neat feature, see the example

```bash
cd example
tsc -p tsconfig.json test.ts
node test.js
```