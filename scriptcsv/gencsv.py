#importation des modules json et pandas
import pandas 
import json
import os
from transfo import transfo
fichier = open("benin_zones_bj_lean.json")
list_vq = []
list_arr = []
list_com = []
list_dep = []
list_lieu = []


#lecture et transformation du fichier json en csv
obj = pandas.read_json("benin_zones_bj_lean.json",orient ="values")
obj.to_csv("dep.csv")

#création et remplissage des listes list_vq,list_arr, list_com et list_dep par chacune des entitées et leur code
list_lieu = json.load(fichier)
for i in range(len(list_lieu)):
    list_vq.append([list_lieu[i]["CVQ"],list_lieu[i]["VQ"]])
    list_arr.append([list_lieu[i]["CAR"],list_lieu[i]["AR"]])
    list_com.append([list_lieu[i]["CCM"],list_lieu[i]["CM"]])
    list_dep.append([list_lieu[i]["CDP"],list_lieu[i]["DP"]])

#suppression des doublons dans la liste des villages    
for i in range(len(list_vq)):
    while list_vq.count(list_vq[i]) > 1:
        del list_vq[i]

#création d'un fichier json contenant les villages
os.system("touch vq.json")
fich = open("vq.json","r+")
json.dump(list_vq,fich)


#suppression des doublons dans la liste des arrondisements
j = 0
while j < (len(list_arr)):
    while list_arr.count(list_arr[j]) > 1:
        del list_arr[j]
    j += 1
#création du fichier json fich1 contenant les arrondissements et remplissage par les données json
os.system("touch arr.json")    
fich1 = open("arr.json","r+")
json.dump(list_arr,fich1)

#suppression des doublons dans la liste des communes
k = 0
while k < (len(list_com)):
    while list_com.count(list_com[k]) > 1:
        del list_com[k]
    k += 1
#création du fichier json fich2 contenant les arrondissements et remplissage par les données json
os.system("touch com.json")
fich2 = open("com.json","r+")
json.dump(list_com,fich2,indent=2)

#suppression des doublons dans la liste des départements
l = 0
while l < (len(list_dep)):
    while list_dep.count(list_dep[l]) > 1:
        del list_dep[l]
    l += 1
#création du fichier json fich3 contenant #création du fichier json fich2 contenant les arrondissements et remplissage par les données jsonles arrondissements et remplissage par les données json
os.system("touch dep.json")
fich3 = open("dep.json","r+")
json.dump(list_dep,fich3)

'''def transfo():
 #Transformation des fichiers json de chacune  des entités en csv
 obj1 = pandas.read_json("vq.json",orient ="values")
 obj1.to_csv("vq.csv")

 obj2 = pandas.read_json("arr.json",orient ="values")
 obj2.to_csv("arr.csv")

 obj3 = pandas.read_json("com.json",orient ="values")
 obj3.to_csv("com.csv")

 obj4 = pandas.read_json("dep.json",orient ="values")
 obj4.to_csv("dep.csv")'''

transfo

#Suppression des fichiers json
os.system("rm dep.json com.json arr.json vq.json ") 





    
    
    
