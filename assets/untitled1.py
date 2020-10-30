import matplotlib.pyplot as plt
import numpy
# creating the dataset 
data = {'1/19':0.5,'2/19':0.6,'3/19':0.5,'4/19':0.4,'5/19':0.2,'6/19':0.6,'7/19':0.4,'8/19':0.5,'9/19':0.4,'10/19':0.7,'11/19':0.6,'12/19':0.4,} 
courses = list(data.keys()) 
values = list(data.values()) 
   
fig = plt.figure(figsize = (10, 5)) 
  
# creating the bar plot 
plt.bar(courses, values,  
        width = 0.4) 
# plt.grid(True)
plt.xlabel("Mês") 
# plt.ylabel("% ") 
plt.title("Vendas")
plt.savefig('g2.png')
#plt.show()

