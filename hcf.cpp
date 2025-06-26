#include <iostream>
#include <cmath>
using namespace std;

int findhcf(int num1, int num2) {
    num1 = abs(num1);
    num2 = abs(num2);

    while (num2 != 0) {
        int temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

void getInput(int &num1, int &num2) {
    cout << "Enter 2 non-negative integers: ";
    cin >> num1 >> num2;

    if (num1 < 0 || num2 < 0) {
        cout << "Please enter non-negative integers." << endl;
        exit(1);
    }
}

int main() {
    int num1, num2;
    char choice;

    do {
        getInput(num1, num2);
        int ans = findhcf(num1, num2);
        cout << "The HCF is: " << ans << endl;

        cout << "Do you want to calculate again? (y/n): ";
        cin >> choice;

    } while (choice == 'y' || choice == 'Y');

    cout << "Program ended. Thank you!" << endl;
    return 0;
}
