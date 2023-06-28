#include <iostream>
#include <stdexcept>
#include <string>

class ExampleClass {
private:
    std::string emp_name;

public:
    ExampleClass(std::string emp_name)
        : emp_name(emp_name)
    {
    }
    std::string getemp_name() { return emp_name; }
    void setemp_name(std::string emp_name)
    {
        this->emp_name = emp_name;
    }
};

int main()
{
    try {
        ExampleClass exampleObject("GeeksForGeeks");
        std::cout << exampleObject.getemp_name()
                  << std::endl;
    }
    catch (const std::exception& e) {
        std::cerr << e.what() << std::endl;
        return 1;
    }
    return 0;
}
