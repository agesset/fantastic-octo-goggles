#importation des modules json et pandas
import pandas 
import json
import os
fichier = open("benin_zones_bj_lean.json")
list_vq = []
list_arr = []
list_com = []
list_dep = []
#list_donn = json.load(fichier)

#lecture et transformation du fichier json en csv
'''obj = pandas.read_json("benin_zones_bj_lean.json",orient ="values")
obj.to_csv("depo.csv")'''

#print(list_donn)
#list_dep = pandas.read_csv("dep.csv")
#list_dep.head()
# print(list_dep.head())
#print([list_dep["CDP"],list_dep["DP"]])
list_lieu = []
list_lieu = json.load(fichier)
for i in range(len(list_lieu)):
    list_vq.append([list_lieu[i]["CVQ"],list_lieu[i]["VQ"]])
    list_arr.append([list_lieu[i]["CAR"],list_lieu[i]["AR"]])
    list_com.append([list_lieu[i]["CCM"],list_lieu[i]["CM"]])
    list_dep.append([list_lieu[i]["CDP"],list_lieu[i]["DP"]])

#Suppression des doublons dans la liste des villages    
'''for i in range(len(list_vq)):
    while list_vq.count(list_vq[i]) > 1:
        del list_vq[i]
os.system("touch vq.json")
fich = open("ter.json","r+")
json.dump(list_vq,fich)'''
j = 0
'''while j < (len(list_arr)):
    while list_arr.count(list_arr[j]) > 1:
        del list_arr[j]
    j += 1

os.system("touch arr.json")    
fich1 = open("arr.json","r+")
json.dump(list_arr,fich1)'''

'''k = 0
while k < (len(list_com)):
    while list_com.count(list_com[k]) > 1:
        del list_com[k]
    k += 1

os.system("touch com.json")
fich2 = open("com.json","r+")
json.dump(list_com,fich2,indent=2)'''

'''l = 0
while l < (len(list_dep)):
    while list_dep.count(list_dep[l]) > 1:
        del list_dep[l]
    l += 1

os.system("touch dep.json")
fich3 = open("dep.json","r+")
json.dump(list_dep,fich3)'''
obj = pandas.read_json("vq.json",orient ="values")
obj.to_csv("vq.csv")

obj = pandas.read_json("arr.json",orient ="values")
obj.to_csv("arr.csv")

obj = pandas.read_json("com.json",orient ="values")
obj.to_csv("com.csv")

obj = pandas.read_json("dep.json",orient ="values")
obj.to_csv("dep.csv")





    
    
    
