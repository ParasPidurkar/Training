#include<iostream>
using namespace std;
class Dog {

    // Instance Variables

    string name;

    string breed;

    int age;

    string color;

    // Constructor Declaration of Class

public:
    Dog(string name, string breed, int age, string color)
    {

        this->name = name;

        this->breed = breed;

        this->age = age;

        this->color = color;
    }

    // method 1

    string getName() { return name; }

    // method 2

    string getBreed() { return breed; }

    // method 3

    int getAge() { return age; }

    // method 4

    string getColor() { return color; }

    // toString method

    string toString()
    {

        return ("Hi my name is " + this->getName()
                + ".\nMy breed, age and color are "
                + this->getBreed() + ", "
                + to_string(this->getAge()) + ", "
                + this->getColor());
    }
};

int main()
{

    Dog *tuffy = new Dog("tuffy", "papillon", 5, "white");

    cout << tuffy->toString();
    cout<<"\nAddress of tuffy object"<<&tuffy;

    return 0;
}


// In C++, Dog tommy(12, "tommy"); and Dog *tommy = new Dog(12, "tommy"); are two different ways to create an object, but they have different characteristics:

// Stack Allocation (Dog tommy(12, "tommy");):

// Dog tommy(12, "tommy"); creates an object of the Dog class on the stack.
// The memory for this object is automatically managed. When tommy goes out of scope, its destructor will be called, and the memory will be freed automatically.
// You can access members of tommy directly using the dot (.) operator, like tommy.name.
// Heap Allocation (Dog *tommy = new Dog(12, "tommy");):

// Dog *tommy = new Dog(12, "tommy"); creates an object of the Dog class on the heap.
// This allocates memory dynamically, and it's your responsibility to free this memory when it's no longer needed by calling delete tommy;.
// Because tommy is a pointer to an object, you need to use the arrow (->) operator to access its members, like tommy->name.
// Generally, you should prefer stack allocation (Dog tommy(12, "tommy");) unless you have a specific reason to use heap allocation, such as when the object needs to outlive the scope in which it was created or if the size of the object is too large for the stack.