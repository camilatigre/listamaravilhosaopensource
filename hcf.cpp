#include <iostream>
#include <cmath> // Para usar std::abs
using namespace std;

// Função para encontrar o HCF usando o Algoritmo de Euclides
int findhcf(int num1, int num2) {
    // Converte os números para valores absolutos para lidar com números negativos
    num1 = abs(num1);
    num2 = abs(num2);

    // Enquanto num2 não for zero, aplica o algoritmo de Euclides
    while (num2 != 0) {
        int temp = num2; // Armazena o valor atual de num2
        num2 = num1 % num2; // Atualiza num2 com o resto da divisão
        num1 = temp; // Atualiza num1 para o valor anterior de num2
    }
    return num1; // Retorna o HCF
}

// Função para validar entradas e solicitar números ao usuário
void getInput(int &num1, int &num2) {
    cout << "Enter 2 non-negative integers: "; // Solicita ao usuário que insira dois números
    cin >> num1 >> num2;

    // Verifica se os números são não negativos
    if (num1 < 0 || num2 < 0) {
        cout << "Please enter non-negative integers." << endl; // Mensagem de erro
        exit(1); // Sai do programa com um código de erro
    }
}

int main() {
    int num1, num2; // Declaração das variáveis para os números
    getInput(num1, num2); // Chama a função para obter entrada do usuário

    int ans = findhcf(num1, num2); // Chama a função findhcf para calcular o HCF
    cout << "The HCF is: " << ans << endl; // Exibe o resultado

    return 0; // Indica que o programa terminou com sucesso
}
