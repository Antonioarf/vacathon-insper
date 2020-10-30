import numpy as np
import scipy
import matplotlib.pyplot as plt
import seaborn as sns
from random import randint
# creating the dataset 
# data = {'1/19':0.5,'2/19':0.6,'3/19':0.5,'4/19':0.4,'5/19':0.2,'6/19':0.6,'7/19':0.4,'8/19':0.5,'9/19':0.4,'10/19':0.7,'11/19':0.6,'12/19':0.4,} 
# courses = list(data.keys()) 
# values = list(data.values()) 
   
# fig = plt.figure(figsize = (10, 5)) 
  
# # creating the bar plot 
# plt.bar(courses, values,  
#         width = 0.4) 
# data = []
# for e in range(360):
#     data.append(randint(10,20)/100)
# # for e in range(90):
# #     data.append(100+(randint(0,10)))
# # for e in range(90):
# #     data.append(100+(randint(5,15)))
# # for e in range(90):
# #     data.append(100+(randint(10,20)))
    
# data = np.array(data)
# norm_cdf = scipy.stats.norm.cdf(data)
# data = [100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4),100+ randint(-2,4)]

# plt.plot(data2,data,'o')
# sns.lineplot(x=data2, y=norm_cdf)
# plt.grid(True)
# x1,x2,y1,y2 = plt.axis()
# plt.axis((0,30,0,1))

data1 = []
for e in range(360):
    data1.append(100 + randint(-50,-25))
d1 = ["Alimento","Manutenção","IR","Folha","Outros"]
data = [55,25,5,10,5]
data2 = range(len(data1))
# data2 = range(len(data))
plt.bar(data2, data1 ,width = 0.4)
plt.xlabel("Data") 
plt.ylabel("% do Orçamento") 
plt.title("Historico de Compras")
plt.savefig('g100.png')
#plt.show()


