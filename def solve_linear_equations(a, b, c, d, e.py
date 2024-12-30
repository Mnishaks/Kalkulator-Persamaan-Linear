def solve_linear_equations(a, b, c, d, e, f):
    # Hitung determinan
    determinant = a * e - b * d
    if determinant == 0:
        return "Persamaan tidak memiliki solusi unik (determinannya nol)."
    
    # Hitung nilai x dan y
    x = (c * e - b * f) / determinant
    y = (a * f - c * d) / determinant
    return x, y

def main():
    print("Kalkulator Persamaan Linear Dua Variabel")
    print("Persamaan dalam bentuk: ax + by = c dan dx + ey = f")
    
    # Input nilai koefisien
    a = float(input("Masukkan nilai a: "))
    b = float(input("Masukkan nilai b: "))
    c = fl
