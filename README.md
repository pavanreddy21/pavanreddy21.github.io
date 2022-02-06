#The program computes histogram for the given text file using threads

##Instructions
#Compile the c code

The Executable file requires 2 parameters
1. number of threads
Example: ./a.out 3

2. text file name
Example ./a.out 3 sample.txt

there is also one optional parameter to run the threads synchronously or asynchronously
3. Synchronous mode or asynchronous mode
Example ./a.out 3 sample.txt SYNCHRONIZE


#Sample output NORMAL MODE for the file given in assignment
```
./a.out 2 sample.txt 
```

```
Line 1: {a:2,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:4,p:1,q:1,r:2,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 11: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 2: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 12: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 3: {a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 13: {a:2,b:1,c:1,d:1,e:3,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:2,z:1}
Line 4: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 14: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:4,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 5: {a:2,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 15: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:3,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 16: {a:1,b:1,c:1,d:1,e:3,f:1,g:1,h:2,i:1,j:1,k:1,l:1,m:1,n:1,o:4,p:1,q:1,r:2,s:1,t:2,u:2,v:1,w:1,x:1,y:1,z:1}
Line 17: {a:1,b:1,c:1,d:2,e:2,f:1,g:1,h:1,i:5,j:1,k:1,l:2,m:1,n:1,o:1,p:1,q:1,r:2,s:1,t:2,u:2,v:1,w:1,x:1,y:1,z:1}
Line 6: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:4,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 18: {a:3,b:1,c:2,d:1,e:6,f:1,g:1,h:1,i:3,j:1,k:1,l:2,m:1,n:1,o:2,p:1,q:1,r:4,s:2,t:2,u:2,v:1,w:1,x:1,y:3,z:1}
Line 7: {a:3,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:2,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 19: {a:1,b:1,c:1,d:2,e:7,f:1,g:1,h:1,i:3,j:1,k:1,l:2,m:1,n:2,o:3,p:3,q:1,r:4,s:1,t:4,u:3,v:1,w:1,x:1,y:2,z:1}
Line 8: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:3,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 20: {a:5,b:2,c:1,d:3,e:4,f:1,g:1,h:3,i:3,j:2,k:1,l:1,m:1,n:2,o:7,p:2,q:1,r:1,s:2,t:4,u:1,v:1,w:1,x:1,y:1,z:2}
Line 9: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 21: {a:4,b:2,c:1,d:5,e:6,f:1,g:1,h:1,i:5,j:1,k:1,l:1,m:1,n:3,o:3,p:1,q:1,r:4,s:1,t:5,u:2,v:1,w:1,x:1,y:1,z:1}
Line 10: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 22: {a:5,b:1,c:1,d:1,e:10,f:1,g:2,h:1,i:1,j:1,k:1,l:2,m:1,n:3,o:3,p:1,q:1,r:7,s:1,t:2,u:3,v:1,w:1,x:1,y:2,z:1}
```


Sample output SYNCHRONOUS Mode for the file given in assignment
```
./a.out 2 sample.txt SYNCHRONIZE
```
```
Line 1: {a:2,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:4,p:1,q:1,r:2,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 2: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 3: {a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 4: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 5: {a:2,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 6: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:4,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 7: {a:3,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:2,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 8: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:3,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 9: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 10: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 11: {a:2,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 12: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:2,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
Line 13: {a:2,b:1,c:1,d:1,e:3,f:1,g:1,h:1,i:2,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:2,z:1}
Line 14: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:4,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 15: {a:1,b:1,c:1,d:1,e:2,f:1,g:1,h:1,i:3,j:1,k:1,l:1,m:1,n:1,o:3,p:1,q:1,r:1,s:1,t:1,u:2,v:1,w:1,x:1,y:1,z:1}
Line 16: {a:1,b:1,c:1,d:1,e:3,f:1,g:1,h:2,i:1,j:1,k:1,l:1,m:1,n:1,o:4,p:1,q:1,r:2,s:1,t:2,u:2,v:1,w:1,x:1,y:1,z:1}
Line 17: {a:1,b:1,c:1,d:2,e:2,f:1,g:1,h:1,i:5,j:1,k:1,l:2,m:1,n:1,o:1,p:1,q:1,r:2,s:1,t:2,u:2,v:1,w:1,x:1,y:1,z:1}
Line 18: {a:3,b:1,c:2,d:1,e:6,f:1,g:1,h:1,i:3,j:1,k:1,l:2,m:1,n:1,o:2,p:1,q:1,r:4,s:2,t:2,u:2,v:1,w:1,x:1,y:3,z:1}
Line 19: {a:1,b:1,c:1,d:2,e:7,f:1,g:1,h:1,i:3,j:1,k:1,l:2,m:1,n:2,o:3,p:3,q:1,r:4,s:1,t:4,u:3,v:1,w:1,x:1,y:2,z:1}
Line 20: {a:5,b:2,c:1,d:3,e:4,f:1,g:1,h:3,i:3,j:2,k:1,l:1,m:1,n:2,o:7,p:2,q:1,r:1,s:2,t:4,u:1,v:1,w:1,x:1,y:1,z:2}
Line 21: {a:4,b:2,c:1,d:5,e:6,f:1,g:1,h:1,i:5,j:1,k:1,l:1,m:1,n:3,o:3,p:1,q:1,r:4,s:1,t:5,u:2,v:1,w:1,x:1,y:1,z:1}
Line 22: {a:5,b:1,c:1,d:1,e:10,f:1,g:2,h:1,i:1,j:1,k:1,l:2,m:1,n:3,o:3,p:1,q:1,r:7,s:1,t:2,u:3,v:1,w:1,x:1,y:2,z:1}
```
