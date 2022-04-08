start = input("")

file = "3dprint/footer.html"
new_file = "3dprint/clean_footer.html"

file = f"3dprint/{start}.html"
new_file = f"3dprint/clean_{start}.html"


print(file)
try:
    input('g')
    with open(file,'r') as f:
        input('opened')
        q = str(f.read())
        print(q)
        print("\n\n\n")
        z = q.replace(".html",'')
        print(z)
except FileNotFoundError:
    print("file doesn't exist")
    input("the end")
    quit()
else:
    print('no Error')
finally:
    input("the end")



try:
    with open(new_file,'w') as f:
        print(z,file=f)
except:
    input("error")
else:
    print('goed')
finally:
    input("the real end")