def solve_linear_equation(a, b):
    """
    Fungsi untuk menyelesaikan persamaan linear ax + b = 0.
    """
    if a == 0:
        if b == 0:
            return "Persamaan memiliki tak hingga solusi (identitas)."
        else:
            return "Persamaan tidak memiliki solusi (inkonsistensi)."
    else:
        x = -b / a
        return f"Solusi dari persamaan {a}x + {b} = 0 adalah x = {x:.2f}"


# Menu utama
def main():
    print("=== KALKULATOR PERSAMAAN LINEAR ===")
    print("Format persamaan: ax + b = 0")
    
    try:
        a = float(input("Masukkan nilai a: "))
        b = float(input("Masukkan nilai b: "))
        result = solve_linear_equation(a, b)
        print(result)
    except ValueError:
        print("Input tidak valid. Harap masukkan angka.")

if __name__ == "__main__":
    main()
