import pandas
def transfo():
 #Transformation des fichiers json de chacune  des entités en csv
 obj1 = pandas.read_json("vq.json",orient ="values")
 obj1.to_csv("vq.csv")

 obj2 = pandas.read_json("arr.json",orient ="values")
 obj2.to_csv("arr.csv")

 obj3 = pandas.read_json("com.json",orient ="values")
 obj3.to_csv("com.csv")

 obj4 = pandas.read_json("dep.json",orient ="values")
 obj4.to_csv("dep.csv")
