def calculate(a, b, op):
    if op == "+":
        return a + b
    if op == "-":
        return a - b
    if op == "*":
        return a * b
    if op == "/":
        return a / b if b != 0 else None
    return None

x = float(input("Enter first number: "))
y = float(input("Enter second number: "))
operator = input("Choose + - * / : ")

result = calculate(x, y, operator)
if result is None:
    print("Invalid operation or division by zero.")
else:
    print(f"Result: {result}")