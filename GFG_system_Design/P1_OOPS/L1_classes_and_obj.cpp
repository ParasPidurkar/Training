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

    Dog tuffy("tuffy", "papillon", 5, "white");

    cout << tuffy.toString();
    cout<<"\nAddress of tuffy object"<<&tuffy;

    return 0;
}
