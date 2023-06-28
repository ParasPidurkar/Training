#include<iostream>
using namespace std;
class BaseClass {
public:
    virtual void myMethod() final {
        std::cout << "BaseClass method" << std::endl;
    }
};

class DerivedClass : public BaseClass {
public:
    // This will cause a compile error, because myMethod is marked as final in BaseClass
    void myMethod() override {
        std::cout << "DerivedClass method" << std::endl;
    }
};
