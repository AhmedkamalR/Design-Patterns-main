// We have a class Username in "username.js" representing a simple data class 
// with a private property _username. It has getter and setter methods 
// for accessing and modifying the _username property.

// In "singleton.js", we create a Singleton for the Username class using the getInstance function.
//  The getInstance function checks if an instance of the class exists. If it does,
//  it returns the existing instance; otherwise,
//  it creates a new instance using the createInstance function.

// The createInstance function creates a new instance of 
// the Username class and returns it.

// In the main function, we demonstrate how the Singleton works.
//  We get two instances of the Username class using the getInstance function.
//  Even though we called getInstance twice, the second time,
//  it doesn't create a new instance but returns the same instance created earlier.

// We then set the username property of the first instance to "Jack".

// When we try to access the username property of the second instance,
//  we can see that it also reflects "Jack". This demonstrates that both instances point to the same object,
//  ensuring there is only one shared instance of the Username class.

// The output of the console.log statements confirms 
// that both instances are equal and share the same data.

// In summary, the Singleton design pattern ensures
//  that a class has only one instance and provides a global point of access to that instance.
//  In this example, the Username class has only one shared instance, 
// and we access that instance through the getInstance function.
//  This pattern is useful when you want to have a single shared instance of 
// an object throughout your application to manage a common state or resource efficiently.