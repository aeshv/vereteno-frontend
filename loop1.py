import time
import random
import sys

error_messages = [
    "ModuleNotFoundError: No module named 'numpy'",
    "SyntaxError: unexpected EOF while parsing",
    "TypeError: 'int' object is not subscriptable",
    "NameError: name 'x' is not defined",
    "ValueError: invalid literal for int() with base 10",
    "KeyError: 'key not found in dictionary'",
    "IndentationError: unexpected indent",
    "ZeroDivisionError: division by zero", 
    "AttributeError: 'list' object has no attribute 'removee'", 
    "IndexError: list index out of range", 
    "FileNotFoundError: [Errno 2] No such file or directory: 'file.txt'", 
    "AssertionError", "MemoryError", "NotImplementedError", 
    "RecursionError: maximum recursion depth exceeded", 
    "ImportError: cannot import name 'function' from 'module'", 
    "OSError: [Errno 13] Permission denied"
]


def load_indicator():
    """Displays a simple loading animation"""
    for i in range(101):
        time.sleep(0.005)
        sys.stdout.write(f"\rLoading: {i}%")
        sys.stdout.flush()


def error_message():
    """Displays a random error message in red font"""
    message = random.choice(error_messages)
    print("\033[91m{}\033[00m".format(message))


def main():
    """Main function for displaying random information"""
    while True:
        info = f"Successfully installed {random.randint(1, 5)} packages"
        time.sleep(random.uniform(0.1, 0.5))
        print(info)

        if random.random() < 0.5:
            error_message()
        else:
            load_indicator()


if __name__ == "__main__":
    main()
